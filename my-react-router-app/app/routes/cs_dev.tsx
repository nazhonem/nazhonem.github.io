import { Outlet } from "react-router";

export default function DevHome() {
  return (
    <div>
      <h1>Dev Home</h1>
      {/* will either be home.tsx or settings.tsx */}
      <Outlet />
    </div>
  );
}