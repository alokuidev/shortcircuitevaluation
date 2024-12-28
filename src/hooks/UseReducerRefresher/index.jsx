import { useReducer } from 'react'
import './style.css'
export default function UseReducerRefresher(){
    const merafun = (state,action) =>{
        //const { action } = action;
        console.log(action)
        switch (action) {
            case 'decrement':
                return state - 1;
            case 'increment':
                return state + 1;
            default: 
                console.log('No action');   
                break
        }
    }
    const [count, dispatch] = useReducer(merafun, 0);
    //console.log(useReducer());
    return(
        <>
            <div className="card">
                <h2 className="card-title">useState Counter</h2>
                <p className="counter-display">Count: <span id="count">{count}</span></p>
                <div className="input-container">
                    <input type="text" id="styled-input" min="0" value="" />
                    <label htmlFor="styled-input" className="input-label">Add Value</label>
                </div>
                <div className="button-group">
                    <button id="decrement" className="counter-button" disabled={count === 0} onClick={() => dispatch('decrement')} >- Counter</button>
                    <button id="increment" className="counter-button" onClick={() => dispatch('increment')} >+ Counter</button>
                </div>
            </div>
        </>
    )
}