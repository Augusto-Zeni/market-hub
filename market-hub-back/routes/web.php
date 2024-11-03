<?php

declare(strict_types=1);

use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\DocumentationController;
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
});
