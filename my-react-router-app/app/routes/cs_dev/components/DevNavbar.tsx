/* Navbar for Developer side of website.
 * Displays Lettermark (home), toggle site, home, work, about, and contact.
 */

import {
  Navbar, 
  NavbarBrand, 
  NavbarContent, 
  NavbarItem, 
  Link,
  // NavbarMenuToggle,
  // NavbarMenu,
  // NavbarMenuItem
} from "@heroui/react";
import {Divider} from "@heroui/divider";

export default function DevNavbar() {
    return (
      <Navbar shouldHideOnScroll className="bg-transparent">
      <NavbarBrand>
        <p className="text-white font-josefin">NM</p>
      </NavbarBrand>
  
      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        <NavbarItem>
          <Link color="foreground" href="#" aria-current="page">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem><p className="text-white">•</p></NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/cs_dev/work">
            Work
          </Link>
        </NavbarItem>
        <NavbarItem><p className="text-white">•</p></NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/cs_dev/contact">
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
    );
  }