import { Modal } from './modal';
import { getCachedComments } from '@/lib/fetch';

export default async function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  let comments = await getCachedComments();
  
  return <Modal comments={comments}>{photoId}</Modal>;
}

