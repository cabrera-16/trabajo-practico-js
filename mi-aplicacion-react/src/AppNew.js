import React, {useState} from 'react';


function AppNew(){

 const [todos,setTodos]=useState([]);
 const [ inputValue,setInputValue]=useState('');

 //FUNCION PARAA AGREGAR UNA CLASE LA LISTA
 const adTodo =()=>{
    if(inputValue !==''){
        const newTodo ={
            id:Date.now(),
            text:inputValue
        };
        setTodos([...todos,newTodo]);
        setInputValue('');
        
    }
    
 }
 //fUNCION PARA ELIMINAR LA TAREA DE LA LISTA
 const deleteTodo =(id)=>{
    const updatedTodos = todos.filter(todo =>todo.id !==id)
    setTodos(updatedTodos);
}
 
    return(
        <div>
            <h1>LISTA DE TAREA</h1>

            {/* CAMPO DE ENTRADA PARA AGREGAR UNA TAREA*/}

            <input
            type="text"
            value={inputValue}
            onChange={(e)=>setInputValue(e.target.value)}
            />
            {/*BOTON PARA AGEGAR LA TAREA UNA NUEVA TAREA */}
            <button onClick={adTodo}>Agregar</button>

            {/*LISTA DE TAREA */}
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        {todo.text}
                        {/*BOTON PARA ELIMINAR LA TARREA */}
                        <button onClick={()=>deleteTodo(todo.id)}>Eliminar</button>
                    </li>

                ))}

            </ul>
        </div>
         

    );
}
export default AppNew;