import { Link } from 'react-router-dom';

interface ButtonLinkProps {
  title: string;
  href: string;
  actived?: boolean; // Optional, defaults to false
  color?: string; // Optional, custom background color
}

export default function ButtonLink({
  title,
  href,
  actived = false,
  color,
}: ButtonLinkProps) {
  // Set the background color based on the actived state and optional color prop
  const backgroundColor = actived ? 'bg-[#565E6D]' : 'bg-[#3C50E0]';

  return (
    <Link to={href}>
      <div
        className={`inline-flex items-center justify-center text-white rounded-md py-4 px-10 text-center font-medium lg:px-8 xl:px-10 ${backgroundColor}`}
      >
        {title}
      </div>
    </Link>
  );
}
