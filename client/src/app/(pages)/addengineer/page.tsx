import React from 'react';
import { getServerSession } from 'next-auth';
import { options } from '@/app/api/auth/[...nextauth]';

export default async function AddEngineer() {
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
      <h1>Add Engineer Page</h1>
      {/* Add your form or content here */}
    </div>
  );
}
