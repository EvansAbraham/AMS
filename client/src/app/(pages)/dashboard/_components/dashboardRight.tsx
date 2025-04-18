"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  monthlyCompletionData,
  taskStatusData,
  topTasksData,
  taskBreakdownData,
  visitorData,
  documentData,
  keyPersonnelData,
  focusDocumentsData,
  logs,
} from "./Data"
import { StatCards } from "./StatCards"
import VisitorChart from "./charts/VisitorChart"
import ActivityLogsTable from "./tables/ActivityLogsTable"
import DocumentStatusTable from "./tables/DocumentStatusTable"
import PerformanceTab from "./tabs/PerformanceTab"
import PersonnelTab from "./tabs/PersonnelTab"
import DocumentsTab from "./tabs/DocumentsTab"

interface TabItem {
  value: string
  label: string
  badge?: string
}

interface DashboardRightProps {
  activeTab?: string;
  onTabChange?: (tab: string) => void;
}

const DashboardRight: React.FC<DashboardRightProps> = ({ activeTab: propActiveTab = "outline" }) => {
  const COLORS = ["#071487", "#AFAFAF", "#717171", "#09090B", "#4285f4", "#34A853", "#EA4335", "#FBBC05"]
  const [timeRange, setTimeRange] = useState<string>("3months")
  const [activeTab, setActiveTab] = useState<string>(propActiveTab)
  const [filteredVisitorData, setFilteredVisitorData] = useState(visitorData)

  useEffect(() => {
    const now = new Date("2025-04-01") // Using a fixed date for demo purposes
    let filtered

    if (timeRange === "7days") {
      const sevenDaysAgo = new Date(now)
      sevenDaysAgo.setDate(now.getDate() - 7)
      filtered = visitorData.filter((item) => new Date(item.date) >= sevenDaysAgo)
    } else if (timeRange === "30days") {
      const thirtyDaysAgo = new Date(now)
      thirtyDaysAgo.setDate(now.getDate() - 30)
      filtered = visitorData.filter((item) => new Date(item.date) >= thirtyDaysAgo)
    } else {
      filtered = visitorData
    }

    setFilteredVisitorData(filtered)
  }, [timeRange])

  const tabItems: TabItem[] = [
    { value: "outline", label: "Outline" },
    { value: "performance", label: "Past Performance", badge: "3" },
    { value: "personnel", label: "Key Personnel", badge: "2" },
    { value: "documents", label: "Focus Documents" },
  ]


  return (
    <div className="flex-1 w-full p-3 md:p-6 overflow-y-auto min-h-screen md:h-full bg-gray-50/30">
      {/* Stat Cards */}
      <StatCards />

      {/* Visitor Chart */}
      <div className="mt-4 md:mt-6">
        <VisitorChart 
          timeRange={timeRange} 
          setTimeRange={setTimeRange} 
          filteredVisitorData={filteredVisitorData} 
        />
      </div>

      {/* Recent Activity Logs */}
      <div className="mt-4 md:mt-6">
        <ActivityLogsTable logs={logs} />
      </div>

      {/* Tabs Section */}
      <div className="mt-4 md:mt-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="mb-3 md:mb-6 flex flex-wrap gap-1 md:gap-2 overflow-x-auto">
            {tabItems.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="px-2 md:px-4 py-1 md:py-2 text-xs md:text-sm whitespace-nowrap"
              >
                {tab.label}
                {tab.badge && (
                  <span className="ml-1 rounded-full bg-[#071487] px-1 md:px-1.5 py-0.5 text-[10px] md:text-xs text-white">
                    {tab.badge}
                  </span>
                )}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="outline">
            <DocumentStatusTable documentData={documentData} />
          </TabsContent>

          <TabsContent value="performance">
            <PerformanceTab
              monthlyCompletionData={monthlyCompletionData}
              taskBreakdownData={taskBreakdownData}
              taskStatusData={taskStatusData}
              topTasksData={topTasksData}
              COLORS={COLORS}
            />
          </TabsContent>

          <TabsContent value="personnel">
            <PersonnelTab keyPersonnelData={keyPersonnelData} COLORS={COLORS} />
          </TabsContent>

          <TabsContent value="documents">
            <DocumentsTab focusDocumentsData={focusDocumentsData} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

export default DashboardRight
