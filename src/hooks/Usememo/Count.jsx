import { useState } from "react";
import  ExpensiveCalcumation  from "./ExpensiveCalcumation";

export const Count = () =>{
    const [count,setCount] = useState(0)

    const increment = () =>{
        return setCount(count + 1);
    }
    const decrement = () =>{
        return setCount(count - 1);
    }

    return(
        <>
        <p>{count}</p>
        <ExpensiveCalcumation/>
        <div>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
        </>
    )
}