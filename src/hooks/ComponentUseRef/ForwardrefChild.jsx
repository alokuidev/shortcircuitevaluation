import { forwardRef, useId } from "react"

export const ChildRef = forwardRef((prop, ref) =>{
    const id = useId();
    return(
        <>
        
            <label htmlFor={id}></label>
            <input type="text" ref={ref}/>
            <button type="submit" className="login-button">Login</button>
       
        </>
    )
})