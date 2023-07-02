import React,{useState} from 'react'
// huso hook react  con el useState
function CounterApp(){
    
    const [count,setCount]=useState(0);
    
    const increment =()=>{
        setCount(count + 1);
    }
    const decrement =()=>{
        setCount(count -1)
    }
    const reset =()=>{
        setCount(0);
    }
     return(
        <div>
            <h1>Contador</h1>
            <p>valor:{count}</p>
            <button onClick={increment}>Incremental</button>
            <button onClick={decrement}>Decrementar</button>
            <button onClick={reset}>Restablecer</button>
        </div>

     )
}
export default CounterApp;