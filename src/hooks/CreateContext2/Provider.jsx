import { createContext, useState } from "react"

export const ConstProvider = createContext();

export const Provider = ({children}) => {
 const [sendNumber,setSendNumber] = useState(23)   
 const [sendString, setString] = useState("This Is string")
   
 return(
    <ConstProvider.Provider value={{sendNumber, sendString}}>
        {children}
    </ConstProvider.Provider>
 )
}