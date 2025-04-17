"use client";

import React from 'react';
import { useSession } from 'next-auth/react';

export default function AddEngineer() {
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
      <h1>Add Engineer Page</h1>
      {/* Add your form or content here */}
    </div>
  );
}
