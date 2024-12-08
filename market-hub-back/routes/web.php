<?php

declare(strict_types=1);

use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\DocumentationController;
use App\Http\Controllers\FeedController;
use App\Http\Controllers\ProfileSkillsController;
use App\Http\Controllers\ReviewsController;
use App\Http\Controllers\ServicesController;
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


        Route::post('/profile', [UserProfileController::class, 'create']);
        Route::patch('/profile/{profile_id}', [UserProfileController::class, 'update']);
        Route::get('/profile/{profile_id}', [UserProfileController::class, 'show']);
        
        Route::post('/profile/{profile_id}/skills', [ProfileSkillsController::class, 'create']);
        Route::get('/profile/{profile_id}/skills', [ProfileSkillsController::class, 'showAll']);
        Route::get('/profile/{profile_id}/skills/{skill_id}', [ProfileSkillsController::class, 'show']);
        Route::patch('/profile/{profile_id}/skills/{skill_id}', [ProfileSkillsController::class, 'update']);
        Route::delete('/profile/{profile_id}/skills/{skill_id}', [ProfileSkillsController::class, 'delete']);
    
        Route::post('/services', [ServicesController::class, 'create']);
        Route::get('/services/{service_id}', [ServicesController::class, 'show']);
        Route::get('/user/{user_id}/services', [ServicesController::class, 'index']);
        Route::patch('/services/{service_id}', [ServicesController::class, 'update']);
        Route::delete('/services/{service_id}', [ServicesController::class, 'delete']);
    
        Route::get('/feed', [FeedController::class, 'index']);

        Route::post('/reviews', [ReviewsController::class, 'create']);
        Route::get('/reviews/profile-stars/{profile_id}', [ReviewsController::class, 'profileStars']);
    });
});
