/* Navbar for Developer side of website.
 * Displays Lettermark (home), toggle site, home, work, about, and contact.
 */

import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from '@nextui-org/react';

export default function DevNavbar() {
    return (
      <Navbar shouldHideOnScroll>
      <NavbarBrand>
        <p className="font-bold text-inherit">ACME</p>
      </NavbarBrand>
  
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Button color="primary" href="#">
            Web Dev
          </Button>
        </NavbarItem>
      </NavbarContent>
  
      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        <NavbarItem>
          <Link color="foreground" href="#">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#" aria-current="page">
            Work
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
    );
  }