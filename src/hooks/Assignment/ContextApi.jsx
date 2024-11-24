import { createContext, useState } from "react"

export const Countprovider = createContext();

export const ContextApi = ({children}) =>{
    const [count,setCount] = useState(0)

    const increment = () =>{
        return setCount(count + 1);
    }
    const decrement = () =>{
        return setCount(count - 1);
    }

    return(
        <>
            <Countprovider.Provider value={{count, increment, decrement}}>
                {children}
            </Countprovider.Provider>
        </>
    )
}