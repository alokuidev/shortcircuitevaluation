import { useState } from 'react';
import './LoginForm.css'

const Login = () =>{
    const [login,setLogin] = useState({
        email:'',
        password:''
    })

    const loginForm = (e) =>{
        const { id , value } = e.target
        setLogin((prev) =>({...prev, [id] : value}))
    }
    const loginAction = (e) => {
        e.preventDefault();
        console.log(login);
    }
    return(
        <>
<div className="login-container">
    <form className="login-form">
      <h2>Login</h2>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="Enter your email" value={login.email} onChange={loginForm} required/>
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" placeholder="Enter your password" value={login.password} onChange={loginForm} required/>
      </div>
      <button type="submit" className="login-button" onClick={loginAction}>Log In</button>
      <p className="register-link">Don't have an account? <a href="javscript:void(0)">Register here</a></p>
    </form>
  </div>
        </>
    )
}

export default Login;