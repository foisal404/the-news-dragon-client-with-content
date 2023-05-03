import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { authContext } from '../../../provider/AuthProvider/AuthProvider';

const Register = () => {
    const{signUp}=useContext(authContext)
    const handlerForm=event=>{
        event.preventDefault();
        const from =event.target;
        const name=from.name.value;
        const photo=from.photo.value;
        const password=from.password.value;
        const email=from.email.value;
        // console.log(name,photo,password,email);
        signUp(email,password)
        .then(result=>{
            const createdUser=result.user;
            console.log(createdUser);
        })

        .catch(error=>{
            console.error(error.message);
        })
    }
    return (
        <div>
            <Container className="w-50 mx-auto my-5 border border-2 rounded p-5" onSubmit={handlerForm}>
                    <h1 className="text-center py-3">Register your account</h1>
                <form className='px-5'>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Your Name</label>
                        <input type="text" className="form-control " name="name"  id="exampleInputEmail1" aria-describedby="emailHelp" required/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail2" className="form-label">Photo URL</label>
                        <input type="text" className="form-control " name="photo"  id="exampleInputEmail2" aria-describedby="emailHelp" required/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail3" className="form-label">Email address</label>
                        <input type="email" className="form-control " name="email"  id="exampleInputEmail3" aria-describedby="emailHelp" required/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" name="password"  id="exampleInputPassword1" required />
                    </div>

                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Accept Term & Conditions</label>
                    </div>
                        <p className="my-2">Dont’t Have An Account ? <Link to='/login' className="text-decoration-none text-danger ">Login</Link></p>
                    <button type="submit" className="btn btn-dark w-100 my-3">Register</button>
                </form>
                <p></p>
            </Container>
        </div>
    );
};

export default Register;