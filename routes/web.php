<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('auth.login');
});

Auth::routes();
Route::get('/logout', [HomeController::class, 'doLogout'])->name('logout');
Route::group(['middleware' => 'auth'], function () {
    Route::get('/home', [HomeController::class, 'index'])->name('home');
    Route::get('/Achieved-Sample', [\App\Http\Controllers\ArchievedController::class, 'index'])->name('achieved sample');
    Route::get('/Firm-Profile', [\App\Http\Controllers\ProfileController::class, 'index'])->name('profile');
    Route::get('/admin', [App\Http\Controllers\AdminController::class, 'index'])->name('admin');
    Route::post('/clearData', [App\Http\Controllers\AdminController::class, 'clearData'])->name('DBStatus');
    Route::post('/file-import', [App\Http\Controllers\AdminController::class, 'fileImport'])->name('file-import');

});
