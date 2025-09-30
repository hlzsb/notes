import { useState } from "react";
import useSWR from "swr";
import '../index.css'; // Tailwind CSS import

type Note = {
  id: number;
  title: string;
  content: string | null;
};

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Notes() {
  const API_URL = import.meta.env.VITE_API_URL;
  
  const bgColors = [
  "bg-red-100",
  "bg-blue-100",
  "bg-green-100",
  "bg-yellow-100",
  "bg-purple-100",
  "bg-pink-100",
  "bg-orange-100",
  "bg-lime-100",
];
  
  const { data: notes, error, isLoading, mutate } = useSWR<Note[]>(
    `${API_URL}/notes`,
    fetcher
  );

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const addNote = async () => {
    if (!title.trim()) {
      alert("Title is required!");
      return;
    }

    const res = await fetch(`${API_URL}/notes`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, content }),
    });

    if (!res.ok) {
      console.error("Failed to add note", await res.text());
      alert("Error adding note");
      return;
    }

    setTitle("");
    setContent("");
    mutate(); // Refresh notes
  };

  const deleteNote = async (id: number) => {
    const confirmDelete = confirm("Are you sure you want to delete this note?");
    if (!confirmDelete) return;

    const res = await fetch(`${API_URL}/notes/${id}`, {
      method: "DELETE",
    });

    if (!res.ok) {
      console.error("Failed to delete note", await res.text());
      alert("Error deleting note");
      return;
    }

    mutate(); // Refresh notes
  };

  if (isLoading) {
    return <p className="text-center text-gray-500 mt-10">Loading notes...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500 mt-10">Failed to load notes.</p>;
  }

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4">My Notes</h2>

      {/* Form */}
      <div className="bg-white p-4 rounded shadow space-y-3 mb-6">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border p-2 rounded focus:outline-none focus:ring focus:border-blue-300"
        />

        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full border p-2 rounded focus:outline-none focus:ring focus:border-blue-300"
          rows={4}
        />

        <button
          onClick={addNote}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Add Note
        </button>
      </div>

      {/* Notes List */}
      <div className="space-y-3">
        {notes?.length === 0 ? (
          <p className="text-gray-500 text-center">No notes yet.</p>
        ) : (
          notes?.map((note, index) => (
            <div key={note.id} className={`p-3 rounded shadow relative ${bgColors[index % bgColors.length]}`}>
              <h3 className="font-semibold text-lg">{note.title}</h3>
              {note.content && <p className="text-gray-700 mt-1">{note.content}</p>}

              <button
                onClick={() => deleteNote(note.id)}
                className="absolute top-2 right-2 text-sm text-red-500 hover:text-red-700"
                title="Delete Note"
              >
                🗑️
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
