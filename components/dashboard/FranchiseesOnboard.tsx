'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { User, ChevronRight } from 'lucide-react';

interface FranchiseesOnboardProps {
  count: number;
  growth: number;
}

export default function FranchiseesOnboard({ count, growth }: FranchiseesOnboardProps) {
  const franchisees = [
    { id: 1, name: 'User 1', image: null },
    { id: 2, name: 'User 2', image: null },
    { id: 3, name: 'User 3', image: null },
    { id: 4, name: 'User 4', image: null },
    { id: 5, name: 'User 5', image: null },
  ];

  return (
    <Card className="h-full">
      <CardHeader className="pb-2">
        <CardTitle className="text-base font-medium text-gray-700">Total Franchisees Onboard</CardTitle>
      </CardHeader>
      <CardContent className="pt-2">
        <div className="flex items-center justify-between">
          <span className="text-4xl font-semibold text-gray-800">{count}</span>
          <span className="text-xs font-medium px-2 py-1 bg-green-100 text-green-700 rounded">
            +{growth}%
          </span>
        </div>
        
        <div className="mt-4 flex -space-x-2 overflow-hidden">
          {franchisees.slice(0, 4).map((franchisee) => (
            <Avatar key={franchisee.id} className="inline-block h-8 w-8 rounded-full ring-2 ring-white">
              <AvatarImage src={franchisee.image || ''} alt={franchisee.name} />
              <AvatarFallback className="bg-gray-200 text-gray-600">
                <User size={14} />
              </AvatarFallback>
            </Avatar>
          ))}
          <div className="flex items-center justify-center h-8 w-8 rounded-full ring-2 ring-white bg-gray-200 text-gray-600 text-xs">
            +{franchisees.length - 4}
          </div>
        </div>

        <div className="mt-6 space-y-4">
          <div className="flex items-center justify-between text-sm">
            <span className="text-blue-500 font-medium">Stage 1 (Initial Inquiry)</span>
            <span className="font-medium">02</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-blue-500 font-medium">Stage 2 (Document Submission)</span>
            <span className="font-medium">07</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-blue-500 font-medium">Stage 3 (Training)</span>
            <span className="font-medium">05</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}