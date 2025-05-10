"use client";
import { io } from "socket.io-client";
import { useEffect, useState, useRef } from "react";
import { Chat, Inputs, SignUp } from "@/components";

const socket = io("http://localhost:3001");

export default function Home() {
  const user = useRef("null");

  return (
    <div>
      <main className="flex">
        {user.current ? (
          <>
            <Chat />
            <Inputs />
          </>
        ) : (
          <SignUp />
        )}
      </main>
    </div>
  );
}
