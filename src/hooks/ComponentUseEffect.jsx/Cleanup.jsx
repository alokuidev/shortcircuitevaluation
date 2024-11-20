import { useEffect, useState } from 'react';
import './Cleanup.css';

const Cleanup = () =>{
    const [countsubs, setCountSubs] = useState(100000)

    useEffect(() =>{
        const timer = setInterval(() =>{
                            setCountSubs((prev) => parseInt(prev) + 1);
                    },1000);
        return( () =>{
            clearInterval(timer)
        })            
    },[])
    
    return(
        <>
            <div className="subscriber-count">
                <span className="number">{countsubs}</span>
                <span className="text">Subscribers</span>
            </div>
        </>
    )
}

export default Cleanup;