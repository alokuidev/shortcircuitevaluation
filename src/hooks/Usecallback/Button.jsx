import { memo, useCallback, useState } from "react"

const Button = memo(({onClick, children}) =>{
    console.log(`rendering Button:  ${children}`)
    return(
        <button onClick={onClick}>{children}</button>
    )
})

export default function USeCallback(){
    const [count, setCount] = useState(0);
    const increment = useCallback(() =>{
        return setCount((prev)=> prev + 1)
    },[])

    const decrement = useCallback(() =>{
        return setCount((prev)=> prev - 1)
    },[])

    return(
        <>
            <h1>{count}</h1>
            <Button onClick={increment}>Increment</Button>
            <Button onClick={decrement}>Decrement</Button>
        </>
    )
}