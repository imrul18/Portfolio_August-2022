<?php

namespace App\Http\Controllers;

use App\Models\PostTable;
use App\Models\SocialTable;
use App\Models\userDataTable;
use Illuminate\Http\Request;

class UserDataController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function header()
    {
        $res = userDataTable::first();
        $data = [
            'name' => $res->name,
            'github' => $res->github,
            'description' => $res->description
        ];
        return $data;
    }

    public function about()
    {
        $res = userDataTable::first();
        return $res;
    }

    public function contact()
    {
        $res = userDataTable::first();
        $post = PostTable::all();
        $data = [
            'name' => $res->name,
            'street' => $res->street,
            'city' => $res->city,
            'state' => $res->state,
            'zip' => $res->zip,
            'phone' => $res->phone,
            'post' => $post
        ];
        return $data;
    }

    public function footer()
    {
        $res = SocialTable::all();
        return $res;
    }
}
