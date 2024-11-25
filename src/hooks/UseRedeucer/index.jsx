import { useReducer } from 'react';
import './style.css'
export const Reducer = () =>{
    const initialState = {
        count:0
    }
    const reducer = (state, action) =>{
        console.log(state.count);
        // if(action.type ==='increment'){
        //     return state + 1;
        // }
        // else{
        //     return state - 1;
        // }

        switch (action.type) {
            case 'increment':
                return {count : state.count + 1};
            case 'decrement':
                return {count: state.count - 1};
            case 'reset':
                return {count: state.count = 0};    
            default:
                break;
        }
    }
    const [count, dispatch] = useReducer(reducer,initialState);

    
    return (
      <>
        <header class="header">
          <h1>
            Counter Value: <span id="counter-value">{count.count}</span>
          </h1>
        </header>

        <main class="main">
          <button id="increment-btn" class="btn increment" disabled={count.count === 10} onClick={() => dispatch({type:"increment"})}>
            Increment
          </button>
          <button id="decrement-btn" class="btn decrement" disabled={count.count === 0} onClick={() => dispatch({type:"decrement"})}>
            Decrement
          </button>
          <button id="decrement-btn" class="btn decrement" style={{background:'#c6c6c6'}} onClick={() => dispatch({type:"reset"})}>
            Reset
          </button>
        </main>

        <footer class="footer">
          <p>
            Current Counter Value: <span id="footer-counter-value" >{count.count}</span>
          </p>
        </footer>
      </>
    );
}