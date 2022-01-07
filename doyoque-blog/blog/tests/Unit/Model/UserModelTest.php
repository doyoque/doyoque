<?php

namespace Tests\Unit\Model;

use PHPUnit\Framework\TestCase;
use App\Models\User;

class UserModelTest extends TestCase
{

    /**
     * A basic unit test example.
     *
     * @return void
     */
    public function test_example()
    {
        $this->assertTrue(true);
    }

    /**
     * Check User instances.
     *
     * @test
     * @return void
     */
    public function check_user_instances_of_class()
    {
        $user = new User;
        $this->assertInstanceOf(User::class, $user);
    }
}
