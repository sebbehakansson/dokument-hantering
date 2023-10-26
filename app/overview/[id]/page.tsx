"use client";
import { Post } from "@/interfaces";
import React, { useEffect, useState } from "react";

export default function Document({ params }: { params: { id: string } }) {
  const [post, setPost] = useState<{
    title: string,
    description: string,
    author: string
  } | undefined>();
  useEffect(() => {
    const getPosts = async () => {
      const result = await fetch("/api/" + params.id);
      const postsFromApi = await result.json();
      setPost(postsFromApi[0]);
    };
    getPosts();
  }, []);

  return (
    <div className="max-w-7xl m-auto min-h-screen text-center p-10">
      {post && <>
        {post.title}
      </>}
    </div>
  );
}
