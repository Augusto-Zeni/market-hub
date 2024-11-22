<?php

declare(strict_types=1);

use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\DocumentationController;
use App\Http\Controllers\UserProfileController;
use Illuminate\Routing\Router;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::prefix('api')->group(function () {
    Route::get('/docs', function () {
        return view('swagger');
    });

    Route::get('/docs/json', [DocumentationController::class, 'json']);

    Route::post('register', [RegisterController::class, 'register']);
    Route::post('/login', [LoginController::class, 'login']);

    Route::group(['middleware' => 'auth:sanctum'], function () {
        Route::post('/logout', [LoginController::class, 'logout'])->middleware('auth:sanctum');
    });
    

    Route::post('/profile/{user_id}', [UserProfileController::class, 'create']);
    Route::put('/profile/{user_id}', [UserProfileController::class, 'update']);
});
