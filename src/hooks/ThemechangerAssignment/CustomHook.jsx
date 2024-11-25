import { useState } from "react";

export const useCustomHook = (intialTheme = true) =>{
    const [theme, setTheme] = useState(intialTheme);

    const changeTheme = () =>{
         setTheme(!theme)
    }

    return [theme,changeTheme]

}