<?php

declare(strict_types=1);

use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\DocumentationController;
use App\Http\Controllers\ProfileSkillsController;
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
    

    Route::post('/profile', [UserProfileController::class, 'create']);
    Route::patch('/profile/{profile_id}', [UserProfileController::class, 'update']);
    Route::get('/profile/{profile_id}', [UserProfileController::class, 'show']);
    
    Route::post('/profile/{profile_id}/skills', [ProfileSkillsController::class, 'create']);
    Route::get('/profile/{profile_id}/skills/{skill_id}', [ProfileSkillsController::class, 'show']);
    Route::patch('/profile/{profile_id}/skills/{skill_id}', [ProfileSkillsController::class, 'update']);
});
