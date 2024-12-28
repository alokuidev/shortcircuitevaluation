import { useReducer } from 'react';
import './style.css';
export default function UseReducerRefresher(){

    const initialState ={
        count:0,
        action:'Yet To Trigger A Action'
    }

    const reducer = (state, action) =>{
            const { type } = action;

            switch (type) {
                case 'decrement':
                    return{
                        ...state,
                        count: state.count - 1,
                        action:'Decrementing'
                    }
                    case 'increment':
                        return{
                            ...state,
                            count: state.count + 1,
                            action:'Incrementing'
                    }
                    case 'reset':
                        return{
                            ...state,
                            count: 0,
                            action:'Reset'
                    }     
                default:
                    break;
            }
    }
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <>
            <div className="card">
                <h2 className="card-title">useState Counter</h2>
                <p className="counter-display" style={{fontSize:'12px', color:'red'}}>Action: <span id="count">{state.action}</span></p>
                <p className="counter-display">Count: <span id="count">{state.count}</span></p>
                <div className="button-group">
                    <button id="decrement" className="counter-button" disabled={state.count ===0} onClick={() => dispatch({type:'decrement'})}>- Counter</button>
                    <button id="increment" className="counter-button" onClick={() => dispatch({type:'increment'})} >+ Counter</button>
                    <button id="increment" style={{backgroundColor:'blue'}} className="counter-button" onClick={() => dispatch({type:'reset'})} >Reset</button>
                </div>
            </div>
        </>
    )
}