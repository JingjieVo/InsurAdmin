import { NavLink } from 'react-router-dom';

interface SidebarTabChildProps {
  href: string;
  tabTitle: string;
}

export default function SidebarTabChild(props: SidebarTabChildProps) {
  return (
    <li>
      <NavLink
        to={`${props.href}`}
        className={({ isActive }) =>
          'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
          (isActive && '!text-white')
        }
      >
        {props.tabTitle}
      </NavLink>
    </li>
  );
}
