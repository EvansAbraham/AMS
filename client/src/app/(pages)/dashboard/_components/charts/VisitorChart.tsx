import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer,
  Area,
  Line,
  ComposedChart
} from 'recharts';
import CustomTooltip from './CustomTooltip';

interface VisitorData {
  date: string;
  visitors: number;
  newUsers: number;
}

interface VisitorChartProps {
  timeRange: string;
  setTimeRange: (range: string) => void;
  filteredVisitorData: VisitorData[];
}

const VisitorChart: React.FC<VisitorChartProps> = ({ 
  timeRange, 
  setTimeRange, 
  filteredVisitorData 
}) => {
  return (
    <Card className="mb-8 shadow-sm">
      <CardHeader className="pb-3">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <CardTitle className="text-[#071487] text-lg font-semibold">Total Visitors</CardTitle>
            <CardDescription>Total for the {timeRange === "3months" ? "last 3 months" : 
              timeRange === "30days" ? "last 30 days" : "last 7 days"}</CardDescription>
          </div>
          <div className="flex flex-wrap gap-2">
            {["3months", "30days", "7days"].map((range) => (
              <Button
                key={range}
                variant={timeRange === range ? "default" : "outline"}
                size="sm"
                onClick={() => setTimeRange(range)}
                className="text-xs"
              >
                {range === "3months" ? "Last 3 months" : 
                 range === "30days" ? "Last 30 days" : "Last 7 days"}
              </Button>
            ))}
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-2">
        <div className="h-[320px]">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart
              data={filteredVisitorData}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorVisitors" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#071487" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#071487" stopOpacity={0.1}/>
                </linearGradient>
                <linearGradient id="colorNewUsers" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#4285f4" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#4285f4" stopOpacity={0.1}/>
                </linearGradient>
              </defs>
              <XAxis dataKey="date" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" stroke="#f5f5f5" />
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              <Area 
                type="monotone" 
                dataKey="visitors" 
                name="Total Visitors"
                stroke="#071487" 
                fillOpacity={1} 
                fill="url(#colorVisitors)" 
              />
              <Line 
                type="monotone" 
                dataKey="newUsers" 
                name="New Users"
                stroke="#4285f4" 
                strokeWidth={2}
                dot={{ r: 4, strokeWidth: 1 }}
                activeDot={{ r: 6, stroke: '#4285f4', strokeWidth: 2 }}
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default VisitorChart;