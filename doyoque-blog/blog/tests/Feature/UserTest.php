<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Laravel\Passport\Passport;
use Tests\TestCase;
use App\Models\{
    Role,
    User
};

class UserTest extends TestCase
{
    use RefreshDatabase;

    public function setUp() :void
    {
        parent::setUp();

        Role::factory()->create();
    }

    /** @test */
    public function user_can_be_create()
    {
        User::factory()->create(['role_id' => 1]);

        $this->assertDatabaseCount('users', 1);
    }

    /** @test */
    public function user_information_can_be_retrive()
    {
        Passport::actingAs(User::factory()->create(['role_id' => 1]));

        $this->getJson('api/v1/user')->assertStatus(200);
    }
}
