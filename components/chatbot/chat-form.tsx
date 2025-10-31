import { useRef } from "react";
import { Send } from "lucide-react";

const ChatForm = ({ chatHistory, setChatHistory, generateBotResponse }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const userMessage = inputRef.current?.value.trim();
    if (!userMessage) return;
    if (inputRef.current) inputRef.current.value = "";

    setChatHistory((history: any) => [...history, { role: "user", text: userMessage }]);
    setTimeout(() => setChatHistory((history: any) => [...history, { role: "model", text: "Thinking..." }]), 300);

    generateBotResponse([...chatHistory, { role: "user", text: userMessage }]);
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
