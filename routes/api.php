<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ItemOrderController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\ProductController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
// Método simples que cria todas as rotas básicas para um CRUD. Como vamos proteger algumas e outras não, vamos declarar cada uma indiviudalmente.
// Route::resource('products', ProductController::class);

// Public routes
Route::get('/products', [ProductController::class, 'index']);
Route::get('/products/{id}', [ProductController::class, 'show']);
Route::get('/products/search/{name}', [ProductController::class, 'search']);
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

// Protected routes
Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::post('/products', [ProductController::class, 'store']);
    Route::put('/products/{id}', [ProductController::class, 'update']);
    Route::delete('/products/{id}', [ProductController::class, 'destroy']);
    
    Route::get('/orders', [OrderController::class, 'index']);
    Route::get('/orders/{id}', [OrderController::class, 'show']);
    Route::post('/orders', [OrderController::class, 'store']);
    Route::put('/orders/{id}', [OrderController::class, 'update']);
    Route::delete('/orders/{id}', [OrderController::class, 'destroy']);
    
    Route::get('/items', [ItemOrderController::class, 'index']);
    Route::get('/items/{id}', [ItemOrderController::class, 'show']);
    Route::post('/items/{order_id}', [ItemOrderController::class, 'store']);
    Route::put('/items/{id}', [ItemOrderController::class, 'update']);
    Route::delete('/items/{id}', [ItemOrderController::class, 'destroy']);

    Route::post('/logout', [AuthController::class, 'logout']);
});
