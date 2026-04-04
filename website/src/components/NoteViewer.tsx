import { useParams, Link, useNavigate } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import { notesMap, getConnections, categoryMeta, tagLabels } from "@/data/notes";
import { useNoteContent } from "@/hooks/useNoteContent";

export default function NoteViewer() {
  const { noteId } = useParams();
  const navigate = useNavigate();
  const note = noteId ? notesMap.get(noteId) : undefined;
  const { content, loading, error } = useNoteContent(noteId);
  const connections = noteId ? getConnections(noteId) : [];

  if (!note) {
    return (
      <div className="flex-1 flex items-center justify-center text-muted-foreground">
        <div className="text-center">
          <p className="text-lg">Note not found</p>
          <Button variant="link" onClick={() => navigate("/browse")}>
            Browse all notes
          </Button>
        </div>
      </div>
    );
  }

  const meta = categoryMeta[note.category];

  return (
    <ScrollArea className="flex-1">
      <article className="max-w-3xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <div
              className="h-2.5 w-2.5 rounded-full"
              style={{ backgroundColor: meta.color }}
            />
            <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              {meta.label}
            </span>
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground mb-3">
            {note.title}
          </h1>
          <p className="text-muted-foreground">{note.description}</p>
          <div className="flex flex-wrap gap-1.5 mt-3">
            {note.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tagLabels[tag]}
              </Badge>
            ))}
          </div>
        </div>

        <Separator className="mb-6" />

        {/* Content */}
        {loading ? (
          <div className="space-y-3 animate-pulse">
            <div className="h-4 bg-muted rounded w-3/4" />
            <div className="h-4 bg-muted rounded w-1/2" />
            <div className="h-4 bg-muted rounded w-5/6" />
            <div className="h-20 bg-muted rounded" />
          </div>
        ) : error ? (
          <div className="text-destructive bg-destructive/10 rounded-lg p-4">
            {error}
          </div>
        ) : (
          <div className="note-content">
            <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeHighlight]}>
              {content}
            </ReactMarkdown>
          </div>
        )}

        {/* Connected Notes */}
        {connections.length > 0 && (
          <>
            <Separator className="my-8" />
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                Related Notes
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {connections.map((conn) => {
                  const connMeta = categoryMeta[conn.category];
                  return (
                    <Link
                      key={conn.id}
                      to={`/note/${conn.id}`}
                      className="group block rounded-lg border border-border/50 p-4 transition-all hover:border-primary/30 hover:bg-accent/30"
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <div
                          className="h-2 w-2 rounded-full"
                          style={{ backgroundColor: connMeta.color }}
                        />
                        <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                          {connMeta.label}
                        </span>
                      </div>
                      <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                        {conn.title}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                        {conn.description}
                      </p>
                    </Link>
                  );
                })}
              </div>
            </div>
          </>
        )}
      </article>
    </ScrollArea>
  );
}
