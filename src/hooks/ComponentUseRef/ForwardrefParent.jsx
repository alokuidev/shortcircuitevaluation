import { useRef } from "react";
import { BeforeReact19 } from "./ForwardrefChild18";

const RefFun = () => {

    const userid = useRef(null);
    const pass = useRef(null);
    const formSubmit = (e) =>{
        e.preventDefault();
        console.log(userid.current.value, pass.current.value);   
    } 
    return(
        <>
        <form onSubmit={formSubmit} >
            <BeforeReact19 label="Username" ref={userid} />
            <BeforeReact19 label="Password" ref={pass} /> 
            <button type="submit" className="login-button">Login</button>
        </form>    
        </>
    )
}

export default RefFun;