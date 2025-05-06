
import React from "react";
import { cn } from "@/lib/utils";

interface TrainInfoProps {
  trainNumber: string;
  destination: string;
  status: string;
  isArrived?: boolean;
}

const TrainInfo = ({ trainNumber, destination, status, isArrived = false }: TrainInfoProps) => {
  return (
    <div className="flex items-center justify-between py-4 border-b border-dashed border-gray-300">
      <div className="flex items-center gap-4">
        <div className="bg-gray-200 rounded-lg w-16 h-16 flex items-center justify-center">
          <span className="text-2xl font-bold text-gray-800">{trainNumber}</span>
        </div>
        <span className="text-2xl text-gray-800">{destination}</span>
      </div>
      <div className={cn("text-xl font-medium", isArrived ? "text-blue-700" : "text-gray-800")}>
        {status}
        {isArrived && (
          <span className="ml-1 inline-block">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" stroke="currentColor" strokeWidth="2" fill="none" />
              <path d="M8 12l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        )}
      </div>
    </div>
  );
};

const ActionButton = ({ children, primary = false }: { children: React.ReactNode; primary?: boolean }) => {
  return (
    <button 
      className={cn(
        "flex-1 py-4 rounded-full flex items-center justify-center gap-2 text-xl font-medium",
        primary 
          ? "bg-blue-600 text-white hover:bg-blue-700" 
          : "bg-gray-200 text-blue-800 hover:bg-gray-300"
      )}
    >
      {children}
    </button>
  );
};

const MetroStation = () => {
  const userName = "Vaibhav";

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-600 p-4">
      <div className="w-full max-w-md bg-gray-100 rounded-3xl overflow-hidden shadow-xl">
        {/* Header */}
        <div className="relative pt-6 pb-3 px-6">
          <div className="flex items-center">
            <div className="w-4 h-4 rounded-full bg-red-500 mr-3"></div>
            <div>
              <p className="text-blue-900 text-xl">Hey {userName}, Welcome to</p>
              <h1 className="text-4xl font-bold text-gray-900">Indiranagar Metro Station</h1>
            </div>
          </div>
          <div className="absolute top-6 right-6">
            <img src="/lovable-uploads/metro-logo.svg" alt="Metro Logo" className="w-12 h-12" />
          </div>
          <div className="border-b border-gray-300 mt-4"></div>
        </div>
        
        {/* Train Information */}
        <div className="px-6 py-2">
          <TrainInfo 
            trainNumber="405" 
            destination="Mori Gate Terminal" 
            status="Arrived" 
            isArrived={true} 
          />
          <TrainInfo 
            trainNumber="402" 
            destination="Meenaa Bazar" 
            status="In 5 mins" 
          />
        </div>
        
        {/* Action Buttons */}
        <div className="p-6 flex gap-4">
          <ActionButton>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
            Navigate
          </ActionButton>
          <ActionButton primary>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="16" rx="2" />
              <line x1="12" y1="4" x2="12" y2="20" />
            </svg>
            Buy Tickets
          </ActionButton>
        </div>
      </div>
    </div>
  );
};

export default MetroStation;
