import { useId } from "react"

export const BeforeReact19 = (props, ref) =>{
    const id = useId();
    return(
        <>
        
            <label htmlFor={id+':'+props.label}>{props.label}</label>
            <input type="text" id={id+':'+props.label} ref={props.ref}/>
       
        </>
    )
}