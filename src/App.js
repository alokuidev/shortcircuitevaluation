import { useState } from "react";

function App() {
  const [loginState, setLoginState] = useState(false);
  const [user, setUser] = useState(false);
  const changeLoginState = () =>{
     setLoginState(!loginState);
  }

  const setUserName = () => {
     setUser(!user);
  }

  const clearUserName = () =>{
    
      setUser(false);
      setLoginState(false);
    
  }

  return (
    <>
        <div className="toggle-container">
    <label for="themeToggle">Dark</label>
    <div className="toggle-switch" id="themeToggle" data-state="light"></div>
  </div>
  <div className="card">
    <div className="card-header">Short Circuit Evaluation</div>
    <div className="card-body">
      <p>{ loginState ? `You are logged in` : ''}</p>
      <p> {user ? `You are logged in as Alok` : ' Please Login' }</p>
    </div>
    <div className="card-footer">
      <button onClick={changeLoginState}>Toggle Login State</button>
      <button onClick={setUserName}>Set User</button>
      <button onClick={clearUserName}>Clear User</button>
    </div>
  </div>
    </>
  );
}

export default App;
