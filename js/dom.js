//const  $card = document.querySelector(".card")

//S$atributo =`este cambio de javascripts la linea uno`;
//console.log($card)


/*const $text= document.getElementById("que-es");
 let $text1=`<p>
 este texto<b> modificado </b> por js 
 </p>`
 $text.textContent = $text1;
 //$text.innerHTML = $text1;
 //$text.outerHTML=$text1*/


 //creando elemento html y fragmento
 const $figure = document.createElement("figure"),
 $img =document.createElement("img"),
 $figcaption =document.createElement("figcaption"),
 $figcaptiontex=document.createTextNode("animals"),
 $cards =document.querySelector(".cards"),
 $figure2 = document.createElement("figure");

// imgeneses 
 $img.setAttribute("src","https://placeimg.com/200/200/animals");
 $img.setAttribute("alt","Animals");
 $figure.classList.add("card")

 $figcaption.appendChild($figcaptiontex);
 $figure.appendChild($img);
 $figure.appendChild($figcaption);
 $cards.appendChild($figure);

// segunda etiqueta
 $figure2.innerHTML=`
 <img src="https://placeimg.com/200/200/people" alt="people">
 <figcaption>people</figcaption>
 `;
$figure2.classList.add("card");
$cards.appendChild($figure2);