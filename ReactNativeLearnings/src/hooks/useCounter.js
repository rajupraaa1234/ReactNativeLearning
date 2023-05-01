import React , {useState} from "react"

const useCounter = (initialValue = 0 , value = 1) =>{
      const[count , setCount] = useState(0);

      const Increment = () =>{
        setCount(count + value);
      }

      const Decreament = () =>{
        setCount(count - value);
      }

      const reset = () =>{
        setCount(value);
      }

      return { 
        Increment,
        Decreament,
        reset,
        count,
      }
}

export default useCounter;