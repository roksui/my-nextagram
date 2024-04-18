import { unstable_cache } from "next/cache";

async function fetchPosts() {
  const response = await fetch(
    "https://65cc176edd519126b83e07f2.mockapi.io/api/v1/posts",
    { next: { tags: ["posts"] }}
  );
  return await response.json();
}

export const getCachedPosts = unstable_cache(fetchPosts, ["posts"], { tags: ["posts"] });

async function fetchComments(): Promise<{ id: string, content: string }[]> {
  const response = await fetch(
    "https://65cc176edd519126b83e07f2.mockapi.io/api/v1/comments",
    { next: { tags: ["comments"] }}
  );
  return await response.json();
}

export const getCachedComments = unstable_cache(fetchComments, ["comments"], { tags: ["comments"] });
