import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock } from 'lucide-react';

interface LogData {
  test: string;
  location: string;
  status: string;
  time: string;
  name: string;
}

interface ActivityLogsTableProps {
  logs: LogData[];
}

const ActivityLogsTable: React.FC<ActivityLogsTableProps> = ({ logs }) => {
  return (
    <Card className="mb-8 shadow-sm">
      <CardHeader className="pb-3">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <CardTitle className="text-[#071487] text-lg font-semibold">Recent Activity</CardTitle>
            <CardDescription>Latest system activities and logs</CardDescription>
          </div>
          <Button variant="outline" size="sm" className="text-xs">
            <Clock className="h-3 w-3 mr-2" />
            View All Logs
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-2 font-medium">Test</th>
                <th className="text-left py-3 px-2 font-medium hidden md:table-cell">Location</th>
                <th className="text-left py-3 px-2 font-medium">Status</th>
                <th className="text-left py-3 px-2 font-medium hidden md:table-cell">Time</th>
                <th className="text-left py-3 px-2 font-medium">User</th>
              </tr>
            </thead>
            <tbody>
              {logs.slice(0, 3).map((log, index) => (
                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-2 text-sm">{log.test}</td>
                  <td className="py-3 px-2 text-sm hidden md:table-cell">{log.location}</td>
                  <td className="py-3 px-2 text-sm">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      log.status === "Completed" ? "bg-green-100 text-green-800" :
                      log.status === "In Progress" ? "bg-blue-100 text-blue-800" :
                      log.status === "Pending" ? "bg-yellow-100 text-yellow-800" :
                      "bg-gray-100 text-gray-800"
                    }`}>
                      {log.status}
                    </span>
                  </td>
                  <td className="py-3 px-2 text-sm hidden md:table-cell">{new Date(log.time).toLocaleString()}</td>
                  <td className="py-3 px-2 text-sm">{log.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
};

export default ActivityLogsTable;