<?php
namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller {
    public function index() {
        return response()->json(User::all());
    }

    public function store(Request $request) {
        $data = $request->only(['name','email','password']);
        $user = User::create($data);
        return response()->json($user, 201);
    }
}
