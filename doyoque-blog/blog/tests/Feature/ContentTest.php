<?php

namespace Tests\Feature;

use Laravel\Passport\Passport;
use Illuminate\{
    Foundation\Testing\WithFaker,
    Foundation\Testing\RefreshDatabase,
    Support\Facades\Hash,
};
use Tests\TestCase;
use App\Models\{
    Content,
    User,
    Role,
};

class ContentTest extends TestCase
{
    use RefreshDatabase, WithFaker;

    /**
     * @var object $user
     */
    public $user;

    public function setUp() :void
    {
        parent::setUp();

        $this->artisan('passport:install');

        Role::factory()->create(['name' => 'admin']);
        $this->user = User::factory()->create([
            'email' => 'usertest@email.com',
            'password' => Hash::make('secret123'),
        ]);
    }

    /** @test */
    public function content_can_be_create_and_store_to_db()
    {
        $this->assertDatabaseCount('roles', 1);
        $this->assertDatabaseCount('users', 1);

        Content::factory()->create();

        $this->assertDatabaseCount('contents', 1);
    }

    /** @test */
    public function content_can_be_create_via_post_api()
    {
        Passport::actingAs($this->user);

        $data = [
            'title' => $this->faker->title(),
            'content' => $this->faker->text(),
            'user_id' => 1,
        ];

        $this->postJson('api/v1/content', $data)
             ->assertStatus(201);
    }
}
