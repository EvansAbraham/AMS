import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRight, ArrowDownRight, Users, FileText, CheckCircle, Clock } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string | number;
  change: number;
  icon: React.ReactNode;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, change, icon }) => {
  const isPositive = change >= 0;
  
  return (
    <Card className="shadow-sm">
      <CardContent className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm text-muted-foreground">{title}</p>
            <h3 className="text-2xl font-bold mt-1">{value}</h3>
            <div className="flex items-center mt-1">
              <span className={`text-xs flex items-center ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
                {isPositive ? <ArrowUpRight className="h-3 w-3 mr-1" /> : <ArrowDownRight className="h-3 w-3 mr-1" />}
                {Math.abs(change)}%
              </span>
              <span className="text-xs text-muted-foreground ml-1">vs last period</span>
            </div>
          </div>
          <div className="h-10 w-10 rounded-full bg-[#071487]/10 flex items-center justify-center text-[#071487]">
            {icon}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export const StatCards: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <StatCard 
        title="Total Users" 
        value="2,845" 
        change={12.5} 
        icon={<Users className="h-5 w-5" />} 
      />
      <StatCard 
        title="Documents" 
        value="482" 
        change={8.2} 
        icon={<FileText className="h-5 w-5" />} 
      />
      <StatCard 
        title="Completed Tasks" 
        value="1,429" 
        change={-3.8} 
        icon={<CheckCircle className="h-5 w-5" />} 
      />
      <StatCard 
        title="Pending Tasks" 
        value="258" 
        change={5.1} 
        icon={<Clock className="h-5 w-5" />} 
      />
    </div>
  );
};