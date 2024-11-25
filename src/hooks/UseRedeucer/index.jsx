import { useReducer, useState } from 'react';
import './style.css'
export const Reducer = () =>{

    const reducer = (state, action) =>{
        console.log(state)
        if(action.type ==='increment'){
            return state + 1;
        }
        else{
            return state - 1;
        }
    }
    const [count, dispatch] = useReducer(reducer,0);

    
    return (
      <>
        <header class="header">
          <h1>
            Counter Value: <span id="counter-value">{count}</span>
          </h1>
        </header>

        <main class="main">
          <button id="increment-btn" class="btn increment" onClick={() => dispatch({type:"increment"})}>
            Increment
          </button>
          <button id="decrement-btn" class="btn decrement" onClick={() => dispatch({type:"decrement"})}>
            Decrement
          </button>
        </main>

        <footer class="footer">
          <p>
            Current Counter Value: <span id="footer-counter-value" >{count}</span>
          </p>
        </footer>
      </>
    );
}