<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\News as NewsResource;
use App\Models\News;

class NewsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return NewsResource::collection(News::latest()->get());
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
        $news = new News;
        $news -> title = $request->title;
        $news -> body = $request->body;
        
        if($request -> hasFile('image')){
            $file = $request->file('image');
            $filename = $file->getClientOriginalName();
            $finalName = date('His') . $filename;
            $request->file('image')->storeAs('news/', $finalName, 'public');
            $news -> image = $finalName;
        }
        $news->save();
        return response()->json([
            'data' => 'post Created'
        ]);
    }

    public function edit($id)
    {
        return new NewsResource(News::findOrFail($id));
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
        $request->validate([
            'title' => 'required',
            'body' => 'required',
        ]);

        $news = News::findOrFail($id);
        $news->title = $request->title;
        $news->body = $request->body;
        $news->save();

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
        $news = News::findOrFail($id);
        $news->delete();
        return response()->json([
            'data' => 'post deleted'
        ]);
    }
}
