"use client";
import React, { useEffect } from "react";
import DashboardLeft from "./_components/dashboardLeft";
import DashboardRight from "./_components/dashboardRight";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

const DashBoard = () => {
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    // If not authenticated, redirect to auth page
    if (!isAuthenticated) {
      router.push("/auth");
    }
  }, [isAuthenticated, router, status]);

  // Show loading state or protected content
  // Add a loading state if needed, or remove this block if unnecessary

  if (!isAuthenticated) {
    return null; // Will redirect via useEffect
  }

  return (
    <div className="flex pt-16 md:pt-0">
      <DashboardLeft />
      <DashboardRight />
    </div>
  );
};

export default DashBoard;
