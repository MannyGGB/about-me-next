import React from "react";
import Link from "next/link";
import { getPosts } from "../../lib/posts";

export default function BlogsPage() {
  const posts = getPosts();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>This is my blogs page</h1>
      <p>My blog posts:</p>
      <ul>
        {posts.map((post) => {
          return (
            <li key={post.slug}>
              <Link href={`/blogs/${post.slug}`}>{post.title}</Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
