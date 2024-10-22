import { NavLink, useLocation } from 'react-router-dom';

interface SideBarNoChildTabProps {
  href: string;
  tabTitle: string;
  icon: any;
}

export default function SidebarNoChildTab(props: SideBarNoChildTabProps) {
  const location = useLocation();
  const { pathname } = location;
  return (
    <li>
      <NavLink
        to={props.href}
        className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
          pathname.includes(props.href) && 'bg-graydark dark:bg-meta-4'
        }`}
      >
        <img height={20} width={20} src={props.icon}/>
        {props.tabTitle}
      </NavLink>
    </li>
  );
}
