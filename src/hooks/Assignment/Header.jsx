import { useState } from "react"

export const Header = ({count}) =>{
    return(
        <header className="header">
                <h1>Counter Value: <span id="counter-value">{count}</span></h1>
        </header>
    )
}