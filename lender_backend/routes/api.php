<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\DataController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route :: post('login', [UserController::class, 'login']);
Route :: get('profile/{id}', [DataController::class, 'profile']);
Route :: post('profile/{id}', [DataController::class, 'profileUpdate']);
Route :: get('client/{id}', [DataController::class, 'client']);
Route :: post('client/{id}', [DataController::class, 'clientUpdate']);
Route :: post('clientbasicinfo/{id}', [DataController::class, 'clientBasicInfoUpdate']);
Route :: post('checkmatch', [DataController::class, 'clientMatchUpdate']);
Route :: get('password/{id}', [DataController::class, 'password']);
Route :: post('password/{id}', [DataController::class, 'passwordReset']);
Route :: get('list', [DataController::class, 'list']);
