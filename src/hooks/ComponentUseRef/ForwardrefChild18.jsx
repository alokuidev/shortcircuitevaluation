import { forwardRef, useId } from "react"

export const BeforeReact19 = (props, ref) =>{
    const id = useId();
    return(
        <>
        
            <label htmlFor={id}>{props.label}</label>
            <input type="text" ref={props.ref}/>
       
        </>
    )
}