import { useSession } from 'next-auth/react';
import React from 'react';

export default function UploadData() {
  const { data: session } = useSession();



  if (!session || session.user?.role !== "admin") {
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
