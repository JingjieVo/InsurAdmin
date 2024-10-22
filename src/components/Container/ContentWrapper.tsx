import React from 'react';

interface ContentWrapperProps {
    children: React.ReactNode
}


export default function ContentWrapper( {children } : ContentWrapperProps) {
  return (
    <div className="flex flex-col gap-5.5 p-6.5">
        {children}
    </div>
  );
}
