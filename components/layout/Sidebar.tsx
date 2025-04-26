'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  Home, 
  CheckSquare, 
  Upload, 
  Users, 
  Server, 
  Target, 
  DollarSign, 
  Settings, 
  HelpCircle
} from 'lucide-react';
import { cn } from '@/lib/utils';

type NavItem = {
  name: string;
  href: string;
  icon: React.ReactNode;
  active?: boolean;
  count?: number;
  highlight?: boolean;
};

export default function Sidebar() {
  const [navItems, setNavItems] = useState<NavItem[]>([
    { 
      name: 'Home', 
      href: '/', 
      icon: <Home size={18} />, 
      active: true 
    },
    { 
      name: 'Stages & Checklist', 
      href: '/stages', 
      icon: <CheckSquare size={18} /> 
    },
    { 
      name: 'Upload Docs', 
      href: '/upload', 
      icon: <Upload size={18} /> 
    },
    { 
      name: 'Preferred Vendors', 
      href: '/vendors', 
      icon: <Users size={18} /> 
    },
    { 
      name: 'Tech Stack', 
      href: '/tech', 
      icon: <Server size={18} /> 
    },
    { 
      name: 'Targets', 
      href: '/targets', 
      icon: <Target size={18} /> 
    },
    { 
      name: 'Zee Sales Targets', 
      href: '/sales-targets', 
      icon: <DollarSign size={18} /> 
    },
    { 
      name: 'MKI Settings', 
      href: '/settings', 
      icon: <Settings size={18} /> 
    },
    { 
      name: 'Finding Questions', 
      href: '/questions', 
      icon: <HelpCircle size={18} />,
      count: 3,
      highlight: true
    },
  ]);

  return (
    <div className="w-64 shrink-0 bg-gradient-to-b from-[#024059] to-[#025373] text-white flex flex-col border-r border-r-[#01283A]">
      <div className="py-6 px-4 border-b border-b-[#01283A]">
        <div className="h-6 bg-white rounded w-36"></div>
      </div>
      <nav className="flex-1 overflow-y-auto">
        <ul className="py-2">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link 
                href={item.href}
                className={cn(
                  "flex items-center px-4 py-3 text-sm group",
                  item.active ? "bg-[#01283A]" : "hover:bg-[#01283A]/50 transition-colors"
                )}
              >
                <div 
                  className={cn(
                    "w-1 h-full absolute left-0",
                    item.active ? "bg-[#4CC0F0]" : "bg-transparent"
                  )} 
                />
                <span className="w-6 h-6 flex items-center justify-center mr-3 text-[#4CC0F0]">
                  {item.icon}
                </span>
                <span className="flex-1">{item.name}</span>
                {item.count && (
                  <span className={cn(
                    "h-5 w-5 rounded-full flex items-center justify-center text-xs font-medium",
                    item.highlight ? "bg-[#4CC0F0] text-[#01283A]" : "bg-gray-600"
                  )}>
                    {item.count}
                  </span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}