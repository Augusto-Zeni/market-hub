<?php

declare(strict_types=1);

namespace App\Services\Auth;

use App\Models\User;

class RegisterService
{
    public function __construct()
    {
    }

    public function register(array $data): User
    {
        $user = User::create($data);

        return $user;
    }
}
