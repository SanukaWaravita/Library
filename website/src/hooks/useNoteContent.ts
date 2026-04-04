import { useState, useEffect } from "react";
import { notesMap } from "@/data/notes";

export function useNoteContent(noteId: string | undefined) {
  const [content, setContent] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!noteId) {
      setLoading(false);
      return;
    }

    const note = notesMap.get(noteId);
    if (!note) {
      setError("Note not found");
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);

    fetch(`/notes/${note.filePath}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load note");
        return res.text();
      })
      .then((text) => {
        // Strip frontmatter if present
        const stripped = text.replace(/^---[\s\S]*?---\n*/, "");
        setContent(stripped);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [noteId]);

  return { content, loading, error };
}
