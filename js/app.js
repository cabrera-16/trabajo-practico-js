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

/*const  convertirCf=(grado=undefined,unidad=undefined)=>{

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

convertirCf();
convertirCf("12");
convertirCf(2,true);
convertirCf(2,"hola");
convertirCf(2,"1");
convertirCf(50,"C");
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

/*const devuelveMontoFinal=(monto=undefined,descuento=0)=>{
    if(monto===undefined)return console.warn("no ingresate un monto");

    if(typeof monto!=="number")return console.error(`el valor ${monto} no es un numero`);

    if (monto===0)return console.warn("monto no puede ser cero");

    if(Math.sign(monto)===-1)return console.error("no puede ingresar un monto negativo");

    if (typeof descuento !=="number")console.error(`el valor ${descuento} no es un numero de descunto`);

    if(Math.sign(descuento)===-1)return console.warn("no puede ingresar descuesto negativo");

    return console.info(`${monto}-${descuento}% = ${monto-(monto*descuento)/100}`);

}

devuelveMontoFinal();
devuelveMontoFinal("2");
devuelveMontoFinal(0);
devuelveMontoFinal(-5);
devuelveMontoFinal(100,"2");
devuelveMontoFinal(1000,"2");*/


/*17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).*/

/*const fechaValida=(fecha=undefined)=>{
  // valdidacion de datos
  if (fecha === undefined)return console.info("no ingresaste la fecha");
  if (!(fecha instanceof Date)) return console.error("el valor que ingresaste no es una fecha valida");
  //logica
  let hoyMenoFecha = new Date().getTime() - fecha.getTime();
  let anios =1000*60*60*24*365;
  let aniosHumano = Math.floor(hoyMenoFecha / anios);
  //validadciones 

  return (Math.sign(aniosHumano)===-1)
  ?console.info(`falta ${Math.abs(aniosHumano)} años para la fecha ${fecha.getFullYear()} `)
  :(Math.sign(aniosHumano)=== 1)
  ?console.info(`han pasado ${aniosHumano} años, desde ${fecha.getFullYear()}`)
  :console.info(`estamos año actual ${fecha.getFullYear()}`)

 
}
fechaValida();
fechaValida({});
fechaValida(false);
fechaValida(new Date());
fechaValida(new Date(1991,5,16));
fechaValida(new Date(1992,9,20));
fechaValida(new Date(2085,2,5))*/

/*18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.*/

 /*
const textoCosonante=(texto="")=>{
  if(!texto)return console.info("no ingresaste las  texto");
  if (typeof texto !=="string")return console.error(`no ingresate"${texto}" no un un cadena de testo"`);
  
  vocales =0;
  consonante =0;
  texto= texto.toLocaleLowerCase();
  for( let letra of texto ){
    if (/[aeiouáéíóú]/.test(letra))vocales++;
  
    if(/[bcdlfghjkmnñpqrstvwyz]/.test(letra))consonante++;
  }  


return console.info({
  texto,
  vocales,
  consonante
})

}
textoCosonante();
textoCosonante(3);
textoCosonante("hola mundo");
textoCosonante("HOLA MUNDO")*/


/*19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.*/
 /* const validarTexto=(nombre="")=>{
    if(!nombre)return console.warn("ingrese el nombre");
    if (typeof nombre!=="string")return console.error(`no ingresate"${nombre}" no es una cadena de texto`);
      let RegExp= /^[a-za-zñÑáéíóúū\s]+$/g.test(nombre);
     
      return(RegExp)
      ?console.info(`"${nombre}" es valido`)
      :console.info(`"${nombre}" No es un nombre valido`)

  }
  validarTexto();
  validarTexto(2);
  validarTexto("jose cabrera.+6985")*/
/*20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.*/

 /* const validarEmail=(email="")=>{
      if(!email)return console.warn("ingrese el correo");
      if (typeof email!=="string")return console.error(`no ingresate"${email}" no es una cadena de texto`);

        let RegExp=  /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(email);
     
      return(RegExp)
      ?console.info(`"${email}" email es valido`)
      :console.info(`"${email}" email No es  valido`)

  

  }
  validarEmail();
  validarEmail(2);
  validarEmail("josemiguelcabrera@gmail.com");
  validarEmail("johanmiihi1@.com")*/


  /*21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].*/

   /*const devuleAr =(arr=undefined)=>{
    if(arr===undefined)console.warn("no ingresate un arreglo de numero ");

    if( !(arr instanceof Array)) return console.error("el valor que ingresaste no es un areglo");

    if(arr.length===0)return console.error("el areglo esta vacio");

    for(let num of arr){
      if(typeof num!=="number")return console.warn(`el "${num}" ingresado no es un numero`);

    }
    const newArr = arr.map(el=>el*el);
    return console.info(`el areglo original "${arr},\n arreglo elevado cuadrado"${newArr}"`)
   }
   devuleAr();
   devuleAr();
   devuleAr([1,4,8])*/

  /*22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].*/
   /*const arrayMinMax=(arr=undefined)=>{
      if (arr=== undefined)return console.warn("no ingresaste un arreglo de un numero");

      if (!(arr instanceof Array)) return console.error("el valor que ingresaste no es un arreglo");

      if(arr.length === 0)return console.warn("el arreglo esta vacio");

      for( num of arr){
        if (typeof num!=="number")return console.error(`el valor "${num}" ingresado, No es un numero`);
      }
      return console.info(`Arreglo original:${arr}\n valor mayor:${Math.max(...arr)},\nvalor minimo:${Math.min(...arr)}?`);
   }
   arrayMinMax();
   arrayMinMax({});
   arrayMinMax([]);
   arrayMinMax([1,2,true]);
   arrayMinMax([1,4,5,99,-60]);*/

 /* 23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.*/
    /*const arrayObejto=(arr= undefined)=>{
       if (arr=== undefined)return console.warn("no ingresaste un arreglo de un numero");

      if (!(arr instanceof Array)) return console.error("el valor que ingresaste no es un arreglo");

      if(arr.length === 0)return console.warn("el arreglo esta vacio");

      for( num of arr){
        if (typeof num!=="number")return console.error(`el valor "${num}" ingresado, No es un numero`);
      }
      
       return console.info({
        pares:arr.filter(num=> num%2===0),
        impares:arr.filter(num=> num%2===1)
       })
    }

    arrayObejto([1,2,3,4,5,6,7,8,9,0]);*/

/*24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.*/
/* const acederDesender=(arr= undefined)=>{
   if (arr=== undefined)return console.warn("no ingresaste un arreglo de un numero");

      if (!(arr instanceof Array)) return console.error("el valor que ingresaste no es un arreglo");

      if(arr.length === 0)return console.warn("el arreglo esta vacio");

      for( num of arr){
        if (typeof num!=="number")return console.error(`el valor "${num}" ingresado, No es un numero`);
      }

      return console.info({
        arr,
        Acedente:arr.map(el=>el).sort(),
        desendente:arr.map(el=>el).sort().reverse()

      
      })



 }
 acederDesender([7, 5,7,8,6]);*/

/*25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].*/
 /* const eliminarDuplicado = (arr=undefined)=>{
    if (arr=== undefined)return console.warn("no ingresaste un arreglo de un numero");

    if (!(arr instanceof Array)) return console.error("el valor que ingresaste no es un arreglo");

    if(arr.length === 0)return console.warn("el arreglo esta vacio");
    
    if(arr.length ===  1) return console.warn("el areglo debe de ser al menos 2 elemeto") ;*/
        
    /*return console.info({
      original:arr,
      sinDuplicar:arr.filter((value,index,self)=>self.indexOf(value)===index)

    })*/
   /* return console.info({
      original:arr,
      SinDuplicar:[...new Set(arr)]
    })

    }

    eliminarDuplicado(["x", 10, "x", 2, "10", 10, true, true])*/




  
/*26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.*/
/*
const sumarPromedio=(arr= undefined)=>{
  if (arr=== undefined)return console.warn("no ingresaste un arreglo de un numero");

if (!(arr instanceof Array)) return console.error("el valor que ingresaste no es un arreglo");

if(arr.length === 0)return console.warn("el arreglo esta vacio");

for( num of arr){
  if (typeof num!=="number")return console.error(`el valor "${num}" ingresado, No es un numero`);
}

let suma=0;
for(let p of arr){
 promedi=(suma+=p)
}

console.info({
  nota:arr,
  acomuladoNota:promedi,
  promedio:promedi/arr.length

})
}


sumarPromedio([9,8,7,6,5,4,3,2,1,0])
*/
let nombre =prompt("ingrese su nombre");
let matricula =prompt("ingrese la matricula")
let nota = prompt("ingrese la nota") 
if (nota >=80 || nota <100 ){
  document.write("Aprovaste la asignatura A")
}else if(nota >=70 || nota<=60){
  document.write("aprovaste con B")
}