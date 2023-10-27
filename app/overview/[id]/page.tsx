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
        <h1 className="text-2xl font-bold">{post.title}</h1>
        <span className="mt-1 mb-4">Written by {post.author}</span>
        <p className="text-sm font-medium">{post.description}</p>
      </>}
    </div>
  );
}
