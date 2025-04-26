'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Circle } from 'lucide-react';

export default function StepsTracker() {
  const completedSteps = [
    { name: 'Profile Setup', completed: true },
    { name: 'Initial Training', completed: true },
    { name: 'Legal Documents', completed: true },
  ];

  const remainingSteps = [
    { name: 'Financial Integration', completed: false },
    { name: 'Final Review', completed: false },
  ];

  return (
    <Card className="h-full">
      <CardHeader className="pb-2">
        <CardTitle className="text-base font-medium text-gray-700">Steps Completed</CardTitle>
      </CardHeader>
      <CardContent className="pt-2">
        <div className="space-y-3">
          {completedSteps.map((step, index) => (
            <div key={index} className="flex items-center">
              <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
              <span className="text-sm font-medium text-gray-700">{step.name}</span>
            </div>
          ))}
        </div>
        
        <div className="mt-6">
          <CardTitle className="text-base font-medium text-gray-700 mb-3">Steps Remaining</CardTitle>
          <div className="space-y-3">
            {remainingSteps.map((step, index) => (
              <div key={index} className="flex items-center">
                <div className="h-5 w-5 rounded-full border-2 border-gray-300 mr-3 flex-shrink-0" />
                <span className="text-sm font-medium text-gray-500">{step.name}</span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}