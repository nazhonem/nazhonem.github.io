/* Navbar for Artist side of website.
 * Displays Lettermark (home), toggle site, home, work, about, and contact.
 */

import {
  Navbar, 
  NavbarBrand, 
  NavbarContent, 
  NavbarItem, 
  Button,
  Link,
  // NavbarMenuToggle,
  // NavbarMenu,
  // NavbarMenuItem
} from "@heroui/react";

export default function ArtNavbar() {
    return (
      <Navbar shouldHideOnScroll>
      <NavbarBrand>
        <img src={"/Lettermark.png"} alt="Logo" className="w-8" />
      </NavbarBrand>
  
      {/* <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Button color="primary" href="#">
            Web Dev
          </Button>
        </NavbarItem>
      </NavbarContent> */}
  
      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        <NavbarItem>
          <Link color="foreground" href="#" aria-current="page">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/art/work">
            Work
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/art/contact">
            Contact
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/art/commission">
            Commissions
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
    );
  }