import React from 'react';
import { getServerSession } from 'next-auth';
import { options } from '@/app/api/auth/[...nextauth]/options';
import DashboardLeft from './_components/dashboardLeft';
import DashboardRight from './_components/dashboardRight';

export default async function Dashboard() {
  const session = await getServerSession(options);

  if (!session || session.user?.role !== 'admin') {
    return (
      <div>
        <h1>You do not have permission to view this page.</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <DashboardLeft/><br/> <DashboardRight/>
    </div>
  );
}
