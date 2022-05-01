import { prisma } from "~/db.server";

export type { Post } from "@prisma/client";

type Post = {
  slug: string,
  title: string,
}

export const getPosts = async (): Promise<Array<Post>> => {
  return prisma.post.findMany();
};

export async function getPost(slug: string) {
  return prisma.post.findUnique({ where: { slug } });
}
