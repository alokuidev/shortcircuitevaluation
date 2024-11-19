import './Form.css';
const Form = () =>{
    return(
        <>
              <div className="form-container">
    <h1>REGISTRATION FORM</h1>
    <form>
      {/* <!-- Row for Name and Username --> */}
      <div className="form-row">
        <div className="form-group">
          <label for="name">NAME</label>
          <input type="text" id="name" placeholder="Enter your name" required/>
        </div>
        <div className="form-group">
          <label for="username">USERNAME</label>
          <input type="text" id="username" placeholder="Enter your username" required/>
        </div>
      </div>
      
      {/* <!-- Phone Number Field --> */}
      <div className="form-group">
        <label for="phone">PHONE NUMBER</label>
        <input type="tel" id="phone" placeholder="Enter your phone number" required/>
      </div>
      
      {/* <!-- Email Field --> */}
      <div className="form-group">
        <label for="email">EMAIL</label>
        <input type="email" id="email" placeholder="Enter your email" required/>
      </div>
      
      {/* <!-- Password and Confirm Password --> */}
      <div className="form-row">
        <div className="form-group">
          <label for="password">PASSWORD</label>
          <input type="password" id="password" placeholder="Enter your password" required/>
        </div>
        <div className="form-group">
          <label for="confirm-password">CONFIRM PASSWORD</label>
          <input type="password" id="confirm-password" placeholder="Confirm your password" required/>
        </div>
      </div>
      
      {/* <!-- Gender Selection --> */}
      <div className="form-group">
        <label>GENDER</label>
        <div className="radio-group">
          <label><input type="radio" name="gender" value="male" required/> MALE</label>
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