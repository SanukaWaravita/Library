import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import SphereCluster from "@/components/SphereCluster";
import { notes, categoryMeta, type Category } from "@/data/notes";

export default function HomePage() {
  const navigate = useNavigate();

  const categories: { key: Category; count: number }[] = (
    ["javascript", "java", "java-oop"] as Category[]
  ).map((key) => ({
    key,
    count: notes.filter((n) => n.category === key).length,
  }));

  return (
    <div className="flex flex-col h-[calc(100vh-3.5rem)]">
      {/* Hero + 3D Cluster */}
      <div className="relative flex-1 min-h-0">
        {/* 3D Background */}
        <div className="absolute inset-0">
          <SphereCluster onNoteClick={(id) => navigate(`/note/${id}`)} />
        </div>

        {/* Overlay text */}
        <div className="absolute inset-0 pointer-events-none flex flex-col items-center justify-end pb-12">
          <div className="pointer-events-auto text-center">
            <h1 className="text-5xl font-bold tracking-tight text-foreground mb-3 drop-shadow-lg">
              Knowledge Library
            </h1>
            <p className="text-lg text-muted-foreground mb-6 max-w-md mx-auto">
              {notes.length} interconnected notes across programming languages.
              <br />
              Click a sphere to explore, or browse below.
            </p>

            <div className="flex items-center justify-center gap-4 mb-6">
              {categories.map(({ key, count }) => {
                const meta = categoryMeta[key];
                return (
                  <div key={key} className="flex items-center gap-1.5">
                    <div
                      className="h-3 w-3 rounded-full"
                      style={{ backgroundColor: meta.color }}
                    />
                    <span className="text-sm text-muted-foreground">{meta.label}</span>
                    <Badge variant="secondary" className="text-[10px] h-4 px-1">
                      {count}
                    </Badge>
                  </div>
                );
              })}
            </div>

            <Button size="lg" onClick={() => navigate("/browse")}>
              Browse All Notes
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
