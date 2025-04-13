import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BarChart3, Calendar, PieChart } from 'lucide-react';

interface DashboardLeftProps {
  isMobile?: boolean;
  setIsMobile?: (value: boolean) => void;
}

const DashboardLeft: React.FC<DashboardLeftProps> = () => {
  return (
    <div className="w-full h-full p-3 md:p-5 border-b md:border-r border-[#AFAFAF]/20 bg-gray-50/50">
      <div className="mb-4 text-lg font-semibold">
        Dashboard Menu
      </div>
      <Card className="mb-4 md:mb-6 shadow-sm">
        <CardContent className="space-y-2 md:space-y-3 p-2 md:p-3">
          <Button variant="default" className="w-full justify-start text-left font-normal text-xs md:text-sm">
            <BarChart3 className="h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-2" />
            Dashboard Overview
          </Button>
          <Button variant="outline" className="w-full justify-start text-left font-normal text-xs md:text-sm">
            <PieChart className="h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-2" />
            Performance Analytics
          </Button>
          <Button variant="outline" className="w-full justify-start text-left font-normal text-xs md:text-sm">
            <Calendar className="h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-2" />
            Schedule View
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardLeft;
