"use client";

import React, { useEffect, useState } from "react";
import DashboardLeft from "./_components/dashboardLeft";
import DashboardRight from "./_components/dashboardRight";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const DashBoard = () => {
  const { isAuthenticated, loading } = useAuth();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("outline");
  const [sessionError, setSessionError] = useState<string | null>(null);
  const { data: session, status } = useSession();

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      router.push("/auth");
    }
  }, [isAuthenticated, loading, router]);

  useEffect(() => {
    if (status === "authenticated" && session.user?.role !== "admin") {
      setSessionError("You do not have permission to view this page.");
    }
  }, [status, session]);

  if (status === "loading" || loading) {
    return <div>Loading...</div>;
  }

  if (sessionError) {
    return (
      <div>
        <h1>{sessionError}</h1>
      </div>
    );
  }

  return (
    <div className="flex flex-col lg:flex-row h-screen bg-gray-50 overflow-hidden">
      <div className="hidden lg:block lg:w-1/4 h-full">
        <DashboardLeft isMobile={false} setIsMobile={() => {}} />
      </div>
      <DashboardRight activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
};

export default DashBoard;
