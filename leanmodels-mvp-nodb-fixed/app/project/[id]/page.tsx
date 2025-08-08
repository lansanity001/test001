import CanvasPanel from "./ui/CanvasPanel";
import ChatPanel from "./ui/ChatPanel";

export default async function ProjectPage({ params }: { params: { id: string } }) {
  return (
    <main className="h-screen grid grid-cols-1 lg:grid-cols-[1.4fr_1fr]">
      <section className="border-r overflow-y-auto bg-white">
        <CanvasPanel projectId={params.id} />
      </section>
      <aside className="overflow-y-auto bg-white">
        <ChatPanel projectId={params.id} />
      </aside>
    </main>
  );
}
