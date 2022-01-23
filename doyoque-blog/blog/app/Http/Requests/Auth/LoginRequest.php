<?php

namespace App\Http\Requests\Auth;

use Illuminate\Foundation\Http\FormRequest;

class LoginRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array[]
     */
    public function rules()
    {
        return [
            'email' => ['required', 'max:255'],
            'password' => ['required', 'min:8', 'max:255'],
        ];
    }

    /**
     * Custom validation message.
     *
     * @return array[]
     */
    public function messages()
    {
        return [
            "email.required" => "C'mon put your email right there.",
            "email.max" => "Hey man your email is too long.",
            "password.required" => "Bruh at least remember to put your password to.",
            "password.min" => "Too sort, like a nail.",
            "password.max" => "Do you even remember that?",
        ];
    }
}
