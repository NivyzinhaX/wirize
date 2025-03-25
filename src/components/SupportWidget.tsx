import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Smile, Paperclip, Mic } from 'lucide-react';

export function SupportWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<any[]>([]);
  const [showSupportMessage, setShowSupportMessage] = useState(false);
  const [responseTime, setResponseTime] = useState<number>(Math.floor(Math.random() * 46) + 5);
  const [showDiscordMessage, setShowDiscordMessage] = useState(false);
  const [typingTimeout, setTypingTimeout] = useState<any>(null);

  const sendMessage = () => {
    if (message.trim()) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: message, sender: 'user', type: 'text' },
      ]);
      setMessage('');
      if (typingTimeout) clearTimeout(typingTimeout);
      setTypingTimeout(setTimeout(() => {
        setShowDiscordMessage(true);
      }, 10000));
    }
  };

  const addEmoji = (emoji: string) => {
    setMessage((prevMessage) => prevMessage + emoji);
  };

  React.useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        setShowSupportMessage(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  return (
    <>
      <motion.div
        className="fixed bottom-4 left-4 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1 }}
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(true)}
          className="bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 transition-colors"
        >
          <MessageSquare className="w-6 h-6" />
        </motion.button>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-20 left-4 z-50 w-[90vw] max-w-[400px] bg-gray-900 rounded-lg shadow-xl border border-blue-400/20 h-[80vh] flex flex-col"
          >
            <div className="p-4 border-b border-blue-400/20 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <img
                    src="https://i.postimg.cc/7hDj2V0D/wirize.gif"
                    alt="Suporte"
                    className="w-10 h-10 rounded-full"
                  />
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-blue-400 rounded-full border-2 border-gray-900"></div>
                </div>
                <div>
                  <h3 className="font-semibold text-white">Atendente online</h3>
                  <p className="text-xs text-blue-400">Resposta em até {responseTime} minutos</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {showSupportMessage && (
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                  className="flex items-start gap-2"
                >
                  <img
                    src="https://i.postimg.cc/7hDj2V0D/wirize.gif"
                    alt="Suporte"
                    className="w-8 h-8 rounded-full"
                  />
                  <div className="bg-blue-400/10 rounded-lg p-3 max-w-[80%]">
                    <p className="text-white">Olá! Como posso ajudar você? 😊</p>
                  </div>
                </motion.div>
              )}

              {messages.map((msg, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: msg.sender === 'user' ? 50 : -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className={`flex items-start gap-2 ${msg.sender === 'user' ? 'justify-end' : ''}`}
                >
                  <div className={`bg-blue-400/10 rounded-lg p-3 max-w-[80%]`}>
                    <p className="text-white">{msg.text}</p>
                  </div>
                </motion.div>
              ))}

              {showDiscordMessage && (
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                  className="flex items-start gap-2"
                >
                  <div className="bg-blue-400/10 rounded-lg p-3 max-w-[80%]">
                    <p className="text-white">Para um atendimento mais rápido, entre em nosso Discord:</p>
                    <a
                      href="https://discord.gg/wirize"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      Clique aqui para entrar no Discord da Wirize
                    </a>
                  </div>
                </motion.div>
              )}
            </div>

            <div className="p-4 border-t border-blue-400/20">
              <div className="flex items-center gap-2">
                <div className="flex-1 bg-gray-800 rounded-lg flex items-center">
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Digite sua mensagem..."
                    className="flex-1 bg-transparent p-2 text-white focus:outline-none"
                  />
                  <div className="flex items-center gap-2 px-2">
                    <button
                      onClick={() => addEmoji('😊')}
                      className="text-gray-400 hover:text-blue-400"
                    >
                      <Smile className="w-5 h-5" />
                    </button>
                    <button className="text-gray-400 hover:text-blue-400">
                      <Paperclip className="w-5 h-5" />
                    </button>
                    <button className="text-gray-400 hover:text-blue-400">
                      <Mic className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                <button
                  onClick={sendMessage}
                  className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition-colors"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}