"use client";
import { io } from "socket.io-client";
import { useEffect } from "react";

const socket = io("http://localhost:3001");

export default function Home() {
  useEffect(() => {
    socket.emit("client_ready", "hello from client");
  }, []);

  socket.on("mass", () => {
    console.log("Sper pa neenu");
  });

  return (
    <div>
      <main className="flex">
        <button
          onClick={() => {
            socket.emit("btn_clicked");
          }}
        >
          button
        </button>
      </main>
    </div>
  );
}
