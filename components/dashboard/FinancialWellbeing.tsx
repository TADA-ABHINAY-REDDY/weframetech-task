'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

interface FinancialWellbeingProps {
  target: number;
  current: number;
  franchisees: number;
  growth: number;
}

export default function FinancialWellbeing({ target, current, franchisees, growth }: FinancialWellbeingProps) {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <Card className="h-full">
      <CardHeader className="pb-2">
        <CardTitle className="text-base font-medium text-gray-700">Financial Wellbeing</CardTitle>
      </CardHeader>
      <CardContent className="pt-2">
        <div className="flex items-center justify-between">
          <span className="text-4xl font-semibold text-gray-800">{franchisees}</span>
          <span className="text-xs font-medium px-2 py-1 bg-green-100 text-green-700 rounded">
            +{growth}%
          </span>
        </div>
        <div className="text-sm text-gray-500 mt-1">Total Franchisees</div>
        
        <div className="mt-8 grid grid-cols-2 gap-4">
          <div className="flex flex-col">
            <span className="text-sm text-gray-500 mb-1">Target</span>
            <span className="text-xl font-semibold text-gray-800">{formatCurrency(target)}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-gray-500 mb-1">Current</span>
            <span className="text-xl font-semibold text-gray-800">{formatCurrency(current)}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}