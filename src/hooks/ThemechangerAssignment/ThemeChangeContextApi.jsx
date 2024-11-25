import { createContext } from "react"
import { useCustomHook } from "./CustomHook";
export const ThemeChangecontextProvider = createContext();

export const ThemeChangeContextApi = ({children}) =>{
    
    const [theme, changeTheme] = useCustomHook();

    return(
        <ThemeChangecontextProvider value={{theme, changeTheme}}>
            {children}
        </ThemeChangecontextProvider>
    )
}