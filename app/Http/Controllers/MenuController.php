<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class MenuController extends Controller
{
    public function index(Request $request)
    {
        return Inertia::render('MenuIndex');
    }

    public function create(Request $request)
    {
        return Inertia::render('MenuForm', [
            'title' => 'Adicionar menu'
        ]);
    }
}
