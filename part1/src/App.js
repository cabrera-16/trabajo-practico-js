
import './App.css';
import Mensegu from './mesnaje';

function App() {
  const mensaje =`hola mundo de variable`;
  const a = 2;
  const b = 3;

  
  const Description = () =>{
    return <p>esta es la App del curso de fullstack BOOTCAMP</p>
  }
  return (
    <div className="App">
      <Mensegu color="red"messege ="Estamos trabajando "/>
      <Mensegu color ="blue"messege ="con los propiedad"/>
      <Mensegu color="yellow"messege ="en react"/>
      <Description/> 

      {mensaje + ` evalucion en jsx`}
      {a+b}
     <h1>Ti tulo de la App</h1>
     <strong>Estamos trabajando en ello</strong>
     <div>
      <p>el resultado es:</p>
      {mensaje}
     </div>
    </div>
  );
}

export default App;
