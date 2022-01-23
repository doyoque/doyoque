<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Hash;
use Tests\TestCase;
use App\Models\{
    Role,
    User,
};

class AuthTest extends TestCase
{
    use RefreshDatabase;

    public function setUp() :void
    {
        parent::setUp();

        $this->artisan('passport:install');

        Role::factory()->create();
    }

    /** @test */
    public function registered_user_can_login()
    {
        User::factory()->create([
            'role_id' => 1,
            'email' => 'usertest@email.com',
            'password' => Hash::make('secret123'),
        ]);

        $this->assertDatabaseCount('users', 1)
             ->assertDatabaseHas('users', [
                 'role_id' => 1,
                 'email' => 'usertest@email.com',
             ]);

        $data = [
            'email' => 'usertest@email.com',
            'password' => 'secret123',
        ];

        $this->postJson('api/v1/login', $data)
             ->assertStatus(200)
             ->assertJsonStructure([
                 'id',
                 'data' => [
                     'token',
                     'name',
                 ],
                 'code',
             ]);
    }
}
