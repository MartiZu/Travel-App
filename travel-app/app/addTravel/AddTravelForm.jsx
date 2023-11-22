"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddTravelForm() {
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [room, setRoom] = useState("");
  const [status, setStatus] = useState("open");

  const router = useRouter();

  const submitForm = async (e) => {
    e.preventDefault();

    const newTicket = {
      author,
      title,
      description,
      room,
      status,
    };

    const response = await fetch("http://localhost:4000/tickets", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTicket),
    });

    if (response.ok) {
      router.refresh();
      router.push("/tickets");
    }
  };

  return (
    <form
      className="flex flex-row justify-center items-center mb-80"
      onSubmit={submitForm}
    >
      {/* <div></div> */}
      <div className="boarder-radius:0.5rem bg-gray-100 w-full max-w-4xl h-full text-2xl">
        <h1 className="text-center m-4 px-64 text-5xl">New ticket form</h1>
        <div className="flex flex-row w-full">
          <div className="left m-4 w-1/2 flex flex-col place-content-between h-56">
            <label className="flex flex-row items-center gap-3">
              <p>Author</p>
              <input
                className="w-full text-base h-8 px-3"
                type="text"
                required
                placeholder="Tell us your name"
                name="author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              />
            </label>
            <label className="flex flex-row items-center gap-9">
              <p className="">Title</p>
              <input
                className="w-full text-base h-8 px-3"
                type="text"
                required
                placeholder="Tell us the title of your problem"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </label>
            <label className="flex flex-row items-center gap-5">
              <p>Room</p>
              <input
                className="w-full text-base h-8 px-3"
                type="text"
                required
                placeholder="Your room number"
                name="room"
                value={room}
                onChange={(e) => setRoom(e.target.value)}
              />
            </label>
          </div>
          <div className="right w-1/2 m-4">
            {/* <p>Description</p> */}
            <textarea
              className="h-full w-full text-base"
              required
              placeholder="Tell us about a problem"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-row justify-center mt-4">
          <button
            type="submit"
            className="bg-green-600 text-white mb-4 py-3 px-9"
          >
            Submit!
          </button>
        </div>
      </div>
    </form>
  );
}
