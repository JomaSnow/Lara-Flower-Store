<?php

namespace App\Http\Controllers;

use App\Models\ItemOrder;
use App\Models\Order;
use App\Models\Product;
use Illuminate\Http\Request;

class ItemOrderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return ItemOrder::all();
    }

    /**
     * Store a newly created resource in storage.
     * Chamar quando adicionar um produto ao carrinho.
     * Somente admin e dono do pedido.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $order_id
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, $order_id)
    {
        $current_user = auth()->user();
        $order = Order::find($order_id);

        $fields = $request->validate([
            'discount' => 'required|decimal:0,5',
            'quantity' => 'required|numeric',
            'product_id' => 'required|numeric'
        ]);

        $product = Product::find($fields['product_id']);

        $order_controller = new OrderController();

        if ($product->stock < $fields['quantity']) {
            return response(['message' => 'Sem estoque.'], 406);
        }

        if ($current_user->role == 'USER') {
            if ($current_user->id == $order->user_id) {

                $product->update(['stock' => $product->stock - $fields['quantity']]);

                $new_item = ItemOrder::create([
                    'unit_price' => $product->price,
                    'discount' => $fields['discount'],
                    'quantity' => $fields['quantity'],
                    'product_id' => $fields['product_id'],
                    'order_id' => $order_id
                ]);

                $order_controller->updateTotal($order_id);

                return $new_item;
            } else {

                return response(['message' => 'Não autorizado.'], 403);
            }
        } else {

            $product->update(['stock' => $product->stock - $fields['quantity']]);

            $new_item = ItemOrder::create([
                'unit_price' => $product->price,
                'discount' => $fields['discount'],
                'quantity' => $fields['quantity'],
                'product_id' => $fields['product_id'],
                'order_id' => $order_id
            ]);

            $order_controller->updateTotal($order_id);

            return $new_item;
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return ItemOrder::find($id);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $current_user = auth()->user();

        $fields = $request->validate([
            'discount' => 'decimal:0,5',
            'quantity' => 'required|numeric',
        ]);

        $item = ItemOrder::find($id);
        $order = $item->order;

        $product = $item->product;

        $order_controller = new OrderController();

        if ($product->stock + $item->quantity < $fields['quantity']) {
            return response(['message' => 'Sem estoque.'], 406);
        }

        if ($current_user->role == 'USER') {
            if ($current_user->id == $order->user_id) {

                $product->update(['stock' => $product->stock + $item->quantity - $fields['quantity']]);

                $item->update($request->all());

                $order_controller->updateTotal($order->id);

                return $item;
            } else {

                return response(['message' => 'Não autorizado.'], 403);
            }
        } else {

            $product->update(['stock' => $product->stock + $item->quantity - $fields['quantity']]);

            $item->update($request->all());

            $order_controller->updateTotal($order->id);

            return $item;
        }
    }

    /**
     * Remove the specified resource from storage.
     * Atualiza o estoque do produto.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $item = ItemOrder::find($id);

        $product = Product::find($item->product_id);
        $product->update(['stock' => $product->stock + $item->quantity]);

        return ItemOrder::destroy($id);
    }
}
