import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getPost } from "~/models/posts.server";
import invariant from "tiny-invariant";
import type { Post } from "~/models/posts.server";

type LoaderData = {
  post: Post
}

export const loader: LoaderFunction = async ({ params }) => {
  invariant(params.slug, "params.slug is required");
  const post = await getPost(params.slug);
  invariant(post, `Post not found: ${params.slug}`);
  return json<LoaderData>({ post });
};

export default function PostSlug() {
  const { post } = useLoaderData() as LoaderData;
  return <main className="mx-auto max-w-4xl">
    <h1 className="my-6 border-b-2 text-center text-3xl">
      Some Post: {post.title}
    </h1>
  </main>;
}