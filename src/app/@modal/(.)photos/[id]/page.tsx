import { Modal } from './modal';

export default async function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  let comments = [];
  
  if (photoId === "1") {
    comments = await fetchComments();
  }

  return <Modal comments={comments}>{photoId}</Modal>;
}

async function fetchComments() {
  const response = await fetch(
    "https://65cc176edd519126b83e07f2.mockapi.io/api/v1/comments",
    { next: { tags: ["comments"] }}
  );
  return await response.json();
}