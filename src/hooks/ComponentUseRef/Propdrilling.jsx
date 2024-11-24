import './Propdrilling.css';

const ChildComponent = ({ data }) => {
    return <GranChildComponent data={data}/>
};
const GranChildComponent = ({ data }) => {
    return <GreatGranChildComponent data={data}/>
};
const GreatGranChildComponent = ({ data }) => {
    return <h1>{data}</h1>;
};

const Propdrilling = () => {
    return (
        <>
            <h1>Hello !!! Testing Propdrilling</h1>
            <ChildComponent data="Passing Props" />
        </>
    );
};

export default Propdrilling;
