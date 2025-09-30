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
	
	public function destroy($id)
{
    $note = Note::findOrFail($id);
    $note->delete();

    return response()->json(['message' => 'Note deleted']);
}


    public function bb(Request $request)
    {
        $note = Note::create([
            'title' => $request->title,
            'content' => $request->content ?? '',
        ]);
        return response()->json($note);
    }
	
	public function store(Request $request)
{
    $validated = $request->validate([
        'title' => 'required|string|max:255',
        'content' => 'nullable|string',
    ]);

    $note = Note::create($validated);

    return response()->json($note, 201);
}
}
