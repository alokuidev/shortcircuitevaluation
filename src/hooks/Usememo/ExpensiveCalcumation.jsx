import { useMemo } from "react";

const ExpensiveCalcumation = () =>{
    
    const performExpensiveCalculation = () => {
        console.log("Running expensive calculation...");
        let result = 0;
        for (let i = 0; i < 1e7; i++) {
          result += i;
        }
        return result;
      };

      const total = useMemo(()=>{
            return performExpensiveCalculation();
      },[])
      //const total = 

      return <p>{total}</p>
}

export default ExpensiveCalcumation;