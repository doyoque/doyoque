<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\{
    Http\Response,
    Support\Facades\Auth,
    Support\Str,
};
use App\Http\Requests\Auth\LoginRequest;

class LoginController extends Controller
{
    /**
     * @var integer $status
     */
    public $status = Response::HTTP_OK;

    /**
     * Handle login.
     *
     * @param App\Http\Requests\Auth\LoginRequest $request
     * @return json
     */
    public function login(LoginRequest $request)
    {
        $postData = $request->validated();

        if (Auth::attempt(['email' => $postData['email'], 'password' => $postData['password']])) {
            $user = Auth::user();

            return response([
                'id' => Str::uuid(),
                'data' => [
                    'token' => $user->createToken('doyoque')->accessToken,
                    'name' => $user->name,
                ],
                'code' => $this->status,
            ], $this->status);
        }

        return response([
            'id' => Str::uuid(),
            'error' => 'Unauthorized.',
            'code' => Response::HTTP_UNAUTHORIZED,
        ], Response::HTTP_UNAUTHORIZED);
    }
}
