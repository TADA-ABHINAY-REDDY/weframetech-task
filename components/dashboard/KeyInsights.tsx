'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowUpRight, Info } from 'lucide-react';

interface KeyInsightsProps {
  growthPercentage: number;
}

export default function KeyInsights({ growthPercentage }: KeyInsightsProps) {
  return (
    <Card className="h-full">
      <CardHeader className="pb-2 flex flex-row items-center justify-between">
        <CardTitle className="text-base font-medium text-gray-700">Key Insights & Feedback</CardTitle>
        <Info className="h-4 w-4 text-gray-400" />
      </CardHeader>
      <CardContent className="pt-2">
        <div className="bg-green-50 border border-green-100 rounded-lg p-4">
          <div className="flex flex-col items-center gap-2">
            <div className="text-5xl font-semibold text-gray-800 flex items-baseline">
              {growthPercentage}
              <span className="text-2xl">%</span>
            </div>
            <div className="text-sm text-green-700 font-medium">Sales Growth</div>
          </div>
        </div>
        
        <div className="mt-6">
          <div className="text-sm font-medium mb-2">Feedback</div>
          <div className="text-sm p-3 bg-gray-50 border border-gray-100 rounded-lg">
            <p className="text-gray-600">Franchisees are requesting more detailed training materials.</p>
          </div>
        </div>
        
        <button className="mt-4 w-full flex items-center justify-center py-2 text-sm font-medium text-blue-500 hover:text-blue-600 transition-colors">
          <span>Top Performer</span>
          <ArrowUpRight className="ml-1 h-4 w-4" />
        </button>
      </CardContent>
    </Card>
  );
}