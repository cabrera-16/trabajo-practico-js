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

<<<<<<< HEAD
/*const  convertirCf=(grado=undefined,unidad=undefined)=>{
=======
const  convertirCf=(grado=undefined,unidad=undefined)=>{
>>>>>>> b71fd5ddd96bc5208c07a4b81d36ced06a47f13c
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
<<<<<<< HEAD
convertirCf(0,"C");*/

/*15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.*/
/*const convetirDebinarioAdecimal=(numero=undefined , base=undefined)=>{
    if(numero === undefined)return console.warn("no ingresate el numero convertir");
    if(typeof numero !=="number")return console.error(`el valor ${numero} ingresado no es un numero `);
    if (base === undefined )return console.warn("no ingresaste la base convertir");
    if(typeof base !=="number")return console.error(`el valor ${base} ingresado no es un numero `);

    if(base ===2){
        return console.info(`${numero} base ${base} = ${parseInt(numero,base)} base  10`);
    }else if (base===10) {
        return console.info(`${numero} base ${base} = ${numero.toString(2)} en base 2`);
        
    } else {
        return console.info("el tipo de base covertir no e valido ");
    }

}

convetirDebinarioAdecimal();
convetirDebinarioAdecimal("2");
convetirDebinarioAdecimal(100);
convetirDebinarioAdecimal(100,"2");
convetirDebinarioAdecimal(100,2);
convetirDebinarioAdecimal(10011100,2);*/








/*16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.*/

const devuelveMontoFinal=(monto=undefined,descuento=0)=>{
    if(monto===undefined)return console.warn("no ingresate un monto");

    if(typeof monto!=="number")return console.error(`el valor ${monto} no es un numero`);

    if (monto===0)return console.warn("monto no puede ser cero");

    if(Math.sign(monto)===-1)return console.error("no puede ingresar un monto negativo");

    if (typeof descuento !=="number")console.error(`el valor ${descuento} no es un numero de descunto`);

    if(Math.sign(descuento)===-1)return console.warn("no puede ingresar descuesto negativo");

    return console.info(`${monto}-${descuento}% = ${monto-(monto*descuento)/100}`);

}

//devuelveMontoFinal();
//devuelveMontoFinal("2");
//devuelveMontoFinal(0);
//devuelveMontoFinal(-5);
//devuelveMontoFinal(100,"2");
devuelveMontoFinal(1000,"2");






/*17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).*/
=======
convertirCf(0,"C");
>>>>>>> b71fd5ddd96bc5208c07a4b81d36ced06a47f13c
