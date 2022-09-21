<?php

namespace App\Http\Controllers;

use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Inertia\Response
     */
    public function index()
    {

        return Inertia::render('Main', ['page' => 'main menu']);

     }



    function doLogout()
    {
        Auth::logout(); // logging out user
        return Inertia::location('/login');
    }




}
