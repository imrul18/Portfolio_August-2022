<?php

use App\Http\Controllers\MailController;
use App\Http\Controllers\ProjectDataController;
use App\Http\Controllers\ResumeDataController;
use App\Http\Controllers\UserDataController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::get('headerData',[UserDataController::class, 'header']);
Route::get('aboutData',[UserDataController::class, 'about']);
Route::get('contactData',[UserDataController::class, 'contact']);
Route::get('footerData',[UserDataController::class, 'footer']);

Route::get('resumeData',[ResumeDataController::class, 'resume']);

Route::get('projectData',[ProjectDataController::class, 'project']);

Route::post('sendMail',[MailController::class, 'sendMail']);

