<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\SignupRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function signup(SignupRequest $request)
    {
        // Validasi data yang diterima dari request
        $data = $request->validated();

        // Buat user baru
        $user = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => bcrypt($data['password']), // Enkripsi password
        ]);

        // Buat token untuk user
        $token = $user->createToken('main')->plainTextToken;

        // Kembalikan respons dalam format JSON
        return response()->json([
            'user' => $user,
            'token' => $token,
        ], 201); // Status code 201 untuk resource yang dibuat
    }

    public function login(LoginRequest $request)
    {
        // Validasi kredensial yang diterima
        $credentials = $request->validated();

        // Cek apakah kredensial valid
        if (!Auth::attempt($credentials)) {
            return response()->json([
                'message' => 'Provided email or password is incorrect',
            ], 422); // Status code 422 jika kredensial salah
        }

        // Ambil user yang sudah terautentikasi
        $user = Auth::user();
        $token = $user->createToken('main')->plainTextToken;

        // Kembalikan respons dalam format JSON
        return response()->json([
            'user' => $user,
            'token' => $token,
        ]);
    }

    public function logout(Request $request)
    {
        // Ambil user yang sedang login
        $user = $request->user();

        // Hapus token yang sedang digunakan
        $user->currentAccessToken()->delete();

        // Kembalikan respons kosong dengan status 204 (No Content)
        return response()->json([], 204);
    }
}
