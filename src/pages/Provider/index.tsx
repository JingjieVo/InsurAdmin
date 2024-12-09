import React from 'react';
import ProviderTable from '@/components/ProviderTable';

export default function ProvidersPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <ProviderTable />
        </div>
      </main>
    </div>
  );
}

