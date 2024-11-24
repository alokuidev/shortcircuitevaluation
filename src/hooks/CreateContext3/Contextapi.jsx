import { createContext, useState } from "react";

export const Contextapicomp = createContext();

const Contextapi = ({children}) =>{
    const [count,setCount] = useState(0)

    const increment = () =>{
        return setCount(count + 1);
    }
    const decrement = () =>{
        return setCount(count - 1);
    }
    return(
        <Contextapicomp.Provider value={{ count, increment, decrement }}>
            {children}
        </Contextapicomp.Provider>
    )
}

export default Contextapi;