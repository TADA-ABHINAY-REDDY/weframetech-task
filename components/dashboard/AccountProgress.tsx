'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface AccountProgressProps {
  progress: number;
}

export default function AccountProgress({ progress }: AccountProgressProps) {
  // Calculate the circumference and stroke-dashoffset for the circle
  const radius = 60;
  const circumference = 2 * Math.PI * radius;
  const dashoffset = circumference * (1 - progress / 100);

  return (
    <Card className="h-full">
      <CardHeader className="pb-2">
        <CardTitle className="text-base font-medium text-gray-700">Account Progress</CardTitle>
      </CardHeader>
      <CardContent className="flex justify-center pt-2">
        <div className="relative flex items-center justify-center">
          <svg width="160" height="160" viewBox="0 0 160 160">
            {/* Background circle */}
            <circle
              cx="80"
              cy="80"
              r={radius}
              fill="none"
              stroke="#E6E6E6"
              strokeWidth="12"
            />
            {/* Progress circle */}
            <circle
              cx="80"
              cy="80"
              r={radius}
              fill="none"
              stroke="#29ABE2"
              strokeWidth="12"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={dashoffset}
              transform="rotate(-90 80 80)"
            />
          </svg>
          <div className="absolute flex flex-col items-center justify-center">
            <span className="text-4xl font-semibold text-gray-800">{progress}%</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}