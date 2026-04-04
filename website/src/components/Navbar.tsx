import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (search.trim()) {
      navigate(`/browse?q=${encodeURIComponent(search.trim())}`);
    }
  };

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/browse", label: "Browse" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-7xl items-center gap-6 px-6">
        <Link to="/" className="flex items-center gap-2.5 shrink-0">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-sm">
            L
          </div>
          <span className="font-semibold text-foreground tracking-tight">Library</span>
        </Link>

        <div className="flex items-center gap-1">
          {navLinks.map((link) => (
            <Link key={link.to} to={link.to}>
              <Button
                variant="ghost"
                size="sm"
                className={
                  location.pathname === link.to
                    ? "text-foreground"
                    : "text-muted-foreground"
                }
              >
                {link.label}
              </Button>
            </Link>
          ))}
        </div>

        <form onSubmit={handleSearch} className="ml-auto flex items-center gap-2">
          <Input
            type="search"
            placeholder="Search notes..."
            className="h-8 w-56 text-sm bg-secondary/50"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
      </div>
    </nav>
  );
}
