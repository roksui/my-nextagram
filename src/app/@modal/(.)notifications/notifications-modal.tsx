'use client';

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ElementRef, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export function NotificationsModalComponent() {
  const router = useRouter();
  const dialogRef = useRef<ElementRef<'dialog'>>(null);

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
    }
  }, []);

  function onDismiss() {
    router.back();
  }

  return createPortal(
    <div className="modal-backdrop">
      <dialog ref={dialogRef} className="modal" onClose={onDismiss}>
        <Link href="/photos/1">View photo 1</Link>
        <button onClick={onDismiss} className="close-button" />
      </dialog>
    </div>,
    document.getElementById('modal-root')!
  );
}