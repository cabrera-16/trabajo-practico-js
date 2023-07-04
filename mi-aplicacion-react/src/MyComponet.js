import React,{ useEffect,useState } from "react";
// uso de los hook 
function MyComponet(){

    const [count,setcount]=useState(0);

    useEffect(()=>{
        document.title =`contador:${count}`;
        return()=>{
            // restaura el titulo original cuando se desmonte el componente
            document.title ='react APP'
        }
        
    },[count]);
    const  increment =()=>{
        setcount(count + 1);
    }
    
    
 return(
    <div>
        <h1>contador:{count}</h1>
        <button onClick={increment}>Incrementar</button>
        
    </div>

 )
}

export default MyComponet;