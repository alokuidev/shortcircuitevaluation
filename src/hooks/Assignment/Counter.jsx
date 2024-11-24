import { useContext } from 'react';
import './Counter.css';
import { Footer } from './Footer';
import { Header } from './Header';
import { Countprovider } from './ContextApi';
const Counter = () =>{
    const {count, increment, decrement} = useContext(Countprovider)
    return(
        <>
            <Header count={count}/>

            <main   main className="main">
                <button id="increment-btn" className="btn increment" onClick={increment} disabled={count === 20}>Increment</button>
                <button id="decrement-btn" className="btn decrement" onClick={decrement} disabled={count === 0}>Decrement</button>
            </main>

            <Footer count={count}/>
        </>
    )    
}

export default Counter;