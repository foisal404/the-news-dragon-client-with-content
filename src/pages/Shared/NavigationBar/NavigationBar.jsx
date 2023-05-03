import React from 'react';
import { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { authContext } from '../../../provider/AuthProvider/AuthProvider';

const NavigationBar = () => {
    const {user,logOut}=useContext(authContext)
    const handlerLogOut=()=>{
        logOut()
        .then(()=>{
            console.log('logout Succesfully')
        })
        .catch(error=>{
            console.error(error.message);
        })
    }
    return (
        <Container>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Link className='text-decoration-none mx-2 py-1 px-3   border border-0 rounded text-dark'  to='/'>Home</Link>
                            <Link className='text-decoration-none mx-2 py-1 px-3  border border-0 rounded text-dark' to='/login'>Login</Link>
                            <Link className='text-decoration-none mx-2 py-1 px-3  border border-0 rounded text-dark' to='/register'>Register</Link>
                        </Nav>
                        <Nav >
                            {
                                user?<><FaUserCircle className='fs-1 mx-3'/>
                                <p>{user.email}</p>
                                <Button variant="secondary" onClick={handlerLogOut}>Logout</Button></>:
                                <Button variant="secondary"><Link className='text-decoration-none text-light' to='/login'>Login</Link></Button>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default NavigationBar;