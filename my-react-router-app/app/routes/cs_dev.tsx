import { Outlet } from "react-router";

export default function DevHome() {
  return (
    <div className="purple-dark">
      {/* will either be home.tsx or settings.tsx */}
      <Outlet />
    </div>
  );
}