import { io } from "socket.io-client";

const socket = io("http://localhost:3001");

export default function Home() {
  return <div>thala</div>;
}
