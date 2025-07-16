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
      <div
        className="cursor-pointer rounded-xl overflow-hidden mx-auto hover:scale-105 transition-transform p-6 border border-[rgba(180,160,255,0.45)] shadow-[0_4px_32px_rgba(140,120,200,0.18)]"
        style={{
          background: "linear-gradient(135deg, rgba(200,180,255,0.65) 0%, rgba(221,214,243,0.45) 100%)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          boxShadow: "0 8px 32px 0 rgba(140,120,200,0.18)",
          border: "1.5px solid rgba(180,160,255,0.45)",
        }}
      >
        <div className="border-4 border-black/30 rounded-lg p-4 bg-black/10">
          <h2 className="text-2xl font-bold mb-2 text-white drop-shadow hover:text-yellow-300 transition">{title}</h2>
          <p className="text-purple-200 text-sm mb-4">{new Date(date).toLocaleDateString()}</p>
          <p className="text-white/90">{description}</p>
        </div>
      </div>
    </Link>
  );
}