import { getCachedPosts } from "@/lib/fetch";
import { unstable_noStore } from "next/cache";

const Posts = async () => {
  unstable_noStore();

  const posts: { id: string, title: string }[] = await getCachedPosts();

  return (
    <div>
      {posts.map(post => post.title)}
    </div>
  );
};

export default Posts;