/*13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.*/
/*const pareIpares=(numero=undefined)=>{
  if(numero===undefined)return console.warn("no ingresaste un numero");
  if(typeof numero !== "number")return console.error("no es un numero es un caracater");

  return((numero%2)===0)
  ?console.log(`el numero ${numero} es par`)
  :console.log(`el numero ${numero} es impar`)
}
pareIpares();
pareIpares("22")
pareIpares(4);
pareIpares(5);
pareIpares(6);
pareIpares(7);
pareIpares(8);
pareIpares(9);
pareIpares(195);/*

/*14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.*/

const  convertirCf=(grado=undefined,unidad=undefined)=>{
    if (grado === undefined)return console.warn("no ingresaste un grado convertir");
    if(typeof grado !=="number")return console.error(`el valor "${grado}" no es un numero`);
    if(unidad === undefined)return console.warn("no ingresate ningun grado convertir");
    if (typeof unidad !=="string")return console.error(`el valor "${unidad}" no es una cadena de texto`);
    if (unidad.length!==1 || !/(C|F)/.test(unidad)) return console.warn("valor dela unidada no reconocida");

    if (unidad ==="C"){
      return console.log(`medida de °C a °F= ${grado}°C = ${Math.round((grado*(9/5))+32)}°F`);
    } else if ( unidad === "F"){
      return console.log(`medida de °F a °C= ${grado}°F = ${Math.round(((grado-32)*(5/9)))}°C`);
    }
}

//convertirCf();
//convertirCf("12");
//convertirCf(2,true);
//convertirCf(2,"hola");
//convertirCf(2,"1");
//convertirCf(50,"C")
convertirCf(0,"C");
