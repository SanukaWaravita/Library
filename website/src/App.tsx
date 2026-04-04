import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "@/components/Navbar";
import HomePage from "@/pages/HomePage";
import BrowsePage from "@/pages/BrowsePage";
import NotePage from "@/pages/NotePage";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-background text-foreground dark">
        <Navbar />
        <main className="pt-14">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/browse" element={<BrowsePage />} />
            <Route path="/note/:noteId" element={<NotePage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
