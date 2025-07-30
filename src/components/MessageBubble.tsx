import { Check, CheckCheck } from 'lucide-react';
import { Message } from '@/types/chat';

interface MessageBubbleProps {
  message: Message;
}

export const MessageBubble = ({ message }: MessageBubbleProps) => {
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: 'numeric', 
      minute: '2-digit',
      hour12: false 
    });
  };

  const getStatusIcon = () => {
    if (!message.isOwn) return null;
    
    switch (message.status) {
      case 'sent':
        return <Check className="w-4 h-4 text-text-muted" />;
      case 'delivered':
        return <CheckCheck className="w-4 h-4 text-text-muted" />;
      case 'read':
        return <CheckCheck className="w-4 h-4 text-whatsapp-teal" />;
      default:
        return null;
    }
  };

  return (
    <div className={`flex mb-2 ${message.isOwn ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-[65%] px-3 py-2 rounded-lg relative ${
          message.isOwn
            ? 'bg-message-outgoing text-foreground'
            : 'bg-message-incoming text-foreground shadow-sm'
        }`}
      >
        <div className="break-words">
          <p className="text-sm leading-relaxed">{message.text}</p>
        </div>
        
        <div className={`flex items-center mt-1 space-x-1 ${message.isOwn ? 'justify-end' : 'justify-end'}`}>
          <span className="text-xs text-timestamp">
            {formatTime(message.timestamp)}
          </span>
          {getStatusIcon()}
        </div>
        
        {/* Message tail */}
        <div
          className={`absolute top-0 w-0 h-0 ${
            message.isOwn
              ? 'right-0 border-l-8 border-l-message-outgoing border-t-8 border-t-transparent -mr-2'
              : 'left-0 border-r-8 border-r-message-incoming border-t-8 border-t-transparent -ml-2'
          }`}
        />
      </div>
    </div>
  );
};