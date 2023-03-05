
class Pelicula{
    constructor({id,titulo,director,anoE,pais,genero,calificadoImbd}){
            this.id = id;
            this.titulo = titulo;
            this.director = director;
            this.anoE = anoE;
            this.pais = pais ;
            this.genero = genero;
            this.calificadoImbd = calificadoImbd;
            //INsTACIADNO METODO 
            this.validarIMBD(id);
            this.validarTitulo(titulo);
            this.validarDirector(director);
            this.validarEstreno(anoE);
            this.validarPais(pais);
            this.validarGeneros(genero);
            this.validarCalificacion(calificadoImbd);
    }// atributo estastico de los genero
    static get  listaGenero(){
        return ["Action", "Adult", "Adventure", "Horror", "Biography", "Comedy", 
        "Crime", "Documentary" ,"Drama", "Family", "Fantasy", "Film Noir", "Game-Show",
        " History", "Horror", "Musical"," Music", "Mystery", "News", "Reality-TV", "Romance", 
        "Sci-Fi", "Short", "Sport", "Talk-Show", "Thriller", "War", "Western"];
    }// metodo estastico de los genero
    static  generoAceptado(){
        return console.info(`los genero aceptado son ${Pelicula.listaGenero.join(",")}`)
    }//validaciones de cadenas
    validarCadena(propiedad,valor){
        if(!valor) return console.warn(`${propiedad}"${valor} esta vacio"`);
        if(typeof valor !=="string") return console.error(`${propiedad}"${valor}" ingresado no es una cadena de texto`);

        return true;
        
    }//validaciones longuitud de cadena
    validarLonguituCadena(propiedad,valor,longuitud){

        if(valor.length >longuitud) return console.error(`#${propiedad} "${valor} excede el numereos caracteres permitido ${longuitud}`);
        return true;

    }
    valiadarNumero(propiedad,valor,){
        if(!valor) return console.warn(`${propiedad}${valor} esta vacio`);

        if(typeof valor !=="number")return console.error(`${propiedad}"${valor}" ingresado no es un numero`);
        return true;

    }
    validarAreglo(propiedad,valor){
        if(!valor)return console.warn(`${propiedad} ${valor} esta vacio`);

        if(!(valor instanceof Array))return console.error(`${propiedad} "${valor}" ingresado no es un array`);

        if(valor.length === 0)return console.error(`${propiedad}"${valor}" no tiene dato`);

        for(let cadena of valor){
            if(typeof cadena !=="string")return console.error(`el valor ${cadena} ingresado no es una cadena texto`);

        }
            return true;
    }
     
    validarIMBD(id){
        if(this.validarCadena("IMDB",id)){
            //METODO TEST DE LA EXPRESIONS REGULARES
            if(!(/^([a-z]){2}([0-9]){7}$/.test(id))){
                return console.error(`IMDB ${id} no es valido,debe de tener  9 caracteres, los 2 primeros letra minisculas,y los 7 restante numero`);
            }
        }   

    }// metodo titulo y la validaciones
    validarTitulo(titulo){
        if(this.validarCadena("titulo",titulo)){
            this.validarLonguituCadena("titulo",titulo,100);
    
        }
    }// metodo director y la validaciones
    validarDirector(director){
        if(this.validarCadena("director",director)){
            this.validarLonguituCadena("director",director,50);
        }
    } //validar Estreno 
    validarEstreno(anoE){
        if(this.valiadarNumero("año de extreno",anoE)){
            //METODO TEST DE LA EXPRESIONS REGULARES
            if(!(/^([0-9]){4}$/.test(anoE))){
                return console.error(`año de extreno "${anoE}" no es validos solo es 4 numero`);
            }
        }   

    }
    validarPais(pais){
        this.validarAreglo("pais",pais);
    }       
    validarGeneros(genero){
        if(this.validarAreglo("genero",genero)){
          // validar for of q los genero sean acetado del metodo estatico.
            for(let gener of genero){
                if(!Pelicula.listaGenero.includes(gener)){
                    console.error(`"Genero(s) incorrectos"${genero.join()}"`);
                    Pelicula.generoAceptado();
                }

            }
        }
    }
    validarCalificacion(calificadoImbd){
        if(this.valiadarNumero("calificacion",calificadoImbd))
           return (calificadoImbd < 0 ||calificadoImbd > 10)
           ?console.error(`la calificaion tiene estar en un rango  entre 0 y 10`)
           :this.calificadoImbd = calificadoImbd.toFixed(1)
        

    }
    fichaTecnica(){
        console.info(`Ficha Térnica:\nTitulo:"${this.titulo}"\nDirector:"${this.director}"\nAño:"${this.anoE}"\nPais:"${this.pais.join("-")}"\nGénero:"${this.genero.join(",")}"\nCalificación:"${this.calificadoImbd}"\nIMDB:"${this.id}"`)
    }
}

//Pelicula.generoAceptado()
/*const peli = new Pelicula({
    id:"tt1234567",
    titulo:"bab boy",
    director:"jose miguel cabrera diaz ",
    anoE:2023,
    pais:["republica dominicana"],
    genero:["Thriller", "War"],
    calificadoImbd:7.789
});

peli.fichaTecnica();*/
const mipeli=[
    {
        id:"tt1234567",
        titulo:"bab boy",
        director:"jose miguel cabrera diaz",
        anoE:2023,
        pais:["republica dominicana"],
        genero:["Thriller", "War"],
        calificadoImbd:7.789
    },
    {
        id:"tt2345689",
        titulo:"Resident Evil",
        director:" Shinji Mikami",
        anoE:1996,
        pais:["japon"],
        genero:["Horror","Fantasy"],
        calificadoImbd:8.563
    },
    {
        id:"tt4561238",
        titulo:"John Wick 4",
        director:" Chad Stahelskii",
        anoE:2023,
        pais:["Estado unido"],
        genero:["Action", "Crime","Fantasy"],
        calificadoImbd:9.563
        
    }
];
// foreach para inprimri la ficha tecnica de esta practica
mipeli.forEach(el=> new Pelicula(el).fichaTecnica());