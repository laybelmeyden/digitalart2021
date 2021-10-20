<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Resources\Event as EventResource;
use App\Models\Event;

class EventController extends Controller
{
     /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return EventResource::collection(Event::latest()->get());
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required',
            'body' => 'required',
        ]);
        $event = new Event;
        $event -> title = $request->title;
        $event -> body = $request->body;
        $event -> date = $request->date;
        $event -> time = $request->time;
        $event -> color = $request->color;
        $event -> city = $request->city;
        $event -> href_event = $request->href_event;
        
        if($request -> hasFile('programm')){
            $file = $request->file('programm');
            $filename = $file->getClientOriginalName();
            $finalName = date('His') . $filename;
            $request->file('programm')->storeAs('event/', $finalName, 'public');
            $event -> programm = $finalName;
        }
        $event->save();
        return response()->json([
            'data' => 'post Created'
        ]);
    }

    public function edit($id)
    {
        return new EventResource(Event::findOrFail($id));
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
        // $request->validate([
        //     'title' => 'required',
        //     'body' => 'required',
        // ]);

        $event = Event::findOrFail($id);
        $event -> title = $request->title;
        $event -> body = $request->body;
        $event -> date = $request->date;
        $event -> time = $request->time;
        $event -> city = $request->city;
        $event -> color = $request->color;
        $event -> href_event = $request->href_event;
        if($request -> hasFile('programm')){
            $file = $request->file('programm');
            $filename = $file->getClientOriginalName();
            $finalName = date('His') . $filename;
            $request->file('programm')->storeAs('event/', $finalName, 'public');
            $event -> programm = $finalName;
        }
        $event->save();

        return response()->json([
            'data' => 'post updated'
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $event = Event::findOrFail($id);
        $event->delete();
        return response()->json([
            'data' => 'post deleted'
        ]);
    }
}
