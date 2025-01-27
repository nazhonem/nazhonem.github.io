import { Outlet } from "react-router";

export default function ArtHome() {
  return (
    <div>
      {/* will either be home.tsx or settings.tsx */}
      <Outlet />
    </div>
  );
}