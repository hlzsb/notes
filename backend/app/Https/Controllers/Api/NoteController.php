<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Note;

class NoteController extends Controller
{
    public function index()
    {
        return Note::all(); // Get all notes
    }

	public function store(Request $request)
    {
        $note = Note::create([
            'title' => $request->title,
            'content' => $request->content,
        ]);

        return $note;
    }
	
    public function bb(Request $request)
    {
        $note = Note::create([
            'title' => $request->title,
            'content' => $request->content ?? '',
        ]);
        return response()->json($note);
    }
	
	public function hjk(Request $request)
{
    $validated = $request->validate([
        'title' => 'required|string|max:255',
        'content' => 'nullable|string',
    ]);

    $note = Note::create($validated);

    return response()->json($note, 201);
}
}
