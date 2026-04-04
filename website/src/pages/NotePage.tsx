import Sidebar from "@/components/Sidebar";
import NoteViewer from "@/components/NoteViewer";

export default function NotePage() {
  return (
    <div className="flex h-[calc(100vh-3.5rem)]">
      <Sidebar />
      <NoteViewer />
    </div>
  );
}
