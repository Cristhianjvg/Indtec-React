import React, { HTMLAttributes } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Bot, User } from "lucide-react";

interface Chat {
  role: string;
  text: string;
}

const ChatMessage = ({ chat }: { chat: Chat }) => {
  const isBot = chat.role === "model";

  return (
    <div
      className={`flex gap-3 items-start ${!isBot ? "flex-row-reverse" : ""}`}
    >
      {/* Avatar */}
      <div
        className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
          isBot ? "bg-[#0d475b]" : "bg-[#ff6b35]"
        }`}
      >
        {isBot ? (
          <Bot className="w-4 h-4 text-white" />
        ) : (
          <User className="w-4 h-4 text-white" />
        )}
      </div>

      {/* Message Content */}
      <div
        className={`rounded-lg p-3 shadow-sm max-w-[80%] ${
          isBot
            ? "bg-white rounded-tl-none"
            : "bg-[#ff6b35] text-white rounded-tr-none"
        }`}
      >
        <div
          className={`text-sm prose prose-sm max-w-none ${
            !isBot ? "prose-invert" : ""
          }`}
        >
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              ul: ({ ...props }) => (
                <ul className="list-disc ml-4 my-2" {...props} />
              ),
              ol: ({ ...props }) => (
                <ol className="list-decimal ml-4 my-2" {...props} />
              ),
              strong: ({ ...props }) => (
                <strong className="font-bold" {...props} />
              ),
              code: ({
                inline,
                ...props
              }: { inline?: boolean } & HTMLAttributes<HTMLElement>) =>
                inline ? (
                  <code
                    className="bg-gray-100 text-gray-800 px-1 py-0.5 rounded text-xs"
                    {...props}
                  />
                ) : (
                  <code
                    className="block bg-gray-100 text-gray-800 p-2 rounded text-xs overflow-x-auto"
                    {...props}
                  />
                ),
              p: ({ ...props }) => <p className="mb-2 last:mb-0" {...props} />,
            }}
          >
            {chat.text || ""}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
