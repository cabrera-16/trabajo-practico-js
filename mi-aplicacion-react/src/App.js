import React,{ useState } from "react";

import './styles.css'

const Saludo =()=>{
  return <h1>hola react</h1>
}
const now= new Date();
const a =10;
const b =20;
const Contador = (props)=>{
  return <h1>Contador:{props.valor}</h1>
}


function App() {
  const [contador,setContador]=useState(0);
  const darClick =()=>{
    setContador(contador+1);
  }
 /* const noClick =()=>{
    setContador(contador-1)
  }*/

  const handleClick=()=>{
    console.log("boton cliquiado")
  }
  
 
  return (
    <div>
      < Contador valor={contador}/>
      <h1 style={{color:'red'}}>Contador:{contador}</h1>
      <button className="color"  onClick={darClick}>Incremental</button>
      <button  className="color1"onClick={()=>setContador(contador-1)}>Descrementar</button>
      <button className="color2"onClick={handleClick}>haz click</button>
      <p> hello word ,it is {now.toString()}</p>
      <p>
        {a} + {b} ={a+b}
      </p>
      <Saludo/>
    </div>
  );
}

export default App;
