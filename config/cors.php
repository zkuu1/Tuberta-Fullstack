<?php

return [
     'paths' => ['Api/*', 'oauth/*'],
    'allowed_methods' => ['*'], // Semua metode (GET, POST, dll.)
    'allowed_origins' => ['http://localhost:5173'], // Ganti dengan origin frontend Anda
    'allowed_origins_patterns' => [], // Pola regex untuk origin
    'allowed_headers' => ['*'], // Header yang diizinkan
    'exposed_headers' => [],
    'max_age' => 0,
    'supports_credentials' => true, // Jika menggunakan cookies atau otentikasi
];




