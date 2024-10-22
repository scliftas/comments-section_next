import Comment from "@/components/organisms/Comment";
import comments from "@/data/comments.json";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] justify-items-center min-h-screen p-8 pb-20 lg:px-64 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        {comments.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </main>
    </div>
  );
}
