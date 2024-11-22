import { useRef } from 'react';
import './Useref.css'
const Useref = () =>{
    const username = useRef('');
    const password = useRef('');

    const formSubmit = (e) => {
        e.preventDefault();
        console.log(username.current.value,password.current.value);   
    }
    return(
      
   
    <div className="login-container">
    <div className="login-box">
      <h1>Login</h1>
      <form onSubmit={formSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" ref={username} placeholder="Enter your email" required/>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" ref={password} placeholder="Enter your password" required/>
        </div>
        <button type="submit" className="login-button">Login</button>
        <div className="form-footer">
          <p>Don't have an account? <a href="javasctipt:void(0)">Sign Up</a></p>
        </div>
      </form>
    </div>
  </div>
        
    )
}

export default Useref;