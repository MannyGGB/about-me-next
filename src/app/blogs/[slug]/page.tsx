import React from "react";
import { notFound } from "next/navigation";
import { getPosts } from "../../../lib/posts";
import { getPostsBySlug } from "../../../lib/posts";

type blogPostParams = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  const posts = getPosts();
  return posts.map((post) => {
    return { slug: post.slug };
  });
}

export default function SlugPage({ params }: blogPostParams) {
  const post = getPostsBySlug(params.slug);
  if (!post) {
    notFound();
  }
  return (
    <main>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </main>
  );
}
