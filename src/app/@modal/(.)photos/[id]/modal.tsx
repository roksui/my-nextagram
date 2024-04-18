'use client';

import { type ElementRef, useEffect, useRef, useTransition } from 'react';
import { useRouter } from 'next/navigation';
import { createPortal } from 'react-dom';
import addComment from '../../../actions';

export function Modal({
  children,
  comments
}: {
  children: React.ReactNode,
  comments: { id: string, content: string }[]
}) {
  const router = useRouter();
  const dialogRef = useRef<ElementRef<'dialog'>>(null);
  const [pending, startTransition] = useTransition();

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
    }
  }, []);

  function onDismiss() {
    router.back();
  }

  async function handleAdd() {
    startTransition(async () => {
      await addComment();
    });
  }

  return createPortal(
    <div className="modal-backdrop">
      <dialog ref={dialogRef} className="modal" onClose={onDismiss}>
        {children}
        <div className="comments">
          {comments.map((comment) => (
            <span key={comment.id}>Content: {comment.content}</span>
          ))}

          <button onClick={handleAdd}>{pending ? "Adding": "Add"}</button>

        </div>

        <button onClick={onDismiss} className="close-button" />
      </dialog>
    </div>,
    document.getElementById('modal-root')!
  );
}
