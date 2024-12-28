import { useReducer } from 'react'
import './style.css'
export default function UseReducerRefresher(){

    const initialState ={
        count:0,
        action:'Yet to trigger a action'
    }


    const myFun = (state, action) =>{
        const {type} = action

        switch (type) {
            case 'increment':
                return {
                     ...state,
                      count: state.count + 1,
                      action: 'Incrementing'  
                    };
            case 'decrement':
                return {
                    ...state,
                    count: state.count - 1,
                    action: 'decrementing'
                };
        
            default:
                return {
                    ...state,
                    count:0,
                    action:'Reset'
                };
        }
        
    }
    const [ state, dispatch ] = useReducer(myFun, initialState)
    return(
        <>
            <div className="card">
                <h2 className="card-title">useState Counter</h2>
                <p className="counter-display" style={{fontSize:'14px'}}>Action: <span id="count">{state.action}</span></p>
                <p className="counter-display">Count: <span id="count">{state.count}</span></p>
                <div className="input-container">
                    <input type="text" id="styled-input" min="0" value="" />
                    <label htmlFor="styled-input" className="input-label">Add Value</label>
                </div>
                <div className="button-group">
                    <button id="decrement" className="counter-button" disabled={ state.count === 0} onClick={() => dispatch({type:'decrement'})}>- Counter</button>
                    <button id="increment" className="counter-button" style={{backgroundColor:'blue'}} onClick={() => dispatch({type:'reset'})} >Reset</button>
                    <button id="increment" className="counter-button" onClick={() => dispatch({type:'increment'})} >+ Counter</button>
                </div>
            </div>
        </>
    )
}