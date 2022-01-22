<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::factory()->create([
            'name' => 'Abiyoga Bayu Primadi',
            'email' => 'abiyoga1335@gmail.com',
            'password' => Hash::make('secret123'),
            'role_id' => 1,
        ]);
    }
}
