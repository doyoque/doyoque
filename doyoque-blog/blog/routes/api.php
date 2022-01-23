<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\{
    Auth\LoginController,
    UserController,
    ContentController,
};

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

Route::group(['prefix' => 'v1'], function () {

    Route::post('login', [LoginController::class, 'login']);

    Route::get('content', [ContentController::class, 'index']);
    Route::group(['middleware' => 'auth:api'], function () {
        Route::post('content', [ContentController::class, 'store']);
        Route::get('user', [UserController::class, 'index']);
    });
});

