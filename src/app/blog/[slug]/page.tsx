import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

export async function generateStaticParams() {
  const postsDir = path.join(process.cwd(), "posts");
  const filenames = await fs.readdir(postsDir);

  return filenames.map((filename) => ({
    slug: filename.replace(/\.md$/, ""),
  }));
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const filePath = path.join(process.cwd(), "posts", `${params.slug}.md`);
  const fileContents = await fs.readFile(filePath, "utf8");

  const { data, content } = matter(fileContents);

  const formattedDate = new Date(data.date + "T00:00:00").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-4">{data.title}</h1>
      <p className="text-gray-400 mb-8">{formattedDate}</p>
      <article className="prose prose-invert max-w-none">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
        >
          {content}
        </ReactMarkdown>
      </article>
    </div>
  );
}
