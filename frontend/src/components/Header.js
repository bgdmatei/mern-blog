import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => {
  return (
    <Navbar
      collapseOnSelect
      expand='lg'
      style={{ borderBottom: '0.5px solid black' }}
    >
      <Navbar.Brand href='#'>My Blog</Navbar.Brand>
      <Navbar.Toggle aria-controls='responsive-navbar-nav' />
      <Navbar.Collapse id='responsive-navbar-nav'>
        <Nav className='ml-auto'>
          <LinkContainer to='/'>
            <Nav.Link href='#'>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to='/new'>
            <Nav.Link>Create post</Nav.Link>
          </LinkContainer>
          <Nav.Link href='#'>Profile</Nav.Link>
          <Nav.Link href='#'>Logout</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
