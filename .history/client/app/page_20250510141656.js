import { io } from "socket.io-client";
import { useEffect } from "react";

const socket = io("http://localhost:3001");

export default function Home() {
  useEffect(() => {
    socket.emit("client_ready", "hello from client");
  }, []);

  return (
    <div>
      <main className="flex"></main>
    </div>
  );
}
