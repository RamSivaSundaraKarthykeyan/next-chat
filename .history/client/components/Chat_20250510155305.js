import { useEffect, useRef } from "react";

const Chat = () => {
  return (
    <div className="h-full pb-12 md:p-4">
      <div className="w-full h-full max-h-screen rounded-md overflow-y-auto gradient pt-2 md:pt-6">
        <Message content="Hello world" />
      </div>
    </div>
  );
};

const Message = ({ content }) => {
  return (
    <p className={`px-6 py-1 flex md:px-6`}>
      <span className="text-3xl px-6 oy-1 rounded bg-amber-500 text-white">
        {content}
      </span>
    </p>
  );
};

export default Chat;
