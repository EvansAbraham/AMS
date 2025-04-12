import React from 'react';
import { getServerSession } from 'next-auth';
import { options } from '@/app/api/auth/[...nextauth]/options';

export default async function UploadData() {
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
      <h1>Upload Data</h1>
    </div>
  );
}
