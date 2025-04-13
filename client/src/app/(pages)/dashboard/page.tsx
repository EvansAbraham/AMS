"use client";
import React, { useEffect, useState } from "react";
import DashboardLeft from "./_components/dashboardLeft";
import DashboardRight from "./_components/dashboardRight";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { getServerSession } from 'next-auth';
import { options } from '@/app/api/auth/[...nextauth]/options';

const DashBoard = () => {
  const { isAuthenticated, loading } = useAuth();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("outline");

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      router.push("/auth");
    }
  }, [isAuthenticated, loading, router]);

  const checkSession = async () => {
    const session = await getServerSession(options);
    if (!session || session.user?.role !== 'admin') {
      return (
        <div>
          <h1>You do not have permission to view this page.</h1>
        </div>
      );
    }
    return null;
  };

  const sessionError = checkSession();

  return (
    <div className="flex flex-col lg:flex-row h-screen bg-gray-50 overflow-hidden">
      {sessionError ? (
        sessionError
      ) : (
        <>
          <div className="hidden lg:block lg:w-1/4 h-full">
            <DashboardLeft isMobile={false} setIsMobile={() => {}} />
          </div>
          <DashboardRight activeTab={activeTab} onTabChange={setActiveTab} />
        </>
      )}
    </div>
  );
};

export default DashBoard;
