import { createContext } from "react"

export const ConstProvider = createContext();

export const Provider = ({children}) => {
 const sendNumber = 23;
 const sendString = "This Is string";

 return(
    <ConstProvider.Provider value={{sendNumber, sendString}}>
        {children}
    </ConstProvider.Provider>
 )
}