import { useState, useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  notes,
  searchNotes,
  categoryMeta,
  tagLabels,
  type Category,
  type Tag,
} from "@/data/notes";

export default function BrowsePage() {
  const [searchParams] = useSearchParams();
  const initialQuery = searchParams.get("q") || "";
  const [query, setQuery] = useState(initialQuery);
  const [activeCategory, setActiveCategory] = useState<Category | "all">("all");
  const [activeTag, setActiveTag] = useState<Tag | null>(null);

  const filtered = useMemo(() => {
    let result = query ? searchNotes(query) : [...notes];
    if (activeCategory !== "all") {
      result = result.filter((n) => n.category === activeCategory);
    }
    if (activeTag) {
      result = result.filter((n) => n.tags.includes(activeTag));
    }
    return result;
  }, [query, activeCategory, activeTag]);

  const categories: (Category | "all")[] = ["all", "javascript", "java", "java-oop"];

  const allTags = useMemo(() => {
    const tagSet = new Set<Tag>();
    notes.forEach((n) => n.tags.forEach((t) => tagSet.add(t)));
    return Array.from(tagSet).sort();
  }, []);

  return (
    <div className="flex flex-col h-[calc(100vh-3.5rem)]">
      {/* Filters header */}
      <div className="border-b border-border/50 bg-background/50 backdrop-blur-sm p-6 space-y-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-tight">Browse Notes</h1>
          <span className="text-sm text-muted-foreground">
            {filtered.length} of {notes.length} notes
          </span>
        </div>

        <Input
          type="search"
          placeholder="Search by title, description, or tag..."
          className="max-w-lg"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        {/* Category filter */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            const meta = cat === "all" ? null : categoryMeta[cat];
            return (
              <Button
                key={cat}
                variant={isActive ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(cat)}
                className="h-7 text-xs"
              >
                {meta && (
                  <div
                    className="h-2 w-2 rounded-full mr-1.5"
                    style={{ backgroundColor: meta.color }}
                  />
                )}
                {cat === "all" ? "All" : meta!.label}
              </Button>
            );
          })}
        </div>

        {/* Tag filter */}
        <div className="flex flex-wrap gap-1.5">
          {allTags.map((tag) => (
            <Badge
              key={tag}
              variant={activeTag === tag ? "default" : "outline"}
              className="cursor-pointer text-[11px] hover:bg-accent"
              onClick={() => setActiveTag(activeTag === tag ? null : tag)}
            >
              {tagLabels[tag]}
            </Badge>
          ))}
        </div>
      </div>

      {/* Notes grid */}
      <ScrollArea className="flex-1">
        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((note) => {
            const meta = categoryMeta[note.category];
            return (
              <Link
                key={note.id}
                to={`/note/${note.id}`}
                className="group block rounded-xl border border-border/50 p-5 transition-all hover:border-primary/30 hover:bg-card hover:shadow-lg"
              >
                <div className="flex items-center gap-2 mb-2.5">
                  <div
                    className="h-2.5 w-2.5 rounded-full"
                    style={{ backgroundColor: meta.color }}
                  />
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                    {meta.label}
                  </span>
                </div>
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-1.5">
                  {note.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                  {note.description}
                </p>
                <div className="flex flex-wrap gap-1">
                  {note.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-[10px]">
                      {tagLabels[tag]}
                    </Badge>
                  ))}
                  {note.connections.length > 0 && (
                    <Badge variant="outline" className="text-[10px]">
                      {note.connections.length} links
                    </Badge>
                  )}
                </div>
              </Link>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <div className="flex items-center justify-center py-20 text-muted-foreground">
            No notes match your search.
          </div>
        )}
      </ScrollArea>
    </div>
  );
}
