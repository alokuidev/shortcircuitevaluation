import { useState } from 'react';
import './style.css';

const Counter = () => {

    const [count, setCount] = useState(0);
    const [inputValue, setInputValue] = useState(0);


    const increment = () =>{
            
            if(inputValue !== 0 && inputValue !== "" && count < 100){
                setCount(parseInt(count) + parseInt(inputValue))
                return
            }
            
            if (count < 100) {
                setCount(parseInt(count) + 1);
            }
        
    }

    const decrement = () =>{
        if(inputValue !== 0 && inputValue !== "" && count > 0){
                setCount(parseInt(count) - parseInt(inputValue))
                return
            }
            
            if (count > 0) {
                setCount(parseInt(count) - 1);
            }
    }
    return(
        <>
            <div className="card">
                <h2 className="card-title">useState Counter</h2>
                <p className="counter-display">Count: <span id="count">{count}</span></p>
                <div className="input-container">
                    <input type="text" id="styled-input" min="0" value={inputValue} onChange={ (e) => setInputValue(e.target.value)}/>
                    <label htmlFor="styled-input" className="input-label">Add Value</label>
                </div>
                <div className="button-group">
                    <button id="decrement" className="counter-button" onClick={decrement} disabled={count <=0 }>- Counter</button>
                    <button id="increment" className="counter-button" onClick={increment} disabled={count >= 100 }>+ Counter</button>
                </div>
            </div>
        </>
    )
}

export default Counter;