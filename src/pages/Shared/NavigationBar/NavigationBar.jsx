import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Link className='text-decoration-none mx-2 py-2 px-3  text-dark' to='/'>home</Link>
                            <Link className='text-decoration-none mx-2 py-2 px-3 text-dark' to='/login'>Login</Link>
                            <Link className='text-decoration-none mx-2 py-2 px-3 text-dark' to='/register'>Register</Link>
                        </Nav>
                        <Nav >
                            <FaUserCircle className='fs-1 mx-3'/>
                            <Button variant="secondary">Login</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavigationBar;