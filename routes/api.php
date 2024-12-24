<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Rute untuk mendapatkan data pengguna (hanya untuk pengguna yang diautentikasi)
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Rute untuk pendaftaran pengguna
Route::post('/signup', [\App\Http\Controllers\Api\AuthController::class, 'signup']);
