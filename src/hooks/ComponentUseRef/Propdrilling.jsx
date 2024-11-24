import { createContext, useContext } from 'react';
import './Propdrilling.css';
const DataProvider = createContext();

const ChildComponent = () => {
    return <GranChildComponent/>
};
const GranChildComponent = () => {
    return <GreatGranChildComponent/>
};
const GreatGranChildComponent = () => {
    const data = useContext(DataProvider);
    return <h1>{data}</h1>;
};

const Propdrilling = () => {
    
    return (
        <>
            <h1>Hello !!! Testing Propdrilling</h1>
            <DataProvider.Provider value="Passing Props">
                <ChildComponent />
            </DataProvider.Provider>
            
        </>
    );
};

export default Propdrilling;
