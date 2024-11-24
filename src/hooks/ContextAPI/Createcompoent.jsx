import { createContext } from "react";

export const ConentAPiVar = createContext();

export const BiodataProvider = ({children}) =>{
    const myName = "Alok";
    const age = 39;
    return(
        <ConentAPiVar.Provider value={{myName,age}}>
            {children}
        </ConentAPiVar.Provider>
    )
} 
