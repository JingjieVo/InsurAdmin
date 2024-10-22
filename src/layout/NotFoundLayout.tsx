import { Outlet } from 'react-router-dom';

export default function NotFoundLayout() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Outlet />
    </div>
  );
}
