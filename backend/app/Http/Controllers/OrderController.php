<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\Product;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

        $current_user_role = auth()->user()->role;

        if ($current_user_role == 'USER') {
            return response(['message' => 'Não autorizado.'], 403);
        }

        return Order::all();
    }

    /**
     * Store a newly created resource in storage.
     * Chamar quando criar o carrinho.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $fields = $request->validate([
            'discount' => 'required|decimal:0,5'
        ]);

        return $new_order = Order::create([
            'total' => 0,
            'discount' => $fields['discount'],
            'status' => 'PENDENTE',
            'user_id' => auth()->user()->id
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $current_user = auth()->user();
        $order = Order::find($id);

        if ($current_user->role == 'USER') {
            if ($current_user->id != $order->user_id) {
                return response(['message' => 'Não autorizado.'], 403);
            }
        }

        return $order;
    }

    /**
     * Update the specified resource in storage.
     * Atualiza quando mudar o status.
     * Apenas admin.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $current_user_role = auth()->user()->role;

        if ($current_user_role == 'USER') {
            return response(['message' => 'Não autorizado.'], 403);
        }

        $order = Order::find($id);
        $order->update($request->all());
        return $order;
    }

    /**
     * Update the specified resource in storage.
     * Atualiza sempre que criar um item novo.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function updateTotal($id)
    {
        $order = Order::find($id);

        $items = $order->items;
        $total = 0;

        foreach ($items as $item) {
            $total = $total + (($item->unit_price - $item->discount) * $item->quantity);
        }

        $order->update(['total' => $total]);
        return $order;
    }

    /**
     * Remove the specified resource from storage.
     * Chamar quando cancelar compra.
     * Precisa devolver os produtos ao estoque antes de deletar.
     * Apenas admin e usuário que criou o pedido.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {

        $current_user = auth()->user();
        $order = Order::find($id);

        if ($current_user->role == 'USER') {
            if ($current_user->id == $order->user_id) {
                $items = $order->items;

                foreach ($items as $item) {
                    $item_order_controller = new ItemOrderController();
                    $item_order_controller->destroy($item->id);
                }

                return Order::destroy($id);
            } else {
                return response(['message' => 'Não autorizado.'], 403);
            }
        } else {
            return Order::destroy($id);
        }
    }
}
