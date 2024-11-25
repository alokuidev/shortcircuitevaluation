import { useContext } from "react";
import { ThemeChangecontextProvider } from "./ThemeChangeContextApi";
import './Themechanger.css'
const Themechanger = () => {
    
    const {theme , changeTheme} = useContext(ThemeChangecontextProvider)
    
    return (
      <div className={`fullscreen-div ${theme ? 'light-theme' : 'dark-theme '}`}>
        <header className="header">
          <button id="themeToggle" className="theme-toggle-btn" onClick={changeTheme}>
            Switch to Dark
          </button>
        </header>
        <div className="container">
          <h1>Welcome to the Theme Toggle Example</h1>
          <p>This is a simple demonstration of a theme switcher.</p>
        </div>
      </div>
    );
}

export default Themechanger;