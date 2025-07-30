import { Search, MessageCircle, MoreVertical, Users, Phone, Archive } from 'lucide-react';
import { Chat } from '@/types/chat';
import { formatDistanceToNow } from 'date-fns';

interface ChatSidebarProps {
  chats: Chat[];
  selectedChatId: string | null;
  onChatSelect: (chatId: string) => void;
}

export const ChatSidebar = ({ chats, selectedChatId, onChatSelect }: ChatSidebarProps) => {
  const formatTimestamp = (date: Date) => {
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const hours = diff / (1000 * 60 * 60);
    
    if (hours < 1) {
      return date.toLocaleTimeString('en-US', { 
        hour: 'numeric', 
        minute: '2-digit',
        hour12: false 
      });
    } else if (hours < 24) {
      return date.toLocaleTimeString('en-US', { 
        hour: 'numeric', 
        minute: '2-digit',
        hour12: false 
      });
    } else {
      return date.toLocaleDateString('en-US', { 
        month: 'short', 
        day: 'numeric' 
      });
    }
  };

  return (
    <div className="w-[400px] bg-sidebar-background border-r border-border-light flex flex-col h-screen">
      {/* Header */}
      <div className="bg-chat-header px-4 py-3 flex items-center justify-between border-b border-border-light">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-whatsapp-green rounded-full flex items-center justify-center">
            <span className="text-text-light font-medium text-sm">ME</span>
          </div>
          <h1 className="text-foreground font-medium text-lg">WhatsApp</h1>
        </div>
        <div className="flex items-center space-x-2">
          <button className="p-2 hover:bg-hover rounded-full transition-colors">
            <Users className="w-5 h-5 text-text-secondary" />
          </button>
          <button className="p-2 hover:bg-hover rounded-full transition-colors">
            <MessageCircle className="w-5 h-5 text-text-secondary" />
          </button>
          <button className="p-2 hover:bg-hover rounded-full transition-colors">
            <MoreVertical className="w-5 h-5 text-text-secondary" />
          </button>
        </div>
      </div>

      {/* Search */}
      <div className="p-3 bg-sidebar-background">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-text-muted" />
          <input
            type="text"
            placeholder="Search or start new chat"
            className="w-full pl-10 pr-4 py-2 bg-input-background border border-border rounded-lg text-sm text-foreground placeholder-text-muted focus:outline-none focus:border-whatsapp-green"
          />
        </div>
      </div>

      {/* Chat List */}
      <div className="flex-1 overflow-y-auto">
        {chats.map((chat) => (
          <div
            key={chat.id}
            className={`flex items-center p-3 hover:bg-hover cursor-pointer border-b border-border-light transition-colors ${
              selectedChatId === chat.id ? 'bg-active' : ''
            }`}
            onClick={() => onChatSelect(chat.id)}
          >
            <div className="relative mr-3">
              <img
                src={chat.avatar}
                alt={chat.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              {chat.isOnline && (
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-online border-2 border-sidebar-background rounded-full"></div>
              )}
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-medium text-foreground truncate">{chat.name}</h3>
                <span className="text-xs text-timestamp ml-2">
                  {formatTimestamp(chat.timestamp)}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm text-text-secondary truncate flex-1 mr-2">
                  {chat.lastMessage}
                </p>
                {chat.unreadCount > 0 && (
                  <span className="bg-whatsapp-green text-text-light text-xs rounded-full px-2 py-1 min-w-[20px] text-center">
                    {chat.unreadCount}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};