<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'name' => 'Lauro Appelt',
            'email' => 'test@example.com',
            'cellphone' => '51123451234',
            'about' => 'teste teste teste teste',
            'city' => 'Lajeado',
            'state' => 'RS',
            'user_type' => 'CONSUMER',
            'password' => Hash::make('1234')
        ]);

        User::factory()->create([
            'name' => 'João da Silva',
            'email' => 'test1@example.com',
            'cellphone' => '51123451234',
            'about' => 'teste teste teste teste',
            'city' => 'Curitiba',
            'state' => 'PR',
            'user_type' => 'SELLER',
            'password' => Hash::make('1234')
        ]);
    }
}
