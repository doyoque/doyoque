<?php

namespace App\Http\Controllers;

use Illuminate\Support\{
    Str,
    Facades\Auth,
};

class UserController extends Controller
{
    /**
     * @var integer $status
     */
    public $status = 200;

    /**
     * Get user info.
     *
     * @return json
     */
    public function index()
    {
        return response([
            'id' => Str::uuid(),
            'success' => Auth::user(),
        ], $this->status);
    }
}
