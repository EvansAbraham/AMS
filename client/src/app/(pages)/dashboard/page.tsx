"use client";
import React, { useEffect } from "react";
import DashboardLeft from "./_components/dashboardLeft";
import DashboardRight from "./_components/dashboardRight";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

const DashBoard = () => {
  const { isAuthenticated, status } = useAuth();
  const router = useRouter();

  useEffect(() => {
    // If not authenticated, redirect to auth page
    if (status !== "loading" && !isAuthenticated) {
      router.push("/auth");
    }
  }, [isAuthenticated, router, status]);

  // Show loading state or protected content
  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return null; // Will redirect via useEffect
  }

  return (
    <div className="flex">
      <DashboardLeft />
      <DashboardRight />
    </div>
  );
};

export default DashBoard;
