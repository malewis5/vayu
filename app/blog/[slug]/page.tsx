import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { blogPosts } from "../blogs";

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    params: { slug: post.id.toString() },
  }));
}

async function getBlogPost(slug: string) {
  console.log(slug);
  // In a real application, you would fetch data from an API or database here
  const post = blogPosts.find((post) => post.id === parseInt(slug, 10));
  if (!post) {
    notFound();
  }
  return post;
}

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getBlogPost(params.slug);

  return (
    <article className="container mx-auto py-8 px-4 max-w-3xl">
      <Button asChild className="mb-8">
        <Link href="/blog">← Back to Blog List</Link>
      </Button>

      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>

      <div className="flex items-center mb-8">
        <div>
          <p className="text-sm text-gray-500">{post.date}</p>
        </div>
      </div>

      <div
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: post.description }}
      />
    </article>
  );
}
