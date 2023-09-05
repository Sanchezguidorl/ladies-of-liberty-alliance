import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/images/lola-logo.png";
import { NavDropdown } from "react-bootstrap";
import { useEffect, useState } from "react";


function Header() {
  const [headerSticky, setHeaderSticky]=useState(false);
useEffect(()=>{
const handleScroll=()=>{
  if(window.scrollY>0){
    setHeaderSticky(true);
  }else{
    setHeaderSticky(false)
  }
}

window.addEventListener('scroll', handleScroll);

return ()=> {window.removeEventListener('scroll', handleScroll)};

},[]);

  return (
    <Navbar expand="sm" style={{}} className={`bg-light header-nav ${headerSticky ? 'headerStickyStyle' : ''}`}>
      <Container fluid className="container">
        <Navbar.Brand className="navbar-logo" href="#">
          <img src={logo} alt="Ladies of liberty alliance" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav
            className="my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
  <NavDropdown title="SOBRE NOSOTRAS" id="basic-nav-dropdown" className="anchor-button text-white">
    <NavDropdown.Item href="" className="p-1 px-3">link1</NavDropdown.Item>
    <NavDropdown.Item href="" className="p-1 px-3">link1</NavDropdown.Item>
  </NavDropdown>
  <NavDropdown title="Donar" id="basic-nav-dropdown" className="anchor-button anchor-donate">
    <NavDropdown.Item className=" p-1 px-3" href="">link1</NavDropdown.Item>
    <NavDropdown.Item className="p-1 px-3" href="">link1</NavDropdown.Item>
  </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
