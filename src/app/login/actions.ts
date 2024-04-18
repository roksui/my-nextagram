"use server";

import { redirect } from "next/navigation";

export async function login(
  prevState: {
    success: boolean;
    message: string;
  },
  formData: FormData
) {
  redirect("/");
}