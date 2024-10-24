import React from 'react';

interface ButtonLinkProps {
  title: string;
  href: string;
}

export default function ButtonLink(props : ButtonLinkProps) {
  return (
    <a href={props.href}>
      <div className="inline-flex items-center justify-center rounded-md bg-primary py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10">
        {props.title}
      </div>
    </a>
  );
}
