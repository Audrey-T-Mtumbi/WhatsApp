import { useState } from 'react';
import { ChatSidebar } from './ChatSidebar';
import { ChatHeader } from './ChatHeader';
import { ChatMessages } from './ChatMessages';
import { MessageInput } from './MessageInput';
import { mockChats } from '@/data/mockData';
import { Chat, Message } from '@/types/chat';

export const WhatsAppInterface = () => {
  const [chats, setChats] = useState<Chat[]>(mockChats);
  const [selectedChatId, setSelectedChatId] = useState<string | null>(null);

  const selectedChat = chats.find(chat => chat.id === selectedChatId) || null;

  const handleSendMessage = (messageText: string) => {
    if (!selectedChatId) return;

    const newMessage: Message = {
      id: `msg-${Date.now()}`,
      text: messageText,
      timestamp: new Date(),
      isOwn: true,
      status: 'sent'
    };

    setChats(prevChats =>
      prevChats.map(chat => {
        if (chat.id === selectedChatId) {
          return {
            ...chat,
            messages: [...chat.messages, newMessage],
            lastMessage: messageText,
            timestamp: new Date()
          };
        }
        return chat;
      })
    );

    // Simulate message status updates
    setTimeout(() => {
      setChats(prevChats =>
        prevChats.map(chat => {
          if (chat.id === selectedChatId) {
            return {
              ...chat,
              messages: chat.messages.map(msg =>
                msg.id === newMessage.id ? { ...msg, status: 'delivered' } : msg
              )
            };
          }
          return chat;
        })
      );
    }, 1000);

    setTimeout(() => {
      setChats(prevChats =>
        prevChats.map(chat => {
          if (chat.id === selectedChatId) {
            return {
              ...chat,
              messages: chat.messages.map(msg =>
                msg.id === newMessage.id ? { ...msg, status: 'read' } : msg
              )
            };
          }
          return chat;
        })
      );
    }, 2000);
  };

  return (
    <div className="h-screen bg-background flex overflow-hidden">
      <ChatSidebar
        chats={chats}
        selectedChatId={selectedChatId}
        onChatSelect={setSelectedChatId}
      />
      
      <div className="flex-1 flex flex-col">
        <ChatHeader chat={selectedChat} />
        <ChatMessages chat={selectedChat} />
        {selectedChat && (
          <MessageInput
            onSendMessage={handleSendMessage}
            disabled={false}
          />
        )}
      </div>
    </div>
  );
};