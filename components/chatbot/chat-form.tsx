import { useRef } from "react";
import { Send } from "lucide-react";

type ChatMessage = {
  role: "user" | "model";
  text: string;
};

// Cambia esto para que retorne Promise<void>
type GenerateBotResponse = (history: ChatMessage[]) => Promise<void>;

const ChatForm = ({
  chatHistory,
  setChatHistory,
  generateBotResponse,
}: {
  chatHistory: ChatMessage[];
  setChatHistory: React.Dispatch<React.SetStateAction<ChatMessage[]>>;
  generateBotResponse: GenerateBotResponse;
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const userMessage = inputRef.current?.value.trim();
    if (!userMessage) return;
    if (inputRef.current) inputRef.current.value = "";

    setChatHistory((history) => [
      ...history,
      { role: "user", text: userMessage },
    ]);
    setTimeout(
      () =>
        setChatHistory((history) => [
          ...history,
          { role: "model", text: "..." },
        ]),
      300
    );

    // Espera a que se complete la generación de respuesta
    await generateBotResponse([
      ...chatHistory,
      { role: "user", text: userMessage },
    ]);
  };

  return (
    <form onSubmit={handleFormSubmit} className="flex gap-2 items-center">
      <input
        type="text"
        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0d475b] focus:border-transparent text-sm"
        placeholder="Escribe un mensaje..."
        ref={inputRef}
      />
      <button
        type="submit"
        className="bg-[#ff6b35] hover:bg-[#e55a2a] text-white rounded-lg p-2 transition-colors flex items-center justify-center"
      >
        <Send className="h-5 w-5" />
      </button>
    </form>
  );
};

export default ChatForm;
