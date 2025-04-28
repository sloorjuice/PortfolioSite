import BlogCard from "@/Components/blogCard";
import { getPosts } from "@/lib/getPosts";

// Define the Post type
type Post = {
  title: string;
  description: string;
  date: string;
  slug: string;
};

export default async function BlogPage() {
  const posts = await getPosts(); // Fetch posts on the server side

  // Sort posts by date (newest first)
  const sortedPosts = posts.sort(
    (a: Post, b: Post) => new Date(b.date + "T00:00:00").getTime() - new Date(a.date + "T00:00:00").getTime()
  );

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-4xl text-center font-bold mb-8 border-b-2 border-gray-500 pb-2">Blog Posts</h1>

      {/* Blog Posts */}
      <div className="grid gap-8">
        {sortedPosts.map((post: Post) => {
          // Format the date nicely
          const formattedDate = new Date(post.date + "T00:00:00").toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          });

          return (
            <BlogCard
              key={post.slug}
              title={post.title}
              description={post.description}
              date={formattedDate}
              slug={post.slug}
            />
          );
        })}
      </div>
    </div>
  );
}
