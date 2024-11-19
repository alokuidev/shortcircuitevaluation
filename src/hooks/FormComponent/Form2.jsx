import { useState } from 'react';
import './Form.css';
const Form2 = () =>{
    const [formVal, setFormVal] = useState({
        name:'',
        username:'',
        phone:'',
        email:'',
        password:''
    });
    
    const handleChange = (e) =>{
        const {id , value} = e.target;
        // eslint-disable-next-line default-case
        setFormVal((prevVal) => ({...prevVal, [id] : value}))
    }

    const formSubmit = (e) =>{
        e.preventDefault();
        
        
        setFormVal({
            name:'',
            username:'',
            phone:'',
            email:'',
            password:''
        });
    }
    
    return(
        <>
    <div className="form-container">
    <h1>REGISTRATION FORM</h1>
    <div className="">
        <div className='fullWidth'>My Name:&nbsp;{formVal.name}</div>
        <div className='fullWidth'>My Contact Number:&nbsp;{formVal.phone}</div>
        <div className='fullWidth'>My Email:&nbsp;{formVal.email}</div>
    </div>
    <form onSubmit={formSubmit}>
      {/* <!-- Row for Name and Username --> */}
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="name">NAME</label>
          <input type="text" id="name" name='name' value={formVal.name} onChange={handleChange} placeholder="Enter your name" autocomplete="off" required/>
        </div>
        <div className="form-group">
          <label htmlFor="username">USERNAME</label>
          <input type="text" id="username" name='username' value={formVal.username} onChange={handleChange} placeholder="Enter your username" autocomplete="off" required/>
        </div>
      </div>
      
      {/* <!-- Phone Number Field --> */}
      <div className="form-group">
        <label htmlFor="phone">PHONE NUMBER</label>
        <input type="tel" id="phone" name='phone' placeholder="Enter your phone number" value={formVal.phone} onChange={handleChange} autocomplete="off" required/>
      </div>
      
      {/* <!-- Email Field --> */}
      <div className="form-group">
        <label htmlFor="email">EMAIL</label>
        <input type="email" id="email" name="email" placeholder="Enter your email" value={formVal.email} onChange={handleChange} autocomplete="off" required/>
      </div>
      
      {/* <!-- Password and Confirm Password --> */}
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="password">PASSWORD</label>
          <input type="password" id="password" name='password' placeholder="Enter your password" onChange={handleChange}  value={formVal.password} autocomplete="off" required/>
        </div>
        <div className="form-group">
          <label htmlFor="confirm-password">CONFIRM PASSWORD</label>
          <input type="password" id="confirm-password" placeholder="Confirm your password" autocomplete="off" required/>
        </div>
      </div>
      
      {/* <!-- Gender Selection --> */}
      <div className="form-group">
        <label>GENDER</label>
        <div className="radio-group">
          <label><input type="radio" name="gender" value="male" /> MALE</label>
          <label><input type="radio" name="gender" value="female"/> FEMALE</label>
          <label><input type="radio" name="gender" value="prefer-not-to-say"/> PREFER NOT TO SAY</label>
        </div>
      </div>
      
      {/* <!-- Submit Button --> */}
      <button type="submit" className="submit-button">REGISTER</button>
    </form>
  </div>
        </>
    )
}

export default Form2;