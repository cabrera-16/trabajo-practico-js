/*import ReacDOM from 'react-dom';
import {useState} from 'react';



const rootElement = document.getElementById('root');

// compontes******
/*const Couter = (props)=>{
  return <h1>{props.number}</h1>
}*/
 /* const Couter1 =({number1})=>{
 //   return <h1>{number1}</h1>
  
}
const App1 =(props)=>{
 const [contadorValue,updateContador]= useState (5);
 /*const contador = useState (13);
 const contadorValue = contador[0];
 const updateContador =contador[1];
 
 setInterval(() => {
  updateContador(contadorValue+1)
 }, 2000);*/
  
const handleClick =()=>{
  updateContador(contadorValue+1)
}
const handleClickReset =()=>{
  updateContador(0)
}
const isEven = contadorValue % 2===0;
const mensaje = isEven? "es par" :"es impar "
/*
let mensajePar =''
if(isEven){
  mensajePar= "es par"
}else{
  mensajePar ="impar"
}*/
/*let cambio=''
if (contadorValue <= 50){
    
}else{
  cambio = "no se puede pasar de los 50"
}
  const now = new Date();
  const a = 10;
  const b = 10;
  return (
  <div>
    <p>hello world it is {now.toString()}</p>
    <p>
      {a} plus  {b} is {a+b}
    </p>
    <  Couter1 number1={contadorValue}/>
    <h1>{cambio}</h1>
    <p>{mensaje}</p>
    <button onClick={handleClick}
      >INCREMENTAL
      </button>
      <button onClick={handleClickReset}>
        reset
      </button>
      

      <h1>HELLO WORD TO MY APP</h1>
      <MyButton/>
  
  </div>


  
  );
}

ReacDOM.render(<App1 />, rootElement);*/
