'use client';

import { useState } from 'react';
import { X, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface ChatAssistantProps {
  onClose: () => void;
}

export default function ChatAssistant({ onClose }: ChatAssistantProps) {
  const [message, setMessage] = useState('');

  return (
    <div className="fixed bottom-6 right-6 bg-white rounded-lg shadow-xl w-80 overflow-hidden flex flex-col border border-gray-200 z-50">
      <div className="bg-blue-500 text-white p-4 flex justify-between items-center">
        <h3 className="font-medium">AI Chat Assistant</h3>
        <Button variant="ghost" size="icon" className="text-white hover:bg-blue-600" onClick={onClose}>
          <X className="h-4 w-4" />
        </Button>
      </div>
      <div className="flex-1 p-4 min-h-[200px] max-h-[300px] overflow-y-auto">
        <div className="flex flex-col space-y-2">
          <div className="bg-blue-100 text-blue-800 p-3 rounded-lg rounded-tl-none max-w-[80%] self-start">
            How can I help you today?
          </div>
        </div>
      </div>
      <div className="p-3 border-t border-gray-200">
        <div className="flex gap-2">
          <Input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Ask your question here..."
            className="flex-1"
          />
          <Button size="icon" className="bg-blue-500 text-white hover:bg-blue-600">
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}