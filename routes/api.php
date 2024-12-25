<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\UserController; // Pastikan UserController ada jika diperlukan
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Route untuk mendapatkan data user yang terautentikasi
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Route untuk login dan signup tanpa autentikasi
Route::post('/signup', [AuthController::class, 'signup']);
Route::post('/login', [AuthController::class, 'login']);

// Route yang memerlukan autentikasi dengan middleware 'auth:sanctum'
Route::middleware('auth:sanctum')->group(function () {
    // Route logout
    Route::post('/logout', [AuthController::class, 'logout']);
    
    // Jika Anda membutuhkan UserController untuk resource, uncomment dan sesuaikan
    // Route::apiResource('/users', UserController::class);
});
