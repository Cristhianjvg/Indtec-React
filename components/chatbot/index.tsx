"use client";

import UID from "@/lib/uid";
import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";
import ChatMessage from "./chat-message";
import ChatForm from "./chat-form";
import { Bot } from "lucide-react";

const ChatbotIcon = () => <Bot className="w-6 h-6 text-white" />;

async function InitializeIdentifier() {
  try {
    const uid = new UID();
    const completeID = await uid.completeID();
    localStorage.setItem("KEY_ID_DEVICE", completeID);
  } catch (error) {
    console.warn("Error inicializando ID del dispositivo:", error);
    localStorage.setItem("KEY_ID_DEVICE", navigator.userAgent || "unknown");
  }
}

interface ChatMessage {
  role: "user" | "model";
  text: string;
}

// Helper function to detect event from pathname
function getEventFilterFromPath(pathname: string): string[] {
  if (pathname.includes("/indtec")) return ["INDTEC"];
  if (pathname.includes("/congreso")) return ["CONGRESO"];
  if (pathname.includes("/tarifa")) return ["TARIFA"];
  if (pathname.includes("/trabajos")) return ["TRABAJOS"];
  if (pathname.includes("/eventos")) return ["EVENTOS"];
  return []; // No filter for home page
}

const Chatbot = () => {
  const pathname = usePathname();
  const eventFilter = getEventFilterFromPath(pathname);
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
  const [showChatbot, setShowChatbot] = useState(false);
  const chatBodyRef = useRef<HTMLDivElement>(null);
  const generateBotResponse = async (history: ChatMessage[]) => {
    const updateHistory = (text: string) => {
      setChatHistory((prev) => [
        ...prev.filter((msg) => msg.text !== "Thinking..."),
        { role: "model", text },
      ]);
    };

    try {
      // Get device information from localStorage
      const idDevice = localStorage.getItem("KEY_ID_DEVICE") || "unknown";
      const deviceAddress =
        localStorage.getItem("KEY_DEVICE_ADDRESS") || "0.0.0.0";

      // Get the last message (user's message)
      const lastMessage = history[history.length - 1];

      // Call the Next.js API route (server-side)
      const response = await fetch("/api/chatbot", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: lastMessage.text,
          idDevice,
          deviceAddress,
          eventFilter: eventFilter,
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || "Failed to get response");
      }

      const data = await response.json();
      const botText =
        data.response ||
        data.message ||
        "Lo siento, no pude generar una respuesta.";
      updateHistory(botText);
    } catch (error) {
      console.error("Error generating bot response:", error);
      updateHistory(
        "Lo siento, estoy teniendo problemas de conexión. Por favor, intenta de nuevo más tarde."
      );
    }
  };

  // Initialize device ID only once on mount
  useEffect(() => {
    InitializeIdentifier();
  }, []);

  // Scroll to bottom when chat history changes
  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTo({
        top: chatBodyRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [chatHistory]);

  return (
    <>
      {/* Chatbot Toggle Button */}
      <button
        onClick={() => setShowChatbot(!showChatbot)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#ff6b35] hover:bg-[#e55a2a] text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
      >
        {showChatbot ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
        )}
      </button>

      {/* Chatbot Popup */}
      {showChatbot && (
        <div className="fixed bottom-24 right-6 z-50 w-96 h-[600px] bg-white rounded-lg shadow-2xl flex flex-col border border-gray-200 animate-in slide-in-from-bottom-4 duration-300">
          {/* Chatbot Header */}
          <div className="bg-[#0d475b] text-white p-4 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#0a3845] rounded-full flex items-center justify-center">
                <ChatbotIcon />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Chatbot ISTS</h3>
                <p className="text-xs text-blue-100">En línea</p>
              </div>
            </div>
            <button
              onClick={() => setShowChatbot(false)}
              className="text-white hover:bg-[#0a3845] rounded-full p-1 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Chatbot Body */}
          <div
            ref={chatBodyRef}
            className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50"
          >
            {/* Welcome Message */}
            <div className="flex gap-3 items-start">
              <div className="w-8 h-8 bg-[#0d475b] rounded-full flex items-center justify-center flex-shrink-0">
                <Bot className="w-4 h-4 text-white" />
              </div>
              <div className="bg-white rounded-lg rounded-tl-none p-3 shadow-sm max-w-[80%]">
                <p className="text-sm text-gray-800">
                  ¡Hola! 👋 <br /> ¿En qué puedo ayudarte hoy?
                </p>
              </div>
            </div>

            {/* Chat History */}
            {chatHistory.map((chat, index) => (
              <ChatMessage key={index} chat={chat} />
            ))}
          </div>

          {/* Chatbot Footer */}
          <div className="p-4 border-t border-gray-200 bg-white rounded-b-lg">
            <ChatForm
              chatHistory={chatHistory}
              setChatHistory={setChatHistory}
              generateBotResponse={generateBotResponse}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
