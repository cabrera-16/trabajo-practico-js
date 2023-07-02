import React, { useState } from "react";


function Hook(){
    // state es la variable que almacena el estado actual
    // setState es la funcion que permite actulizar el estado
    //initialState es valor inicial del estado
  /*const [state,setState]=useState(0)
  const incrementar=()=>{
    setState(state+1)
  }*/
  /*const[nombre,setnombre]=useState("");


     function noom(){
        setInterval(() => {
            setnombre("juan")
        }, 5000);
     }
     
 console.log(noom)
 console.log()*/

  const [pares,setPares]=useState(0)

const  paresImpars=()=>{
    setPares(pares+1)
}
const mensaje =pares %2===0
const rep = mensaje ?"par":"impar"
    return(
        <div>
        <h1>pares:{pares}</h1>
        <h1>{rep}</h1>
        
        
        <button onClick={paresImpars}>presionar</button>
        </div>

    )
}
export default Hook;