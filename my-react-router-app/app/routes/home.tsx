import type { Route } from "./+types/home";
import { NavLink } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Nazhone Morgan's Portfolio Website" },
    { name: "description", content: "Welcome to my portfolio site for both my art and web development skills!" },
  ];
}

export default function Home() {
  return(
    <nav>
      <NavLink to="/" end>Home</NavLink>
      <NavLink to="/about" end>About</NavLink>
      <NavLink to="/cs_dev" end>Web Dev</NavLink>
      <NavLink to="/art" end>Art</NavLink>
    </nav>
  )
}
