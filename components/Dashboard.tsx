'use client';

import { useState } from 'react';
import Sidebar from '@/components/layout/Sidebar';
import Header from '@/components/layout/Header';
import AccountProgress from '@/components/dashboard/AccountProgress';
import FranchiseesOnboard from '@/components/dashboard/FranchiseesOnboard';
import KeyInsights from '@/components/dashboard/KeyInsights';
import StepsTracker from '@/components/dashboard/StepsTracker';
import FinancialWellbeing from '@/components/dashboard/FinancialWellbeing';
import ProspectLeads from '@/components/dashboard/ProspectLeads';
import PendingQuestions from '@/components/dashboard/PendingQuestions';
import ChatAssistant from '@/components/dashboard/ChatAssistant';

export default function Dashboard() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="flex h-screen bg-[#f8f9fa]">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto py-6 px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-1">
              <AccountProgress progress={85} />
            </div>
            <div className="lg:col-span-1">
              <FranchiseesOnboard count={14} growth={2.1} />
            </div>
            <div className="lg:col-span-1">
              <KeyInsights growthPercentage={10} />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
            <div className="lg:col-span-1">
              <StepsTracker />
            </div>
            <div className="lg:col-span-1">
              <FinancialWellbeing target={500000} current={450000} franchisees={20} growth={2.1} />
            </div>
            <div className="lg:col-span-1">
              <ProspectLeads />
            </div>
          </div>

          <div className="mt-6">
            <PendingQuestions onChatOpen={() => setIsChatOpen(true)} />
          </div>
        </main>
      </div>
      {isChatOpen && <ChatAssistant onClose={() => setIsChatOpen(false)} />}
    </div>
  );
}