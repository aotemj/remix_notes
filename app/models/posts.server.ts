import { prisma } from "~/db.server";

type Post = {
  slug: string,
  title: string,
}

export const getPosts = async (): Promise<Array<Post>> => {
  return prisma.post.findMany();
};
