
import React from 'react';
import {Navbar, Form, FormControl, Button} from "react-bootstrap";

function NavBar() {
 
    return ( 
        <React.Fragment>
            <Navbar fixed="top" bg="dark" variant="dark">
                <Navbar.Brand href="#home">Koompi Play</Navbar.Brand>
                {/* <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav> */}
                <Form inline className="ml-auto">
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search </Button>
                </Form>
            </Navbar>
        </React.Fragment>
     );
    
}
 
export default NavBar;