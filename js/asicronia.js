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

let temporizador = setInterval(()=>{
    console.log(new Date().toLocaleTimeString())
},1000);

clearTimeout(temporizador);
console.log("depues de clearinterval");


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
function cuadradoCallback(value,callback){
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

});