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

/*Codigo sincrono Bloqueante*/
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
uno();
console.log("FIN")

/*codigo asicrono no bloquantes  */