"use client";
import { io } from "socket.io-client";
import { useEffect, useState, useRef } from "react";
import { Chat, Input, SignUp } from "@/components";

const socket = io("http://localhost:3001");

export default function Home() {
  useEffect(() => {
    socket.emit("client_ready", "hello from client");
  }, []);

  socket.on("mass", () => {
    console.log("Super pa neenu");
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
