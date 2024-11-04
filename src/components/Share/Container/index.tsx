import React from 'react';

interface ContainerProps {
    children: React.ReactNode
}

export default function Container({children} : ContainerProps) {
  return (
    <div className="rounded-lg border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      {children}
    </div>
  );
}
