// Page for Login Page.
import React from 'react';
import Nav from './Nav';
import './Login.css';
import { Link } from 'react-router-dom';
import './LoginH.css'


function LoginH () {
    return (
        <>
            <Nav />
            <div className='Main'>
                <div className="login">
                    <h1 className='form-heading'>Login</h1> 
                    <div className='button-container'>
                        <Link to='/'> <button id ='Customer3'>Customer</button> </Link>
                        <Link to='/LoginH'> <button id ='Hotel3'>Hotel</button> </Link> 
                    </div> 
                    <br /><br />
                    <input type = 'email' placeholder="Enter your email" name='email'  id="email1" required /><br /><br/>
                    <input type = 'password' placeholder="Enter your Password" name='password'  id="password1" required /> <br /> <br />
                    {/*<Link to ="" id="forgot"><b>Forgot Password?</b></Link> <br />*/}
                    <button type='submit' id="button">Login</button>
                    <br></br><br></br>
                    <p id="accountExists1"><b>Don't have an account?</b><Link to ="/SignUpC" id='signInBtn1'><b> Sign Up</b></Link></p>
                </div>
            </div>
        </>
    );
}

export default LoginH;
