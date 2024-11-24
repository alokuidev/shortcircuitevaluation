import { useContext } from "react"
import { Contextapicomp } from "./Contextapi"

export const ContextApiReceiver = () =>{
    const {count,increment,decrement} = useContext(Contextapicomp)
    return(
        <>
            <p>{count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </>
    )
}
