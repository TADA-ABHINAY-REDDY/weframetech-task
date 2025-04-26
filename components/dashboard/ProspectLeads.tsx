'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { User } from 'lucide-react';

export default function ProspectLeads() {
  const leads = [
    { id: 1, name: 'Wade Warren', stage: 'Initial Inquiry', image: 'https://i.pravatar.cc/150?img=1' },
    { id: 2, name: 'Ava Wright', stage: 'Initial Inquiry', image: 'https://i.pravatar.cc/150?img=2' },
    { id: 3, name: 'Cody Fisher', stage: 'Initial Inquiry', image: 'https://i.pravatar.cc/150?img=3' },
  ];

  return (
    <Card className="h-full">
      <CardHeader className="pb-2">
        <CardTitle className="text-base font-medium text-gray-700">Prospect Leads</CardTitle>
      </CardHeader>
      <CardContent className="pt-2 px-0">
        <div className="space-y-1">
          {leads.map((lead) => (
            <div key={lead.id} className="flex items-center px-6 py-3 hover:bg-gray-50 transition-colors">
              <Avatar className="h-8 w-8 mr-3">
                <AvatarImage src={lead.image} />
                <AvatarFallback>
                  <User size={16} />
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="text-sm font-medium text-gray-800">{lead.name}</div>
              </div>
              <div className="text-xs text-gray-500">Stage: {lead.stage}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}