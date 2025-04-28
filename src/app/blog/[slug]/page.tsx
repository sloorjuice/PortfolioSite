import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { notFound } from 'next/navigation'; // Needed for handling missing posts

interface PostFrontMatter {
  title: string;
  date: string;
}

export async function generateStaticParams() {
  const postsDir = path.join(process.cwd(), 'posts');
  const filenames = await fs.readdir(postsDir);

  return filenames.map((filename) => ({
    slug: filename.replace(/\.md$/, ''),
  }));
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const filePath = path.join(process.cwd(), 'posts', `${slug}.md`);

  let fileContents: string;
  try {
    fileContents = await fs.readFile(filePath, 'utf8');
  } catch (error) {
    notFound(); // If file not found, return 404 page
  }

  const parsedMatter = matter(fileContents);
  const data = parsedMatter.data as PostFrontMatter;
  const content = parsedMatter.content;

  return (
    <div className="max-w-3xl mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold mb-4">{data.title}</h1>
      <p className="text-gray-400 mb-8">
        {new Date(data.date + 'T00:00:00').toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}
      </p>

      <article className="prose prose-invert max-w-none">
        <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
          {content}
        </ReactMarkdown>
      </article>
    </div>
  );
}
