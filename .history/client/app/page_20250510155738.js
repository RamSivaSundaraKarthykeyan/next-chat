"use client";
import { io } from "socket.io-client";
import { useEffect, useState, useRef } from "react";
import { Chat, Inputs, SignUp } from "@/components";

const socket = io("http://localhost:3001");

export default function Home() {
  const user = useRef(null);

  return (
    <div>
      <main className="h-screen max-h-screen max-w-screen mx-auto md:container md:p-20 md:pt-4">
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
