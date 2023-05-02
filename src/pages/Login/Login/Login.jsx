import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Container className="w-50 mx-auto my-5 border border-2 rounded p-5">
            <h1 className="text-center py-5">Login your account</h1>
        <form >
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" className="form-control " name="email"  id="exampleInputEmail1" aria-describedby="emailHelp" required/>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" name="password"  id="exampleInputPassword1" required />
            </div>
            <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" class="btn btn-dark w-100">Login</button>
        </form>
        <p className="text-center my-2">Dont’t Have An Account ? <Link to='/register' className="text-decoration-none text-danger ">Register</Link></p>
    </Container>
  );
};

export default Login;
