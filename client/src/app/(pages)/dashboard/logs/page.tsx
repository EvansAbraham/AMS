'use client';
import React from 'react';
import { logs } from '../_components/Data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import DashboardLeft from "../_components/dashboardLeft";

const LogsPage = () => {
  const [expandedLogs, setExpandedLogs] = React.useState<{ [key: string]: boolean }>({});

  const toggleMessage = (index: number) => {
    setExpandedLogs(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen bg-gray-50 overflow-hidden">
      <div className="hidden lg:block lg:w-1/4 h-full">
        <DashboardLeft isMobile={false} setIsMobile={() => {}} />
      </div>
      
      <div className="flex-1 overflow-auto">
        <Card className="m-6 shadow-sm">
          <CardHeader className="pb-3">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <CardTitle className="text-[#071487] text-lg font-semibold">Activity Logs</CardTitle>
                <CardDescription>Complete system activities and logs</CardDescription>
              </div>
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
                    <th className="text-left py-3 px-2 font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {logs.map((log, index) => (
                    <React.Fragment key={index}>
                      <tr className="border-b border-gray-100 hover:bg-gray-50">
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
                        <td className="py-3 px-2 text-sm">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => toggleMessage(index)}
                          >
                            {expandedLogs[index] ? "Hide" : "Show"}
                          </Button>
                        </td>
                      </tr>
                      {expandedLogs[index] && (
                        <tr className="bg-gray-50">
                          <td colSpan={6} className="py-3 px-6 text-sm">
                            <div className="font-medium">Message:</div>
                            <div className="mt-1 text-gray-600">{log.message}</div>
                          </td>
                        </tr>
                      )}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LogsPage;