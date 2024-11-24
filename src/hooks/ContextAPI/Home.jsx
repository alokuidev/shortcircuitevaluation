import { useContext } from "react";
import { ConentAPiVar } from "./Createcompoent";



const Home = () => {
    const {name,age} = useContext(ConentAPiVar);

    return(
        <>
              
                <h1>Parent Compoent</h1>
                <h1>My Name is {name}</h1>
                <h1>My Age is {age}</h1>
            
            
            
        </>
    )
}

export default Home;