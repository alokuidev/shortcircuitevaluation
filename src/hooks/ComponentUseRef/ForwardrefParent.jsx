import { useRef } from "react";
import { ChildRef } from "./ForwardrefChild";

const RefFun = () => {

    const userid = useRef(null);

    const formSubmit = (e) =>{
        e.preventDefault();
        console.log(userid.current.value);   
    } 
    return(
        <>
        <form onSubmit={formSubmit} >
            <ChildRef label="username" ref={userid} />
        </form>    
        </>
    )
}

export default RefFun;