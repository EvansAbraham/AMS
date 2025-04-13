import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  RadialBarChart,
  RadialBar,
  ScatterChart,
  Scatter,
  ZAxis
} from 'recharts';
import CustomTooltip from '../charts/CustomTooltip';

interface MonthlyCompletionData {
  date: string;
  month: string;
  completed: number;
  notCompleted: number;
}

interface TaskBreakdownData {
  status: string;
  count: number;
}

interface TaskStatusData {
  month: string;
  completed: number;
  notCompleted: number;
  hold: number;
}

interface TopTaskData {
  name: string;
  value: number;
  fill?: string;
}

interface PerformanceTabProps {
  monthlyCompletionData: MonthlyCompletionData[];
  taskBreakdownData: TaskBreakdownData[];
  taskStatusData: TaskStatusData[];
  topTasksData: TopTaskData[];
  COLORS: string[];
}

const PerformanceTab: React.FC<PerformanceTabProps> = ({ 
  monthlyCompletionData, 
  taskBreakdownData, 
  taskStatusData, 
  topTasksData,
  COLORS 
}) => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
     
        <Card className="shadow-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-[#071487] text-lg font-semibold">Monthly Completion Rate</CardTitle>
            <CardDescription>Task completion percentage by month</CardDescription>
          </CardHeader>
          <CardContent className="pt-2">
            <div className="h-[320px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={monthlyCompletionData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <defs>
                    <linearGradient id="completedGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#071487" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#071487" stopOpacity={0.1}/>
                    </linearGradient>
                    <linearGradient id="notCompletedGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#AFAFAF" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#AFAFAF" stopOpacity={0.1}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f5f5f5" />
                  <XAxis dataKey="month" />
                  <YAxis tickFormatter={(value) => `${value}%`} />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="completed" 
                    name="Completed" 
                    stroke="#071487" 
                    strokeWidth={2}
                    dot={{ r: 4, fill: "#071487", strokeWidth: 1 }}
                    activeDot={{ r: 6, fill: "#071487", stroke: "#fff", strokeWidth: 2 }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="notCompleted" 
                    name="Not Completed" 
                    stroke="#AFAFAF" 
                    strokeWidth={2}
                    dot={{ r: 4, fill: "#AFAFAF", strokeWidth: 1 }}
                    activeDot={{ r: 6, fill: "#AFAFAF", stroke: "#fff", strokeWidth: 2 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      
        <Card className="shadow-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-[#071487] text-lg font-semibold">Task Breakdown</CardTitle>
            <CardDescription>Distribution of tasks by status</CardDescription>
          </CardHeader>
          <CardContent className="pt-2">
            <div className="h-[320px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={taskBreakdownData}
                    cx="50%"
                    cy="50%"
                    labelLine={true}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="count"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    paddingAngle={2}
                  >
                    {taskBreakdownData.map((entry, index) => (
                      <Cell 
                        key={`cell-${index}`} 
                        fill={COLORS[index % COLORS.length]} 
                        stroke="#fff"
                        strokeWidth={2}
                      />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
     
      <Card className="shadow-sm mt-6">
        <CardHeader className="pb-3">
          <CardTitle className="text-[#071487] text-lg font-semibold">Task Status by Month</CardTitle>
          <CardDescription>Detailed breakdown of task statuses over time</CardDescription>
        </CardHeader>
        <CardContent className="pt-2">
          <div className="h-[320px]">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart outerRadius={130} width={730} height={300} data={taskStatusData}>
                <PolarGrid stroke="#e5e5e5" />
                <PolarAngleAxis dataKey="month" tick={{ fill: '#666', fontSize: 12 }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} />
                <Radar name="Completed" dataKey="completed" stroke="#071487" fill="#071487" fillOpacity={0.6} />
                <Radar name="Not Completed" dataKey="notCompleted" stroke="#AFAFAF" fill="#AFAFAF" fillOpacity={0.6} />
                <Radar name="On Hold" dataKey="hold" stroke="#717171" fill="#717171" fillOpacity={0.6} />
                <Legend />
                <Tooltip content={<CustomTooltip />} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card className="shadow-sm mt-6">
        <CardHeader className="pb-3">
          <CardTitle className="text-[#071487] text-lg font-semibold">Top Task Types</CardTitle>
          <CardDescription>Most common task types by volume</CardDescription>
        </CardHeader>
        <CardContent className="pt-2">
          <div className="h-[320px]">
            <ResponsiveContainer width="100%" height="100%">
           
              
              <RadialBarChart 
                cx="50%" 
                cy="50%" 
                innerRadius="20%" 
                outerRadius="80%" 
                barSize={20} 
                data={topTasksData.slice(0, 5).map((item, index) => ({
                  ...item,
                  fill: COLORS[index % COLORS.length]
                }))}
                startAngle={180} 
                endAngle={0}
              >
                <RadialBar
                  background
                 
                  dataKey="value"
                  cornerRadius={10}
                  label={{
                    position: 'insideStart',
                    fill: '#fff',
                    fontWeight: 'bold'
                  }}
                />
                <Legend 
                  iconSize={10} 
                  layout="vertical" 
                  verticalAlign="middle" 
                  align="right"
                  wrapperStyle={{ paddingLeft: 20 }}
                />
                <Tooltip content={<CustomTooltip />} />
              </RadialBarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
      
      {/* Task Completion Analysis ScatterChart */}
      <Card className="shadow-sm mt-6">
        <CardHeader className="pb-3">
          <CardTitle className="text-[#071487] text-lg font-semibold">Task Completion Analysis</CardTitle>
          <CardDescription>Correlation between completion rate and time</CardDescription>
        </CardHeader>
        <CardContent className="pt-2">
          <div className="h-[320px]">
            <ResponsiveContainer width="100%" height="100%">
              <ScatterChart
                margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#f5f5f5" />
                <XAxis 
                  dataKey="completed" 
                  type="number" 
                  name="Completed" 
                  unit="%" 
                  domain={[40, 90]} 
                />
                <YAxis 
                  dataKey="notCompleted" 
                  type="number" 
                  name="Not Completed" 
                  unit="%" 
                  domain={[10, 60]} 
                />
                <ZAxis 
                  dataKey="hold" 
                  range={[50, 400]} 
                  name="On Hold" 
                  unit="%" 
                />
                <Tooltip cursor={{ strokeDasharray: '3 3' }} content={<CustomTooltip />} />
                <Legend />
                <Scatter 
                  name="Task Status" 
                  data={taskStatusData} 
                  fill="#071487" 
                  shape="circle"
                />
              </ScatterChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default PerformanceTab;