"use client";
import { Post } from "@/interfaces";
import React, { useEffect, useState } from "react";

export default function Documents() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const getPosts = async () => {
      const result = await fetch("/api");
      const postsFromApi = await result.json();
      setPosts(postsFromApi);
    };
    getPosts();
  }, []);

  const documentData = (posts as Post[]).map((post: Post) => (
    <div key={post.id} className="bg-white rounded shadow p-4 m-4">
      <h1 className="text-xl font-bold">{post.title}</h1>
      <p>{post.description}</p>
      <p>{post.author}</p>
    </div>
  ));

  return (
    <div className="max-w-7xl m-auto min-h-screen text-center p-10">
      {documentData}
    </div>
  );
}
