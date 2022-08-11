<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Resources\UserResource;
use Illuminate\Support\Facades\Auth;
use App\Http\Resources\ProfileResource;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $user = User::where('email', $request->email)->first();

        if(!$user)
            return response()->json(['message' => 'Admin user not matched'], 401);

        if(!Hash::check($request->password, $user->password))
        {
            return response()->json(['message' => 'Admin user password not matched'], 401);
        }

        $user->_token = $user->createToken('Token_Name')->plainTextToken;

        return response()->json($user, 200);
    }


}
