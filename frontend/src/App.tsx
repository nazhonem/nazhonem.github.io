import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from '@nextui-org/react';
const products = [
  { title: 'Skill 1', imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg', id: 1 },
  { title: 'Skill 2', imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg', id: 2 },
  { title: 'Skill 3', imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg', id: 3 },
];

function MyNavbar() {
  return (
    <Navbar>
    <NavbarBrand>
      <p className="font-bold text-inherit">ACME</p>
    </NavbarBrand>
    <NavbarContent className="hidden sm:flex gap-4" justify="center">
      <NavbarItem>
        <Link color="foreground" href="#">
          Features
        </Link>
      </NavbarItem>
      <NavbarItem isActive>
        <Link href="#" aria-current="page">
          Customers
        </Link>
      </NavbarItem>
      <NavbarItem>
        <Link color="foreground" href="#">
          Integrations
        </Link>
      </NavbarItem>
    </NavbarContent>
    <NavbarContent justify="end">
      <NavbarItem className="hidden lg:flex">
        <Link href="#">Login</Link>
      </NavbarItem>
      <NavbarItem>
        <Button as={Link} color="primary" href="#" variant="flat">
          Sign Up
        </Button>
      </NavbarItem>
    </NavbarContent>
  </Navbar>
  );
}

export default function ShoppingList() {
  function handleClick() {
    alert('You clicked me!');
  }

  const projectSkills = products.map(product =>
    <li
      key={product.id}
    >
      <button onClick={handleClick}>
        <img 
          className="projectImage"
          src={product.imageUrl}
          alt={'photo of ' + product.title}
          style={{
            width: 90,
            height: 90
          }}
        />
        <h3>{product.title}</h3>
      </button>
      
    </li>
  );
  

  return (
    <>
      <MyNavbar />
      <h2>Skills</h2>
      <ul>{projectSkills}</ul>
      <button onClick={handleClick}>
        Click me
      </button>
    </>
  );
}