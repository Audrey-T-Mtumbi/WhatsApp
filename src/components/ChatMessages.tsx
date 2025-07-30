import { useEffect, useRef } from 'react';
import { MessageBubble } from './MessageBubble';
import { Chat } from '@/types/chat';

interface ChatMessagesProps {
  chat: Chat | null;
}

export const ChatMessages = ({ chat }: ChatMessagesProps) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chat?.messages]);

  if (!chat) {
    return (
      <div className="flex-1 flex items-center justify-center bg-chat-background">
        <div className="text-center">
          <div className="w-64 h-64 mx-auto mb-8 opacity-20">
            <svg viewBox="0 0 303 172" className="w-full h-full">
              <defs>
                <linearGradient id="intro-phone" x1="50%" x2="50%" y1="0%" y2="100%">
                  <stop offset="0%" stopColor="#F0F0F0"/>
                  <stop offset="100%" stopColor="#E8E8E8"/>
                </linearGradient>
              </defs>
              <path fill="url(#intro-phone)" d="M229.565 160.229c-.742-1.932-1.903-3.395-3.494-4.388-.793-.496-1.657-.854-2.584-1.073-1.037-.24-2.102-.27-3.16-.09a11.946 11.946 0 0 0-3.014.725c-.968.384-1.86.9-2.629 1.528a8.914 8.914 0 0 0-1.82 2.081c-.462.743-.79 1.563-.97 2.428a9.086 9.086 0 0 0-.066 2.53c.09.827.307 1.632.641 2.378.299.669.685 1.289 1.141 1.843a9.745 9.745 0 0 0 1.477 1.502c.54.424 1.129.78 1.748 1.058.619.279 1.26.478 1.903.594.642.116 1.285.149 1.918.099.633-.05 1.255-.175 1.848-.371.593-.196 1.155-.462 1.671-.789a9.543 9.543 0 0 0 1.418-1.114c.408-.4.77-.845 1.075-1.322.305-.477.55-.984.728-1.509a8.812 8.812 0 0 0 .311-1.598c.054-.538.055-1.078.003-1.606a9.374 9.374 0 0 0-.242-1.556z"/>
            </svg>
          </div>
          <h2 className="text-2xl text-text-secondary mb-2">WhatsApp Web</h2>
          <p className="text-text-muted max-w-md">
            Send and receive messages without keeping your phone online.<br />
            Use WhatsApp on up to 4 linked devices and 1 phone at the same time.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 bg-chat-background overflow-y-auto">
      <div className="py-4 px-6">
        {chat.messages.map((message) => (
          <MessageBubble key={message.id} message={message} />
        ))}
        <div ref={messagesEndRef} />
      </div>
    </div>
  );
};