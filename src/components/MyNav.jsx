/*import * as React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
//import { useState,useEffect } from "react";

  // const[cart,setCart]=useState([])
  // React.useEffect(()=>{
  //   if(reduxData.cart){
  //     setCart(reduxData.cart.length)
  //   }
  // },[reduxData])
  function MyNav(){
    const cartItems = useSelector((state) => state.handleCart);
  
  return (
  
    <Navbar bg="primar" data-bs-theme="text-white">
      <Container>
        <Navbar.Brand href="#home">ShopHaven</Navbar.Brand>
        <Nav className="me-auto ">
          <Nav.Link>
            <Link to={"/"}> Home</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to={"prod"}>Products</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to={"about"}>About</Link>
          </Nav.Link>
          <Nav.Link>
          <Link to={"help"}>Help</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to={"contact"}>Contact</Link>
          </Nav.Link>
          <Nav.Link>
          <Link to={"cart"}>Cart({cartItems.length})</Link>
          </Nav.Link>
        </Nav>
      


      </Container>
    </Navbar>

  )
}
export default MyNav;*/

import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

function MyNav() {
  const cartItems = useSelector((state) => state.handleCart);

  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="#home">ShopHaven</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/prod">Products</Nav.Link>
          <Nav.Link as={Link} to="/about">About</Nav.Link>
          <Nav.Link as={Link} to="/help">Help</Nav.Link>
          <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          <Nav.Link as={Link} to="/cart">Cart({cartItems.length})</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default MyNav;
