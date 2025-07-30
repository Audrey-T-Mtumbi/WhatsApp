import { Phone, Video, Search, MoreVertical } from 'lucide-react';
import { Chat } from '@/types/chat';

interface ChatHeaderProps {
  chat: Chat | null;
}

export const ChatHeader = ({ chat }: ChatHeaderProps) => {
  if (!chat) {
    return (
      <div className="h-16 bg-chat-header border-b border-border-light flex items-center justify-center">
        <p className="text-text-muted">Select a chat to start messaging</p>
      </div>
    );
  }

  return (
    <div className="h-16 bg-chat-header border-b border-border-light px-4 flex items-center justify-between">
      <div className="flex items-center space-x-3">
        <div className="relative">
          <img
            src={chat.avatar}
            alt={chat.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          {chat.isOnline && (
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-online border-2 border-chat-header rounded-full"></div>
          )}
        </div>
        <div>
          <h2 className="font-medium text-foreground">{chat.name}</h2>
          <p className="text-xs text-text-secondary">
            {chat.isOnline ? 'online' : 'last seen recently'}
          </p>
        </div>
      </div>
      
      <div className="flex items-center space-x-2">
        <button className="p-2 hover:bg-hover rounded-full transition-colors">
          <Video className="w-5 h-5 text-text-secondary" />
        </button>
        <button className="p-2 hover:bg-hover rounded-full transition-colors">
          <Phone className="w-5 h-5 text-text-secondary" />
        </button>
        <button className="p-2 hover:bg-hover rounded-full transition-colors">
          <Search className="w-5 h-5 text-text-secondary" />
        </button>
        <button className="p-2 hover:bg-hover rounded-full transition-colors">
          <MoreVertical className="w-5 h-5 text-text-secondary" />
        </button>
      </div>
    </div>
  );
};