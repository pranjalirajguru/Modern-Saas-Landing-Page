'use client';

import { useState } from 'react';

export default function AISection() {
  const [messages, setMessages] = useState([
    { role: 'ai', text: 'Hi there! Ask me anything 💡' },
  ]);
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    setMessages((prev) => [
      ...prev,
      { role: 'user', text: input },
      { role: 'ai', text: `🤖 You said: "${input}"` },
    ]);
    setInput('');
  };

  return (
    <section className="py-16 px-4 md:px-8 max-w-3xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
        💬 AI Chat Assistant
      </h2>

      <div className="bg-white dark:bg-zinc-900 rounded-xl border border-zinc-300 dark:border-zinc-700 shadow-lg overflow-hidden">
        <div className="h-64 overflow-y-auto p-4 space-y-3 bg-gradient-to-br from-purple-100/60 to-purple-200/40 dark:from-purple-900 dark:to-purple-950">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`max-w-[80%] p-3 rounded-lg ${
                msg.role === 'ai'
                  ? 'bg-purple-200 dark:bg-purple-800 text-left text-gray-900 dark:text-white'
                  : 'bg-white dark:bg-gray-700 text-right ml-auto'
              }`}
            >
              {msg.text}
            </div>
          ))}
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex items-center gap-2 border-t border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 p-4"
        >
          <input
            type="text"
            className="flex-1 p-2 rounded-md bg-zinc-100 dark:bg-zinc-700 text-zinc-900 dark:text-white focus:outline-none"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask your AI..."
          />
          <button
            type="submit"
            className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
}
