import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function PostPage({ params }: PageProps) {
  const { slug } = await params;

  const filePath = path.join(process.cwd(), "posts", `${slug}.md`);
  const fileContents = await fs.readFile(filePath, "utf8");

  const { data, content } = matter(fileContents);

  const formattedDate = new Date(data.date + "T00:00:00").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div
      className="w-full min-h-screen flex items-center justify-center px-2 sm:px-4 py-8 sm:py-12"
      style={{
        background: "none",
      }}
    >
      <div
        className="w-full max-w-3xl mx-auto rounded-2xl border border-[rgba(180,160,255,0.45)] shadow-[0_8px_32px_rgba(140,120,200,0.18)] backdrop-blur-2xl bg-clip-padding"
        style={{
          background: "linear-gradient(135deg, rgba(200,180,255,0.65) 0%, rgba(221,214,243,0.45) 100%)",
          boxShadow: "0 8px 32px 0 rgba(140,120,200,0.18)",
          border: "1.5px solid rgba(180,160,255,0.45)",
        }}
      >
        <div className="p-4 sm:p-8">
          <h1 className="text-2xl sm:text-4xl font-bold mb-4 text-white drop-shadow">{data.title}</h1>
          <p className="text-purple-200 mb-8 text-sm sm:text-base">{formattedDate}</p>
          <article className="prose prose-invert max-w-none text-white/90 prose-headings:text-white prose-a:text-yellow-200 prose-a:underline hover:prose-a:text-yellow-300 prose-img:rounded-lg">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw]}
            >
              {content}
            </ReactMarkdown>
          </article>
        </div>
      </div>
    </div>
  );
}

