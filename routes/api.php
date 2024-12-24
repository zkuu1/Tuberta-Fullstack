<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;

// Rute untuk mendapatkan data pengguna (hanya untuk pengguna yang diautentikasi)
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Rute untuk pendaftaran pengguna
Route::post('/signup', [ AuthController::class, 'signup']);
Route::post('/login', [ AuthController::class, 'login']);
Route::post('/logout', [ AuthController::class, 'logout']);
