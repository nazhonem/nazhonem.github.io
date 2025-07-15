import type { Route } from "./+types/home";
import { NavLink } from "react-router";
import {Listbox, ListboxItem} from "@heroui/react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Nazhone Morgan's Portfolio Website" },
    { name: "description", content: "Welcome to my portfolio site for both my art and web development skills!" },
  ];
}

export default function Home() {
  return(
    <div>
      <div className="relative md:mx-20 mt-16 p-6">
        <h2 className="text-2xl">Hello, I'm Nazhone</h2>
        <p>If you've found your way to this page, you might be interested in some of the things I do! I have two main businesses I run: Art and Web Development. My portfolios for both are linked below. Please check them out and be sure to contact me with any questions!</p>
      </div>
      <div className="w-full mx-auto mt-8 max-w-[260px] border-small px-1 py-2 rounded-small border-default-200 dark:border-default-100">
        <Listbox aria-label="Links">
          <ListboxItem key="Web Dev"><NavLink to="/cs_dev" end>Web Dev</NavLink></ListboxItem>
          <ListboxItem key="Art"><NavLink to="/art" end>Art</NavLink></ListboxItem>
        </Listbox>
      </div>
    </div>
  )
}
