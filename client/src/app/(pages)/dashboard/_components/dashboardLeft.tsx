import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import { 
  BarChart3, 
  
 
  Calendar, 

  PieChart, 



} from "lucide-react";


const DashboardLeft = () => {

  return (
    <div className="w-full md:w-1/4 p-5 border-r border-[#AFAFAF]/20 overflow-y-auto h-full bg-gray-50/50">
      
     


  
      <Card className="mb-6 shadow-sm">
       
        <CardContent className="space-y-3 p-3">
         
            <>
              <Button variant="default" className="w-full justify-start text-left font-normal">
                <BarChart3 className="h-4 w-4 mr-2" />
                Dashboard Overview
              </Button>
              <Button variant="outline" className="w-full justify-start text-left font-normal">
                <PieChart className="h-4 w-4 mr-2" />
                Performance Analytics
              </Button>
              <Button variant="outline" className="w-full justify-start text-left font-normal">
                <Calendar className="h-4 w-4 mr-2" />
                Schedule View
              </Button>
            
             
            </>
       
        </CardContent>
      </Card>

    
     
    </div>
  );
};

export default DashboardLeft;