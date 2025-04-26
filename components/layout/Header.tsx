'use client';

import { Bell, User } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

export default function Header() {
  return (
    <header className="h-16 border-b border-gray-200 bg-white flex items-center justify-end px-6 shrink-0">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="relative text-gray-500 hover:text-gray-700">
          <Bell size={20} />
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
        </Button>
        <div className="flex items-center gap-2">
          <Avatar className="h-8 w-8 border border-gray-200">
            <AvatarImage src="/avatar-placeholder.jpg" />
            <AvatarFallback>
              <User size={16} />
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}