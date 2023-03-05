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
