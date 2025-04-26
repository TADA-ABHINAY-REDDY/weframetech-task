'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { User, ChevronRight, Link2 } from 'lucide-react';

interface PendingQuestionsProps {
  onChatOpen: () => void;
}

export default function PendingQuestions({ onChatOpen }: PendingQuestionsProps) {
  const questions = [
    {
      id: 1,
      user: { name: 'Phoenix Baker', role: '@phoenix', image: 'https://i.pravatar.cc/150?img=4' },
      question: 'What are the requirements for opening a new location?',
      time: '5min ago',
    },
    {
      id: 2,
      user: { name: 'Karry Oldman', role: '@karry', image: 'https://i.pravatar.cc/150?img=5' },
      question: 'When do we receive the next payment?',
      time: '4hr ago',
    },
  ];

  return (
    <Card>
      <CardHeader className="pb-2 flex flex-row items-center justify-between">
        <CardTitle className="text-base font-medium text-gray-700">Pending Questions</CardTitle>
        <div className="flex items-center justify-center h-5 w-5 rounded-full bg-blue-500 text-white text-xs font-medium">
          {questions.length}
        </div>
      </CardHeader>
      <CardContent className="pt-2 px-0">
        <div className="space-y-1">
          {questions.map((item) => (
            <div key={item.id} className="flex items-start gap-3 px-6 py-3 hover:bg-gray-50 transition-colors">
              <Avatar className="h-8 w-8 mt-1">
                <AvatarImage src={item.user.image} />
                <AvatarFallback>
                  <User size={16} />
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <div className="text-sm font-medium text-gray-800">{item.user.name}</div>
                  <div className="text-xs text-gray-500">{item.user.role}</div>
                </div>
                <div className="mt-1 text-sm text-gray-600">{item.question}</div>
                <div className="mt-1 text-xs text-gray-400">{item.time}</div>
              </div>
            </div>
          ))}
        </div>

        <div 
          className="mt-4 mx-6 p-4 border-2 border-dashed border-blue-200 rounded-lg bg-blue-50 flex items-center justify-center cursor-pointer hover:bg-blue-100 transition-colors"
          onClick={onChatOpen}
        >
          <Link2 className="h-5 w-5 text-blue-500 mr-2" />
          <span className="text-sm font-medium text-blue-600">Welcome to the AI Chat Assistant</span>
        </div>
      </CardContent>
    </Card>
  );
}