// src/data/mockData.ts

import { Chat, Message } from '@/types/chat';

// Correct image imports
import sarahAvatar from '@/assets/avatar-sarah.jpeg';
import mikeAvatar from '@/assets/avatar-mike.jpg';
import emmaAvatar from '@/assets/avatar-emma.jpg';
import davidAvatar from '@/assets/avatar-david.jpg';
import mommyAvatar from '@/assets/mo.jpg';          // ✅ updated to match actual file
import malvinAvatar from '@/assets/oo.jpeg';          // ✅ updated to match actual file
import auroraAvatar from  '@/assets/dj.jpeg'

// Helper function to generate dummy messages
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
    timestamp: new Date(Date.now() - (count - i) * 1000 * 60 * 5),
    isOwn: Math.random() > 0.5,
    status: Math.random() > 0.3 ? 'read' : (Math.random() > 0.6 ? 'delivered' : 'sent')
  }));
};

// Final mock chat list
export const mockChats: Chat[] = [
  {
    id: '1',
    name: 'Kylie',
    avatar: sarahAvatar,
    lastMessage: 'Looking forward to it!',
    timestamp: new Date(Date.now() - 300000),
    unreadCount: 2,
    isOnline: true,
    messages: generateMessages(14, '1')
  },
  {
    id: '2',
    name: 'Tidjani Islamiath',
    avatar: mikeAvatar,
    lastMessage: 'Perfect! See you tomorrow then',
    timestamp: new Date(Date.now() - 1800000),
    unreadCount: 0,
    isOnline: true,
    messages: generateMessages(8, '2')
  },
  {
    id: '3',
    name: 'Mrs Ella',
    avatar: emmaAvatar,
    lastMessage: 'Thanks for your help with the project!',
    timestamp: new Date(Date.now() - 3600000),
    unreadCount: 1,
    isOnline: false,
    messages: generateMessages(12, '3')
  },
  {
    id: '4',
    name: 'Andrew Kweku',
    avatar: davidAvatar,
    lastMessage: 'The presentation went really well 👍',
    timestamp: new Date(Date.now() - 7200000),
    unreadCount: 0,
    isOnline: false,
    messages: generateMessages(6, '4')
  },
  {
    id: '5',
    name: 'Aurora',
    avatar: auroraAvatar,
    lastMessage: 'Family meeting rescheduled to 3 PM',
    timestamp: new Date(Date.now() - 10800000),
    unreadCount: 5,
    isOnline: true,
    messages: generateMessages(20, '5')
  },
  {
    id: '6',
    name: 'Mommmy',
    avatar: mommyAvatar, // ✅ local import from src/assets/mom.jpg
    lastMessage: 'I miss you!',
    timestamp: new Date(Date.now() - (24 * 60 * 60 * 1000) - (Math.random() * 3600 * 1000)),
    unreadCount: 1,
    isOnline: true,
    messages: generateMessages(5, '6')
  },
  {
    id: '7',
    name: 'Malvin Munyanyi',
    avatar: malvinAvatar, // ✅ local import from src/assets/oo.jpg
    lastMessage: 'how have you been?',
    timestamp: new Date(Date.now() - (25 * 60 * 60 * 1000) - (Math.random() * 3600 * 1000)),
    unreadCount: 2,
    isOnline: true,
    messages: generateMessages(7, '7')
  }
];
