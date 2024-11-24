import { useContext } from "react"
import { ConstProvider } from "./Provider"

export const Receiver = () =>{
    const{sendNumber, sendString} = useContext(ConstProvider)
    return(
        <>
            <p>This is String:{sendString}</p>
            <p>This is Number:{sendNumber}</p>
        </>
    )
}