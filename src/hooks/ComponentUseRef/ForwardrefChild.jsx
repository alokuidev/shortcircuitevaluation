import { forwardRef, useId } from "react"

export const ChildRef = forwardRef((props, ref) =>{
    const id = useId();
    return(
        <>
        
            <label htmlFor={id}>{props.label}</label>
            <input type="text" ref={ref}/>
       
        </>
    )
})