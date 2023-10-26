"use client";
import { Post } from "@/interfaces";
import React, { useEffect, useState } from "react";
import EditBtn from "../components/EditBtn";
import DeleteBtn from "../components/DeleteBtn";

export default function Documents() {
  const [posts, setPosts] = useState([]);
  const getPosts = async () => {
      const result = await fetch("/api");
      const postsFromApi = await result.json();
      setPosts(postsFromApi);
  };

  useEffect(() => {
    getPosts();
  }, []);

  function deleteDocument(id: any) {
    console.log(id);
    fetch("/api/" + id, {
      method: "DELETE"
    }).then((res) => {
      getPosts();
    });
  }

  const documentData = (posts as Post[]).map((post: Post) => (
    <div key={post.id} className="relative bg-white rounded shadow p-4 m-4">
      <h1 className="text-xl font-bold">{post.title}</h1>
      <p>{post.description}</p>
      <p>{post.author}</p>
      <EditBtn className="m-2" href={`/overview/${post.id}/edit`}/>
      <DeleteBtn onClick={() => deleteDocument(post.id)}  className="m-2"/>
    </div>
  ));

  return (
    <div className="max-w-7xl m-auto min-h-screen text-center p-10">
      {documentData}
    </div>
  );
}
