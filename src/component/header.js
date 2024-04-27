import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { AiOutlineShopping } from 'react-icons/ai';
import { BsFillJournalBookmarkFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import "./navbar.css"
function ImprovedNavbar() {
  const linkStyle = {
    marginRight: '30px',
    textDecoration: 'none',
    fontWeight: 'bold',
    color: '#EDF4F2', // Link text color
    fontSize: '18px', // Link font size
  };

  return (
    <Navbar expand="lg" style={{backgroundColor:'#31473A'}} variant="dark">
      <Container>
        <Navbar.Brand>
          <BsFillJournalBookmarkFill size={30} style={{ marginRight: '10px',color:'#EDF4F2'}} />
          <p style={{color:'#EDF4F2',fontWeight:'bold'}}> E-Book Store</p>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-4" style={{}}>

            <Link to="/" style={linkStyle}>Home</Link>
            
            <Link to="/books" style={linkStyle}>Books</Link>
            {/* <Link to="/add" style={linkStyle}>Add Product</Link> */}
            {/* <Link to="/admin" style={linkStyle}>Admin</Link> */}
            <Link to="/about" style={linkStyle}>About Us</Link>
          </Nav>
          <Nav>
            <Link to="/cart" style={{ ...linkStyle, display: 'flex', alignItems: 'center' }}>
              <AiOutlineShopping size={20} style={{ marginRight: '5px',color:'' }} />
              Cart Bag
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default ImprovedNavbar;