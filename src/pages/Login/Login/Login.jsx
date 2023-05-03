import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { authContext } from "../../../provider/AuthProvider/AuthProvider";

const Login = () => {
    const {signIn}=useContext(authContext)
    const location=useLocation();
    const navigate=useNavigate();
    // console.log(location);
    const from=location.state?.from?.pathname || '/category/0';
    // console.log(from);

    const handlerForm=event=>{
        event.preventDefault();
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;
        console.log(email,password);
        signIn(email,password)
        .then(result=>{
            const inUser=result.user;
            console.log(inUser);
            navigate(from ,{replace: true})
        })
        .catch(error=>{
            console.error(error.message);
        })
    }
  return (
    <Container className="w-50 mx-auto my-5 border border-2 rounded p-5" onSubmit={handlerForm}>
            <h1 className="text-center py-3">Login your account</h1>
        <form className='px-5' >
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control " name="email"  id="exampleInputEmail1" aria-describedby="emailHelp" required/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" name="password"  id="exampleInputPassword1" required />
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" className="btn btn-dark w-100 my-2">Login</button>
        </form>
        <p className="text-center my-3">Dont’t Have An Account ? <Link to='/register' className="text-decoration-none text-danger ">Register</Link></p>
    </Container>
  );
};

export default Login;
