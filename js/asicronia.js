// 
/*console.log ("inicio");
setTimeout(()=>{
 console.log("Ejecutando settimeout esto se ejecuta una sola vez")
},1000);
setInterval(()=>{
    console.log("ejecutando un setinterval,esto se ejecuta indefinidamente cada cierto intervalo de tiempo")
},1000);*/
/*setInterval(()=>{
    console.log(new Date().toLocaleTimeString())
},1000);*/



/*let temporizador = setTimeout(()=>{
    console.log(new Date().toLocaleTimeString())
},1000);

clearTimeout(temporizador);
console.log("depues de cleartimeout");*/
/*
let temporizador = setInterval(()=>{
    console.log(new Date().toLocaleTimeString())
},1000);

clearTimeout(temporizador);
console.log("depues de clear interval");*/


/* Ante de explicar como funciona el modelo de javascrits es importante enteder algunos conceptos:
Procesamiento  Single thrad y Multi therad.
Opwraciones de  CPU Y operaciones I/O.
Opreraciones Cocurruentes y Paralelas
Operaciones Bloqueantes y no Bloqueantes.
Operaciones Sincronas y Asinconas.*/

/*Codigo sincrono Bloqueante
//PRIMERO SE EJECUTA ESTA 2
(()=>{
console.log("codigo sincrono");
console.log("inicio");

function dos(){
    console.log("DOS")
}

function uno(){
    console.log("UNO");
    dos();
    console.log("tres");
    
}
// PRIMERO COMIENZA POR EL FINAL DE LA FUNCION 
uno();
console.log("FIN")
});
/*codigo asicrono no bloquantes  
(()=>{
    console.log("codigo asincrono");
    console.log("inicio");

    function dos(){
        setTimeout(function() {
            console.log("DOS")
        }, 1000);
    }

    function uno(){
        setTimeout(function (){
            console.log("uno")
        },0);
        dos();
        console.log("tres");
    }
    uno();
    
    console.log("fin")
}); */
//callbacks
/*function cuadradoCallback(value,callback){
    setTimeout(()=>{
    callback(value,value*1000);
    },0| Math.random()*100);
}
    cuadradoCallback(0,(value,result)=>{
   
     console.log(`callback:${value},${result}`);

        cuadradoCallback(1,(value,result)=>{
   
         console.log(`callback:${value},${result}`);
})   
         cuadradoCallback(2,(value,result)=>{
  
    console.log(`callback:${value},${result}`);
    

})
            cuadradoCallback(3,(value,result)=>{
    
             console.log(`callback:${value},${result}`);
})
                cuadradoCallback(4,(value,result)=>{
    
    console.log(`callback:${value},${result}`);
    

})

});*/

/*
Función Callback
Una función de callback es una función que se pasa a otra función como un argumento, que luego se invoca dentro de la función externa 
para completar algún tipo de rutina o acción.*/
// sincrona se ejecuta de inmediatamente 
/*function saludar(nombre ){
    alert(` hola mi primer nombre callback ${nombre}`)
}
function procesarEntredaUsurio(callback){
    let nombre = prompt(`por favor ingrese el nombre `);
    callback(nombre);
}
procesarEntredaUsurio(saludar);**/


//Promise

/*function cuadradoPromise(value){
    //intancias de objecto promise resive un funcion resolve y reject. resolve + y reject - ojo  metodo resolver y reject son metodo estatico
    // costrutor reject catch
    if(typeof value!="number") return Promise.reject(`error , el valor "${value}" ingresado no es un numero `);
    return new Promise((resolve,reject)=>{
        
    setTimeout(()=>{
        resolve({
            value,
            result:value*value
        })
    },0| Math.random()*100);

    });
}
cuadradoPromise (0)
    .then((obj)=>{
       // console.log(obj);
       console.log("inicio de promise");
       console.log(`promise:${obj.value}, ${obj.result}`);
       return cuadradoPromise(1);
    })
    .then((obj)=>{
       
        console.log(`promise:${obj.value}, ${obj.result}`);
        return cuadradoPromise(2);
     })
     .then((obj)=>{
        
        console.log(`promise:${obj.value}, ${obj.result}`);
        return cuadradoPromise(3);
     })
     .then((obj)=>{
       
       console.log(`promise:${obj.value}, ${obj.result}`);
       return cuadradoPromise(4);
    })
    .then((obj)=>{
       
       console.log(`promise:${obj.value}, ${obj.result}`);
       return cuadradoPromise("0");
    })
    .then((obj)=>{
      
       console.log(`promise:${obj.value}, ${obj.result}`);
      console.log(`fin de la promise`)
    })
    
    .catch(err=>console.error(err))*/

    //Async - Await 

    function cuadradoPromise(value){
    //intancias de objecto promise resive un funcion resolve y reject. resolve + y reject - ojo  metodo resolver y reject son metodo estatico
    // costrutor reject catch
    if(typeof value!="number") return Promise.reject(`error , el valor "${value}" ingresado no es un numero `);
    return new Promise((resolve,reject)=>{
        
    setTimeout(()=>{
        resolve({
            value,
            result:value*value
        })
    },0| Math.random()*100);

    });
}// esto es una funcion asicrona try  es la parte + y catch - Await es la espera mediante proceso
/*async function funcionAsicronaDeclarada(){
    try {
        console.log("inicico Async Funcion");
        let obj = await cuadradoPromise(1);
        console.log(`Async functions:${obj.value},${obj.result}`);
        
         obj = await cuadradoPromise(1);
        console.log(`Async functions:${obj.value},${obj.result}`);

         obj = await cuadradoPromise(2);
        console.log(`Async functions:${obj.value},${obj.result}`);

         obj = await cuadradoPromise(3);
        console.log(`Async functions:${obj.value},${obj.result}`);

         obj = await cuadradoPromise(4);
        console.log(`Async functions:${obj.value},${obj.result}`);

         obj = await cuadradoPromise(5);
        console.log(`Async functions:${obj.value},${obj.result}`);

       
        console.log("fin de Asyn Await");
        
        
    } catch ( error) {
        console.error(error)
        
    }
}
  const funcioneAsicronaExpresada =  async ()=>{
     try {
        console.log("inicico Async Funcion");
        let obj = await cuadradoPromise(6);
        console.log(`Async functions:${obj.value},${obj.result}`);
        
         obj = await cuadradoPromise(7);
        console.log(`Async functions:${obj.value},${obj.result}`);

         obj = await cuadradoPromise(8);
        console.log(`Async functions:${obj.value},${obj.result}`);

         obj = await cuadradoPromise(9);
        console.log(`Async functions:${obj.value},${obj.result}`);

         obj = await cuadradoPromise(10);
        console.log(`Async functions:${obj.value},${obj.result}`);

        console.log("fin de Asyn Await");
        
        
    } catch ( error) {
        console.error(error)
        
    }

}
funcioneAsicronaExpresada();*/
//symbol simbolo unico cadena y numero
//set valores unico de un array

//symbol 
/*
let simbolo = Symbol("id");
let simbolo2 = Symbol("id");
console.log(simbolo===simbolo2);
let sim1 = Symbol(1);
let sy2 = Symbol(1);
console.log(sim1===sy2);

// set 
let set = new Set([1,2,3,4,5,6,true,true,false,{},{},"hola","Hola"]);
console.log(set.size);
console.log(set);
console.log(set[5]);*/


// json
 


console.log(JSON);