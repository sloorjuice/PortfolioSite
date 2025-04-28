import Link from "next/link";

interface BlogCardProps {
  title: string;
  description: string;
  date: string;
  slug: string;
}

export default function BlogCard({ title, description, date, slug }: BlogCardProps) {
  return (
    <Link href={`/blog/${slug}`}>
      <div className="cursor-pointer bg-gray-800 rounded-lg shadow-[0_4px_6px_rgba(255,255,255,0.2)] overflow-hidden mx-auto hover:scale-105 transition-transform p-6">
        <div className="border-4 border-black rounded-lg p-4">
          <h2 className="text-2xl font-bold mb-2 text-white hover:text-yellow-300">{title}</h2>
          <p className="text-gray-400 text-sm mb-4">{new Date(date).toLocaleDateString()}</p>
          <p className="text-gray-300">{description}</p>
        </div>
      </div>
    </Link>
  );
}
