"use client";
import { Post } from "@/interfaces";
// import { dbQuery } from "@/src/lib/db";
import React, { useEffect, useState } from "react";

export default function Documents() {
  const [posts, setPosts] = useState([]);
  // const query = "SELECT * FROM schoolproject";
  // const posts = dbQuery({ query, values: [] });
  useEffect(() => {
    const getPosts = async () => {
      const result = await fetch("/api");
      const postsFromApi = await result.json();
      setPosts(postsFromApi);
    };
    getPosts();
  }, []);
  console.log(posts);

  const documentData = (posts as Post[]).map((post: Post) => (
    <div key={post.id}>
      <h1>{post.title}</h1>
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
