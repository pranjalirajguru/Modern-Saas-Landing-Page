'use client';

import { useState } from 'react';
import { MessageCircle } from 'lucide-react'; // optional icon

export default function AIChatBot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  const toggleChat = () => setOpen(!open);

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage = { role: 'user', text: input };
    const botReply = {
      role: 'bot',
      text: `🤖 AI says: "${input}"`,
    };

    setMessages([...messages, userMessage, botReply]);
    setInput('');
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 z-50 bg-purple-700 hover:bg-purple-800 text-white p-4 rounded-full shadow-lg transition-all"
        aria-label="Open AI Chat"
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      {/* Chatbox */}
      {open && (
        <div className="fixed bottom-20 right-6 z-50 w-80 h-96 bg-white border border-gray-300 rounded-lg shadow-xl flex flex-col overflow-hidden">
          <div className="bg-purple-700 text-white px-4 py-2 text-sm font-semibold">
            AI Chat
          </div>
          <div className="flex-1 p-3 overflow-y-auto text-sm text-gray-800">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`mb-2 ${
                  msg.role === 'user'
                    ? 'text-right text-black'
                    : 'text-left text-purple-700'
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div className="p-2 border-t border-gray-200 flex gap-2">
            <input
              type="text"
              className="flex-1 border rounded px-2 py-1 text-sm"
              placeholder="Type a message"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
            />
            <button
              onClick={sendMessage}
              className="bg-purple-700 text-white px-3 py-1 rounded text-sm hover:bg-purple-800"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}
