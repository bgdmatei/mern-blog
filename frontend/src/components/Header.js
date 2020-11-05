import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar collapseOnSelect expand='lg' variant='light'>
      <Navbar.Brand href='#'>My Blog</Navbar.Brand>
      <Navbar.Toggle aria-controls='responsive-navbar-nav' />
      <Navbar.Collapse id='responsive-navbar-nav'>
        <Nav className='ml-auto'>
          <Nav.Link href='#'>Home</Nav.Link>
          <Nav.Link href='#'>Create post</Nav.Link>
          <Nav.Link href='#'>Profile</Nav.Link>
          <Nav.Link href='#'>Logout</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
