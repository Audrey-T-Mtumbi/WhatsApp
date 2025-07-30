import { Chat, Message } from '@/types/chat';
import sarahAvatar from '@/assets/avatar-sarah.jpg';
import mikeAvatar from '@/assets/avatar-mike.jpg';
import emmaAvatar from '@/assets/avatar-emma.jpg';
import davidAvatar from '@/assets/avatar-david.jpg';

const generateMessages = (count: number, chatId: string): Message[] => {
  const sampleMessages = [
    "Hey! How are you doing?",
    "Great! Just finished work. What about you?",
    "I'm planning a trip to Europe next month",
    "That sounds amazing! Which countries?",
    "Probably France, Italy, and Spain",
    "Perfect! I've been to all three. Need any recommendations?",
    "Yes please! Especially for Rome",
    "Rome is incredible. Make sure to visit the Colosseum early morning",
    "Thanks for the tip! 😊",
    "No problem! When are you leaving?",
    "Still figuring out dates, but likely mid-March",
    "Weather should be perfect then",
    "Hope so! I'll send you my itinerary when it's ready",
    "Looking forward to it!"
  ];

  return Array.from({ length: count }, (_, i) => ({
    id: `${chatId}-msg-${i}`,
    text: sampleMessages[i % sampleMessages.length],
    timestamp: new Date(Date.now() - (count - i) * 60000 * Math.random() * 60),
    isOwn: Math.random() > 0.5,
    status: Math.random() > 0.3 ? 'read' : Math.random() > 0.5 ? 'delivered' : 'sent'
  }));
};

export const mockChats: Chat[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    avatar: sarahAvatar,
    lastMessage: 'Looking forward to it!',
    timestamp: new Date(Date.now() - 300000), // 5 minutes ago
    unreadCount: 2,
    isOnline: true,
    messages: generateMessages(14, '1')
  },
  {
    id: '2',
    name: 'Mike Wilson',
    avatar: mikeAvatar,
    lastMessage: 'Perfect! See you tomorrow then',
    timestamp: new Date(Date.now() - 1800000), // 30 minutes ago
    unreadCount: 0,
    isOnline: true,
    messages: generateMessages(8, '2')
  },
  {
    id: '3',
    name: 'Emma Thompson',
    avatar: emmaAvatar,
    lastMessage: 'Thanks for your help with the project!',
    timestamp: new Date(Date.now() - 3600000), // 1 hour ago
    unreadCount: 1,
    isOnline: false,
    messages: generateMessages(12, '3')
  },
  {
    id: '4',
    name: 'David Chen',
    avatar: davidAvatar,
    lastMessage: 'The presentation went really well 👍',
    timestamp: new Date(Date.now() - 7200000), // 2 hours ago
    unreadCount: 0,
    isOnline: false,
    messages: generateMessages(6, '4')
  },
  {
    id: '5',
    name: 'Team Planning',
    avatar: sarahAvatar,
    lastMessage: 'Meeting rescheduled to 3 PM',
    timestamp: new Date(Date.now() - 10800000), // 3 hours ago
    unreadCount: 5,
    isOnline: true,
    messages: generateMessages(20, '5')
  }
];