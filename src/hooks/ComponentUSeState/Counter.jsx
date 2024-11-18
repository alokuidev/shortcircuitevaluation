import { useState } from 'react';
import './style.css';

const Counter = () => {

    const [count, setCount] = useState(0);

    const increment = () =>{
        return (
            setCount(count + 1)
        )
    }

    const decrement = () =>{
        return (
            setCount(count - 1)
        )
    }
    return(
        <>
            <div class="card">
                <h2 class="card-title">useState Counter</h2>
                <p class="counter-display">Count: <span id="count">{count}</span></p>
                <div class="button-group">
                    <button id="decrement" class="counter-button" onClick={decrement}>- Counter</button>
                    <button id="increment" class="counter-button" onClick={increment}>+ Counter</button>
                </div>
            </div>
        </>
    )
}

export default Counter;