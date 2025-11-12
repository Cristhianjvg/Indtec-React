"use client";

import UID from "@/lib/uid";
import { useEffect, useState, useRef } from "react";
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
// function getEventFilterFromPath(pathname: string): string[] {
//   if (pathname.includes("/indtec")) return ["INDTEC"];
//   if (pathname.includes("/congreso")) return ["CONGRESO"];
//   if (pathname.includes("/tarifa")) return ["TARIFA"];
//   if (pathname.includes("/trabajos")) return ["TRABAJOS"];
//   if (pathname.includes("/eventos")) return ["EVENTOS"];
//   return []; // No filter for home page
// }

function buildRequestBody(
  message: string,
  idDevice: string,
  deviceAddress: string
) {
  return {
    model: "rag-default",
    messages: [{ role: "user", content: message }],
    rag_config: {
      enabled: true,
      search_limit: 7,
      min_similarity: 0.7,
      keyword_weight: 0.3,
      event_filter: ["DOC_INDTEC"],
    },
    idSession: "session-chatbot-indtec",
    idRequest: crypto.randomUUID(),
    dateProcess: new Date().toISOString(),
    process: "chatbot-message",
    idDevice: idDevice || "unknown",
    deviceAddress: deviceAddress || "0.0.0.0",
  };
}

const Chatbot = () => {
  // const pathname = usePathname();
  // const eventFilter = getEventFilterFromPath(pathname);
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
  const [showChatbot, setShowChatbot] = useState(true);
  const chatBodyRef = useRef<HTMLDivElement>(null);
  const generateBotResponse = async (history: ChatMessage[]) => {
    const updateHistory = (text: string) => {
      setChatHistory((prev) => [
        ...prev.filter((msg) => msg.text !== "..."),
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
      // 🔗 Llamada directa al backend remoto
      const requestBody = buildRequestBody(
        lastMessage.text,
        idDevice,
        deviceAddress
      );

      const response = await fetch(
        "https://istschat.xyz/api/v1/chat/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-App-Authorization": "X-Auth wiaAchcHks3rBxIhJQem1nLoMDwdoQ==",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.KMUFsIDTnFmyG3nMiGM6H9FNFUROf3wh7SmqJp-QV30",
          },
          body: JSON.stringify(requestBody),
        }
      );

      // const response = await fetch(
      //   "https://istschat.xyz/api/v1/chat/completions",
      //   {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //       "X-App-Authorization": "X-Auth wiaAchcHks3rBxIhJQem1nLoMDwdoQ==",
      //       Authorization: "Bearer ...",
      //     },
      //     body: JSON.stringify({
      //       message: lastMessage.text,
      //       idDevice,
      //       deviceAddress,
      //       eventFilter: eventFilter,
      //     }),
      //   }
      // );

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || "Failed to get response");
      }

      const data = await response.json();
      console.log("Chatbot response:", data);
      const botText =
        data?.data?.choices?.[0]?.message?.content ??
        data?.info ??
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
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-12 h-12 sm:w-14 sm:h-14 bg-[#ff6b35] hover:bg-[#e55a2a] text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
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
        <div
          className="
            fixed z-50
            right-3 bottom-20 sm:right-6 sm:bottom-24

            /* ancho base y por breakpoints */
            w-[85vw] sm:w-[50vw] md:w-[325px] lg:w-[350px] max-w-[350px]

            /* altura base + límite por viewport para que no se salga */
            h-[65vh] sm:h-[62vh] max-h-[calc(88vh-3rem)]

            /* micro-ajustes para pantallas ≤ 360px (p. ej. 320x698) */
            max-[360px]:right-2
            max-[360px]:bottom-16
            max-[360px]:w-[94vw]
            max-[360px]:h-[65vh]
            max-[360px]:max-h-[calc(100vh-4rem)]

            bg-white rounded-lg shadow-2xl flex flex-col border border-gray-200
            overflow-hidden
            animate-in slide-in-from-bottom-4 duration-300
          "
        >
          {/* Header */}
          <div className="bg-[#0d475b] text-white p-3 sm:p-4 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#0a3845] rounded-full flex items-center justify-center">
                <ChatbotIcon />
              </div>
              <div>
                <h3 className="font-semibold text-base sm:text-lg leading-tight">
                  CHATBOT INDTEC
                </h3>
                <p className="text-[10px] sm:text-xs text-blue-100">En línea</p>
              </div>
            </div>
            <button
              onClick={() => setShowChatbot(false)}
              className="text-white hover:bg-[#0a3845] rounded-full p-1 transition-colors"
              aria-label="Cerrar chatbot"
            >
              {/* ícono X */}
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

          {/* Body */}
          <div
            ref={chatBodyRef}
            className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4 bg-gray-50"
          >
            {/* Mensaje de bienvenida */}
            <div className="flex gap sm:gap-2 items-start">
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-[#0d475b] rounded-full flex items-center justify-center flex-shrink-0">
                <Bot className="w-4 h-4 text-white" />
              </div>
              <div className="bg-white rounded-lg rounded-tl-none p-2 sm:p-3 shadow-sm max-w-[90%] sm:max-w-[80%]">
                <p className="text-xs sm:text-sm text-gray-800">
                  ¡Hola! 👋 <br /> ¿En qué puedo ayudarte hoy?
                </p>
              </div>
            </div>

            {chatHistory.map((chat, index) => (
              <ChatMessage key={index} chat={chat} />
            ))}
          </div>

          {/* Footer */}
          <div className="p-3 sm:p-4 border-t border-gray-200 bg-white rounded-b-lg  max-[360px]:right-2">
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
