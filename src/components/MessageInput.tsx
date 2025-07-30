import { useState } from 'react';
import { Smile, Paperclip, Mic, Send } from 'lucide-react';

interface MessageInputProps {
  onSendMessage: (message: string) => void;
  disabled?: boolean;
}

export const MessageInput = ({ onSendMessage, disabled }: MessageInputProps) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && !disabled) {
      onSendMessage(message.trim());
      setMessage('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <div className="bg-input-background border-t border-border-light p-4">
      <form onSubmit={handleSubmit} className="flex items-end space-x-2">
        <button
          type="button"
          className="p-2 hover:bg-hover rounded-full transition-colors"
          disabled={disabled}
        >
          <Smile className="w-6 h-6 text-text-secondary" />
        </button>
        
        <button
          type="button"
          className="p-2 hover:bg-hover rounded-full transition-colors"
          disabled={disabled}
        >
          <Paperclip className="w-6 h-6 text-text-secondary" />
        </button>
        
        <div className="flex-1 relative">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type a message"
            className="w-full px-4 py-2 bg-input-background border border-border rounded-full resize-none text-sm text-foreground placeholder-text-muted focus:outline-none focus:border-whatsapp-green max-h-20 min-h-[40px]"
            rows={1}
            disabled={disabled}
            style={{
              height: 'auto',
              minHeight: '40px',
            }}
            onInput={(e) => {
              const target = e.target as HTMLTextAreaElement;
              target.style.height = 'auto';
              target.style.height = Math.min(target.scrollHeight, 80) + 'px';
            }}
          />
        </div>
        
        {message.trim() ? (
          <button
            type="submit"
            className="p-2 bg-whatsapp-green hover:bg-whatsapp-green-dark rounded-full transition-colors disabled:opacity-50"
            disabled={disabled}
          >
            <Send className="w-5 h-5 text-text-light" />
          </button>
        ) : (
          <button
            type="button"
            className="p-2 hover:bg-hover rounded-full transition-colors"
            disabled={disabled}
          >
            <Mic className="w-6 h-6 text-text-secondary" />
          </button>
        )}
      </form>
    </div>
  );
};