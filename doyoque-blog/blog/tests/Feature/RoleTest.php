<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
use App\Models\Role;

class RoleTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function role_can_be_create()
    {
        $this->artisan('passport:install');

        Role::factory()->create();

        $this->assertDatabaseCount('roles', 1);
    }
}
