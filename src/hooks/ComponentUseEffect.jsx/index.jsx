import { useEffect, useState } from "react"
import './index.css';
export const USeEffectFun = () =>{
    const [count,setCount] = useState(0);
    const [date,setDate] = useState(0);
    const [time,setTime] = useState(0);

    useEffect(() =>{
        console.log('The count is:'+ count);
        document.title = `Count: ${count}`;
    },[count]);
    
    useEffect(()=>{
         
        setInterval( () =>{
            const dates = new Date();
            setTime(dates.toLocaleTimeString())
            setDate(dates.toLocaleDateString())
       },1000)  
    },[])
    return(
        <>
            <div className="card">
                <h2 className="card-title">useState Counter</h2>
                <p className="counter-display" style={{color:'blue'}}>Date/Time:<span id="count">{date}</span></p>
                <p className="counter-display" style={{color:'red'}}>Date/Time:<span id="count">{time}</span></p>
                <p className="counter-display">Count:<span id="count">{count}</span></p>
                <div className="button-group">
                    <button id="decrement" className="counter-button" disabled={count === 0} onClick={() => setCount(count - 1)}>- Counter</button>
                    <button id="increment" className="counter-button" disabled={count === 10}  onClick={() => setCount(count + 1)} >+ Counter</button>
                </div>
            </div>
        </>
    )
}