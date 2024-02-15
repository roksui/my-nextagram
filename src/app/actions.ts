"use server";

import { revalidateTag } from "next/cache";

export default async function addComment() {
  
  try {
    const response = await fetch(
      "https://65cc176edd519126b83e07f2.mockapi.io/api/v1/comments", 
      {
        method: "POST",
        body: JSON.stringify(""),
        headers: {
          "Next-Url": "/"
        }
      }
    );
    revalidateTag("comments");
  } catch (error) {
    console.error("Error occurred in server action!");
    return;
  }
  
}