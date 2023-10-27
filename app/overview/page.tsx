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


  const [expandedPostId, setExpandedPostId] = useState(null);
  const documentData = (posts as Post[]).map((post: Post) => {
    const words = post.description.split(' ');

    const contentToDisplay = words.length > 15 ? words.slice(0, 15).join(' ') : post.description;

    return (
      <div key={post.id} className="relative bg-white rounded shadow p-4 m-4">
        <h1 className="text-xl font-bold">{post.title}</h1>
        <p>
          {expandedPostId === post.id ? post.description : contentToDisplay}
          {words.length > 15 && (
            <a className="top-0 right-0 px-4 py-2 bg-sky-600 text-white text-sm font-medium rounded-md ml-10" href={"/overview/" + post.id}>Läs mer</a>
          )}
        </p>
        <p>{post.author}</p>
        <EditBtn className="m-2" href={`/overview/${post.id}/edit`} />
        <DeleteBtn onClick={() => deleteDocument(post.id)} className="m-2" />
      </div>
    );
  });

  return (
    <div className="max-w-7xl m-auto min-h-screen text-center p-10">
      {documentData}
    </div>
  );
}
