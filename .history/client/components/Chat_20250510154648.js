import { useEffect, useRef } from "react";

const Chat = ({ chat, user, typing }) => {
  const scroller = useRef(null);

  useEffect(() => {
    if (!scroller.current) return;

    scroller.current.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  }, [chat]);

  return (
    <div className="h-full pb-12 md:p-4">
      <div className="w-full h-full max-h-screen rounded-md overflow-y-auto gradient pt-2 md:pt-6">
        <Message content="Hello world" />
      </div>
    </div>
  );
};

export default Chat;
