import { Link, useParams } from "react-router-dom";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import {
  notes,
  categoryMeta,
  type Category,
  getNotesByCategory,
} from "@/data/notes";

export default function Sidebar() {
  const { noteId } = useParams();

  const categories: Category[] = ["javascript", "java", "java-oop"];

  return (
    <aside className="hidden lg:flex w-64 shrink-0 flex-col border-r border-border/50 bg-sidebar">
      <div className="p-4 pt-5">
        <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">
          Notes
        </h2>
        <p className="text-xs text-muted-foreground">
          {notes.length} notes across {categories.length} categories
        </p>
      </div>
      <Separator />
      <ScrollArea className="flex-1">
        <div className="p-3 space-y-5">
          {categories.map((cat) => {
            const meta = categoryMeta[cat];
            const catNotes = getNotesByCategory(cat);
            return (
              <div key={cat}>
                <div className="flex items-center gap-2 mb-2 px-1">
                  <div
                    className="h-2.5 w-2.5 rounded-full"
                    style={{ backgroundColor: meta.color }}
                  />
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    {meta.label}
                  </span>
                  <Badge variant="secondary" className="ml-auto text-[10px] h-4 px-1.5">
                    {catNotes.length}
                  </Badge>
                </div>
                <div className="space-y-0.5">
                  {catNotes.map((note) => (
                    <Link
                      key={note.id}
                      to={`/note/${note.id}`}
                      className={`block rounded-md px-2.5 py-1.5 text-sm transition-colors ${
                        noteId === note.id
                          ? "bg-accent text-accent-foreground font-medium"
                          : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                      }`}
                    >
                      {note.title}
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </ScrollArea>
    </aside>
  );
}
