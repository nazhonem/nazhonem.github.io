/* Navbar for Developer side of website.
 * Displays Lettermark (home), toggle site, home, work, about, and contact.
 */

import {
  Navbar, 
  NavbarBrand, 
} from "@heroui/react";

export default function DevNavbar() {
    return (
      <Navbar shouldHideOnScroll className="bg-transparent">
      <NavbarBrand>
        <p className="text-white font-josefin">NM</p>
      </NavbarBrand>
    </Navbar>
    );
  }