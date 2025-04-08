"use client";
import React, { useEffect } from "react";
import DashboardLeft from "./_components/dashboardLeft";
import DashboardRight from "./_components/dashboardRight";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

const DashBoard = () => {
  const { isAuthenticated, loading } = useAuth(); // Make sure AuthContext provides `loading`
  const router = useRouter();

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      router.push("/auth");
    }
  }, [isAuthenticated, loading, router]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return <div>Redirecting to login...</div>;
  }

  return (
    <div className="flex pt-16 md:pt-0">
      <DashboardLeft />
      <DashboardRight />
    </div>
  );
};

export default DashBoard;
