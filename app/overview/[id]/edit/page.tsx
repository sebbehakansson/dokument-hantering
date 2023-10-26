"use client";
import { Post } from "@/interfaces";
import React, { useEffect, useState } from "react";

export default function Document({ params }: { params: { id: string } }) {
  const [post, setPost] = useState<{
    title: string,
    description: string,
    author: string
  } | undefined>();
  
    const getPost = async () => {
        const result = await fetch("/api/" + params.id);
        const postsFromApi = await result.json();
        setPost(postsFromApi[0]);
    };

  useEffect(() => {
    getPost();
  }, []);

  function edit() {
    fetch(`/api/${params.id}`, {
        method: "PATCH",
        body: JSON.stringify(post),
    }).then(() => {
        getPost();
    });
  } 

  return (
    <div className="max-w-7xl m-auto min-h-screen text-center p-10">
      {post && <>
        <label htmlFor="title">Title</label>
        <input  value={post.title} id="title" onChange={(e) => setPost({...post, title: e.target.value})} type="text" />
        <label htmlFor="description">Description</label>
        <textarea id="description" value={post.description} onChange={(e) => setPost({...post, description: e.target.value})} cols={30} rows={5}></textarea>
        <button className="px-4 py-2 bg-sky-600 text-white text-sm font-medium rounded-md ml-10" onClick={edit}>Save</button>
      </>}
    </div>
  );
}
