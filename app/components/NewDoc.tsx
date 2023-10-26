import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

export default function AddNew() {
  const router = useRouter();
  const [newPost, setNewPost] = useState({
    title: "",
    content: "",
    user: ""
  });

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const res = await fetch("/api",  {
      method: "POST",
      body: JSON.stringify(newPost),
    });

    if (res.ok) {
      router.push("/overview");
      return;
    }
    //Gör finare felmedelande
    window.Error("An error occured");
  }

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
    <div className="relative py-3 sm:max-w-xl sm:mx-auto">
      <div
        className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
      </div>
      <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
        <div className="max-w-md mx-auto">
          <div>
            <h1 className="text-2xl font-semibold">Lägg till ett nytt dokument</h1>
          </div>
          <div className="divide-y divide-gray-200">
            <form onSubmit={submit}  className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
              <div className="relative">
                <input placeholder='Titel' value={newPost.title}  onChange={(e) => setNewPost((prev) => {return {...prev, title: e.target.value}})} name='title' type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" />
                <label className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Titel</label>
              </div>
              <div className="relative">
                <textarea name="description" value={newPost.content}  onChange={(e) => setNewPost((prev) => {return {...prev, content: e.target.value}})}  className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Inehåll" />
                <label className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Inehåll</label>
              </div>
              <div className="relative">
                <input placeholder='Användare' name='user' value={newPost.user} onChange={(e) => setNewPost((prev) => {return {...prev, user: e.target.value}})} type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" />
                <label className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Användare</label>
              </div>
              <div className="relative">
                <button className="bg-blue-500 text-white rounded-md px-2 py-1">Spara</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
    
  )
}
