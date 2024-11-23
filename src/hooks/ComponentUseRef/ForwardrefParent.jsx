import { useRef } from "react";
import { ChildRef } from "./ForwardrefChild";

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
            <ChildRef label="Username" ref={userid} />
            <ChildRef label="Password" ref={pass} /> 
            <button type="submit" className="login-button">Login</button>
        </form>    
        </>
    )
}

export default RefFun;