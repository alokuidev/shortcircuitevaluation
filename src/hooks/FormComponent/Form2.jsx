import { useState } from 'react';
import './Form.css';
const Form = () =>{
    const [name, setName] = useState('');
    const [user, setUser] = useState('');
    const [phone, setPhone] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword]= useState('');
    const [gender,setGender] = useState('');
    
    const handleChange = (e) =>{
        const {id , value} = e.target;
        // eslint-disable-next-line default-case
        switch(id){
            case "name":
                setName(value);
                break;
            case "username":
                setUser(value);
                break;
            case "phone":
                setPhone(value);
                break;
            case "email":
                setEmail(value)
                break;
            case "password":
                setPassword(value);
                break;
        }
    }

    const formSubmit = (e) =>{
        e.preventDefault();
        const formData = {
            name: name,
            username: user,
            phone:phone,
            email:email,
            password:password

        }
        console.log(formData);
    }
    
    return(
        <>
    <div className="form-container">
    <h1>REGISTRATION FORM</h1>
    <div className="">
        <div className='fullWidth'>My Name:&nbsp;{name}</div>
        <div className='fullWidth'>My Contact Number:&nbsp;{phone}</div>
        <div className='fullWidth'>My Email:&nbsp;{email}</div>
    </div>
    <form onSubmit={formSubmit}>
      {/* <!-- Row for Name and Username --> */}
      <div className="form-row">
        <div className="form-group">
          <label for="name">NAME</label>
          <input type="text" id="name" name='name' value={name} onChange={handleChange} placeholder="Enter your name" autocomplete="off" required/>
        </div>
        <div className="form-group">
          <label for="username">USERNAME</label>
          <input type="text" id="username" name='username' value={user} onChange={handleChange} placeholder="Enter your username" autocomplete="off" required/>
        </div>
      </div>
      
      {/* <!-- Phone Number Field --> */}
      <div className="form-group">
        <label for="phone">PHONE NUMBER</label>
        <input type="tel" id="phone" name='phone' placeholder="Enter your phone number" value={phone} onChange={handleChange} autocomplete="off" required/>
      </div>
      
      {/* <!-- Email Field --> */}
      <div className="form-group">
        <label for="email">EMAIL</label>
        <input type="email" id="email" name="email" placeholder="Enter your email" value={email} onChange={handleChange} autocomplete="off" required/>
      </div>
      
      {/* <!-- Password and Confirm Password --> */}
      <div className="form-row">
        <div className="form-group">
          <label for="password">PASSWORD</label>
          <input type="password" id="password" name='password' placeholder="Enter your password" onChange={handleChange}  value={password} autocomplete="off" required/>
        </div>
        <div className="form-group">
          <label for="confirm-password">CONFIRM PASSWORD</label>
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

export default Form;