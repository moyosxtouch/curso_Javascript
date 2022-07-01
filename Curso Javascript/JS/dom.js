/* **********     Curso JavaScript: 60. WEB APIs - #jonmircha     ********** */
/* https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model */
/* https://developer.mozilla.org/en-US/docs/Mozilla/Gecko/Chrome/API/Browser_API */
/* https://developer.mozilla.org/en-US/docs/Web/API/CSS_Object_Model */

/*console.log(window);
console.log(document);
let texto = "pocha pocha pocha pocha carlo carlo carlo";
const hablar = (texto) =>
  speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
hablar(texto);*/

/*console.log("**********Elementos del documento**********");
console.log(window.document);
console.log(document);
console.log(document.head);
console.log(document.body);
console.log(document.documentElement);
console.log(document.doctype);
console.log(document.characterSet);
console.log(document.title);
console.log(document.links);
console.log(document.images);
console.log(document.forms);
console.log(document.styleSheets);
console.log(document.scripts);
setTimeout(() => {
  console.log(document.getSelection().toString());
}, 3000);*/

/* **********     Curso JavaScript: 62. DOM: Nodos, Elementos y Selectores - #jonmircha     ********** */
//https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType
/* console.log(document.getElementsByTagName("li"));
console.log(document.getElementsByClassName("card"));
console.log(document.getElementsByName("nombre"));
console.log(document.getElementById("menu"));
console.log(document.querySelector("#menu"));
console.log(document.querySelector("a"));
console.log(document.querySelectorAll("a"));
console.log(document.querySelectorAll("a").length);
document.querySelectorAll("a").forEach((el) => console.log(el));
console.log(document.querySelector(".card"));
console.log(document.querySelectorAll(".card"));
console.log(document.querySelectorAll(".card")[2]);
console.log(document.querySelector("#menu li"));
console.log(document.querySelectorAll("#menu li")); */

/* **********     Curso JavaScript: 63. DOM: Atributos y Data-Attributes - #jonmircha     ********** */
/* console.log(document.documentElement.lang);
console.log(document.documentElement.getAttribute("lang"));
console.log(document.querySelector(".link-dom").href);
console.log(document.querySelector(".link-dom").getAttribute("href"));
document.documentElement.lang = "en";
console.log(document.documentElement.lang);
document.documentElement.setAttribute("lang", "es-MX");
console.log(document.documentElement.lang);
const $linkDOM = document.querySelector(".link-dom");
$linkDOM.setAttribute("target", "_blank");
$linkDOM.setAttribute("rel", "noopener");
$linkDOM.setAttribute("href", "https://youtube.com/jonmircha");
console.log($linkDOM.hasAttribute("rel"));
$linkDOM.removeAttribute("rel");
console.log($linkDOM.hasAttribute("rel"));
//Data-Attributes
console.log($linkDOM.getAttribute("data-description"));
console.log($linkDOM.dataset);
console.log($linkDOM.dataset.description);
$linkDOM.setAttribute("data-description", "Modelo de Objeto del Documento");
console.log($linkDOM.dataset.description);
$linkDOM.dataset.description = "Suscríbete a mi canal y comparte";
console.log($linkDOM.dataset.description);
console.log($linkDOM.hasAttribute("data-id"));
$linkDOM.removeAttribute("data-id");
console.log($linkDOM.hasAttribute("data-id")); */

//Curso JavaScript: 64. DOM: Estilos y Variables CSS

/*const $linkDOM = document.querySelector(".link-dom");
console.log($linkDOM.style);
console.log($linkDOM.getAttribute("style"));
console.log($linkDOM.style.backgroundColor);
console.log($linkDOM.style.color);
console.log(window.getComputedStyle($linkDOM));
console.log(getComputedStyle($linkDOM).getPropertyValue("color"));
$linkDOM.style.setProperty("text-decoration", "none");
$linkDOM.style.setProperty("display", "block");
$linkDOM.style.width = "50%";
$linkDOM.style.textAlign = "center";
$linkDOM.style.marginLeft = "auto";
$linkDOM.style.marginRight = "auto";
$linkDOM.style.padding = "1rem";
$linkDOM.style.borderRadius = ".5rem";
console.clear();
console.log($linkDOM.style);
console.log($linkDOM.getAttribute("style"));
console.log(getComputedStyle($linkDOM));

//variables css-custom properties
const $html = document.documentElement,
  $body = document.body;
let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");
let varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");
console.log(varDarkColor, varYellowColor);
$body.style.backgroundColor = varDarkColor;
$body.style.color = varYellowColor;
$html.style.setProperty("--dark-color", "black");
varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");
$body.style.setProperty("background-color", varDarkColor);*/
//Curso JavaScript: 65. DOM: Clases CSS//
/*const $card = document.querySelector(".card");
console.log($card);
console.log($card.className);
console.log($card.classList);
console.log($card.classList.contains("rotate-45"));
$card.classList.add("rotate-45");
console.log($card.className);
console.log($card.classList);
$card.classList.remove("rotate-45");
console.log($card.classList.contains("rotate-45"));
$card.classList.toggle("rotate-45");
console.log($card.classList.contains("rotate-45"));
$card.classList.toggle("rotate-45");
console.log($card.classList.contains("rotate-45"));
$card.classList.toggle("rotate-45");
$card.classList.replace("rotate-45", "rotate-135");
$card.classList.add("opacity-80", "sepia");
$card.classList.remove("opacity-80", "sepia");
$card.classList.toggle("opacity-80", "sepia");*/

//Curso JavaScript: 66. DOM: Texto y HTML//
/*const $whatIsDOM = document.getElementById("que-es");
let text = `
<p>
      El Modelo de Objetos del Documento (<b><i>DOM - Document Object Model</i></b>) es un API para documentos HTML y XML.
    </p>
    <p>
      Éste proveé una representación estructural del documento, permitiendo modificar su contenido y presentación visual mediante código JS.
    </p>
    <p>
      <mark>El DOM no es parte de la especificación de JavaScript, es una API para los navegadores.</mark>
    </p>

`;
//$whatIsDom.innerText = text;
$whatIsDOM.textContent = text;
$whatIsDOM.innerHTML = text;
$whatIsDOM.outerHTML = text;*/

/*Curso JavaScript: 67. DOM Traversing: Recorriendo el DOM*/
/* const $cards = document.querySelector(".cards");
console.log($cards);
console.log($cards.children);
console.log($cards.children[2]);
console.log($cards.parentElement);
console.log($cards.firstElementChild);
console.log($cards.lastElementChild);
console.log($cards.previousElementSibling);
console.log($cards.nextElementSibling);
console.log($cards.closest("div"));
console.log($cards.closest("body"));
console.log($cards.children[3].closest("section")); */

// /* **********     Curso JavaScript: 68. DOM: Creando Elementos y Fragmentos - #jonmircha     ********** */
// /* const $figure = document.createElement("figure"),
//   $img = document.createElement("img"),
//   $figcaption = document.createElement("figcaption"),
//   $figcaptionText = document.createTextNode("Animals"),
//   $cards = document.querySelector(".cards"),
//   $figure2 = document.createElement("figure");
// $img.setAttribute("src", "https://placeimg.com/200/200/animals");
// $img.setAttribute("alt", "Animals");
// $figure.classList.add("card");
// $figcaption.appendChild($figcaptionText);
// $figure.appendChild($img);
// $figure.appendChild($figcaption);
// $cards.appendChild($figure);
// $figure2.innerHTML = `
// <img src="https://placeimg.com/200/200/people" alt="People">
// <figcaption>People</figcaption>
// `;
// $figure2.classList.add("card");
// $cards.appendChild($figure2);
// const estaciones = ["Primavera", "Verano", "Otoño", "Invierno"],
//   $ul = document.createElement("ul");
// document.write("<h3>Estaciones del Año</h3>");
// document.body.appendChild($ul);
// estaciones.forEach((el) => {
//   const $li = document.createElement("li");
//   $li.textContent = el;
//   $ul.appendChild($li);
// });
// const continentes = ["África", "América", "Asia", "Europa", "Oceanía"],
//   $ul2 = document.createElement("ul");
// document.write("<h3>Continentes del Mundo</h3>");
// document.body.appendChild($ul2);
// $ul2.innerHTML = "";
// continentes.forEach((el) => ($ul2.innerHTML += `<li>${el}</li>`));
// const meses = [
//     "Enero",
//     "Febrero",
//     "Marzo",
//     "Abril",
//     "Mayo",
//     "Junio",
//     "Julio",
//     "Agosto",
//     "Septiembre",
//     "Octubre",
//     "Noviembre",
//     "Diciembre",
//   ],
//   $ul3 = document.createElement("ul"),
//   $fragment = document.createDocumentFragment();
// meses.forEach((el) => {
//   const $li = document.createElement("li");
//   $li.textContent = el;
//   $fragment.appendChild($li);
// });
// document.write("<h3>Meses del Año</h3>");
// $ul3.appendChild($fragment);
// document.body.appendChild($ul3); */
// /*
// */
// /* **********     Curso JavaScript: 69. DOM: Templates HTML - #jonmircha     ********** */
// /* const $cards = document.querySelector(".cards"),
//   $template = document.getElementById("template-card").content,
//   $fragment = document.createDocumentFragment(),
//   cardsContent = [
//     {
//       title: "Tecnología",
//       img: "https://placeimg.com/200/200/tech",
//     },
//     {
//       title: "Animales",
//       img: "https://placeimg.com/200/200/animals",
//     },
//     {
//       title: "Arquitectura",
//       img: "https://placeimg.com/200/200/arch",
//     },
//     {
//       title: "Gente",
//       img: "https://placeimg.com/200/200/people",
//     },
//     {
//       title: "Naturaleza",
//       img: "https://placeimg.com/200/200/nature",
//     },
//   ];
// cardsContent.forEach((el) => {
//   $template.querySelector("img").setAttribute("src", el.img);
//   $template.querySelector("img").setAttribute("alt", el.title);
//   $template.querySelector("figcaption").textContent = el.title;
//   let $clone = document.importNode($template, true);
//   $fragment.appendChild($clone);
// });
// $cards.appendChild($fragment); */
// /*
// */
// /* **********     Curso JavaScript: 70. DOM: Modificando Elementos (Old Style) - #jonmircha     ********** */
// /* const $cards = document.querySelector(".cards"),
//   $newCard = document.createElement("figure"),
//   $cloneCards = $cards.cloneNode(true);
// $newCard.innerHTML = `
//   <img src="https://placeimg.com/200/200/any" alt="Any">
//   <figcaption>Any</figcaption>
// `;
// $newCard.classList.add("card");
// //$cards.replaceChild($newCard, $cards.children[2]);
// //$cards.removeChild($cards.lastElementChild);
// $cards.insertBefore($newCard, $cards.firstElementChild);
// document.body.appendChild($cloneCards); */
// /*
// */
// /* **********     Curso JavaScript: 71. DOM: Modificando Elementos (Cool Style) - #jonmircha     ********** */
// /*
// .insertAdjacent...
//   .insertAdjacentElement(position, el)
//   .insertAdjacentHTML(position, html)
//   .insertAdjacentText(position, text)
// Posiciones:
//   beforebegin(hermano anterior)
//   afterbegin(primer hijo)
//   beforeend(ultimo hijo)
//   afterend(hermano siguiente)
// */
// /* const $cards = document.querySelector(".cards"),
//   $newCard = document.createElement("figure");
// let $contenCard = `
//   <img src="https://placeimg.com/200/200/any" alt="Any">
//   <figcaption></figcaption>
// `;
// $newCard.classList.add("card");
// $newCard.insertAdjacentHTML("afterbegin", $contenCard);
// $cards.insertAdjacentElement("beforeend", $newCard);
// $newCard.querySelector("figcaption").insertAdjacentText("afterbegin", "Any"); */
// //$cards.prepend($newCard);
// //$cards.append($newCard);
// //$cards.before($newCard);
// //$cards.after($newCard);
// /*
/* **********     Curso JavaScript: 72. DOM: Manejadores de Eventos - #jonmircha y Curso JavaScript: 73. DOM: Eventos con Parámetros y Remover Eventos - #jonmircha     ********** */
/*
Los eventos son los mecanismos que tenemos en JavaScript para controlar las acciones del usuario y definir el comportamiento del documento en cierto momento o cuando se cumplan ciertas condiciones.
Las funciones que se ejecutan en un evento se llaman Event Handler (Manejador de Eventos). */

// function holaMundo() {
//   alert("Hola niño Polla ==)");
//   console.log(Event);
// }

// const $eventoSemantico = document.getElementById("evento-semantico"),
//   $eventoMultiple = document.getElementById("evento-multiple");
// $eventoSemantico.onclick = holaMundo;
// $eventoSemantico.onclick = function (e) {
//   alert("Hola niño polla ==) Manejador de eventos semantico");
//   console.log(e);
// };
// $eventoMultiple.addEventListener("click", holaMundo);
// $eventoMultiple.addEventListener("click", (e) => {
//   alert("Hola Mundo niño polla ==) manejador de eventos multiple");
//   console.log(e);
//   console.log(e.type);
//   console.log(e.target);
//   console.log(Event);
// });

// /**
//  * 📝 Los Eventos

//     👉 Es aquel mecanismo que tenemos en JS para poder controlar las acciones del usuario y definir ciertos comportamientos del documento q sucedan en cierto momento o cuando se cumplan algunas condiciones.

//     👉 Ahora, las funciones q se ejecutan en un Evento es lo q se conoce como el Event Handler o traducido Manejadores de Eventos, o tmb Observadores o Escuchadores.

//     👉 Hay 3 maneras de definir los Eventos en JS :
//  */

// /* ************************************************************************************************************************************** */

//    //1️⃣ COMO ATRIBUTO DEL HTML

//    //👀 Muy importante:
//    /*👉 Esta función se va a convertir en el Manejador de Eventos (Event Handler)
//     *👉 Cuando una función se convierte en un Event Handler, es decir una función que se ejecuta en un Evento, nosostros podemos acceder a un Objeto especial q es el Evento en sí, y eso lo podemos acceder con la palabra reservada 'event'
//    */
//     function holaMundo(){
//        alert('Holaaa Mundo')
//        console.log(event)  //👈 con esto en la consola, se desencadena un tipo de Objeto MouseEvent (evento del Mouse), y dentro de él se encuentran dos propiedades muy importantes: type y target.

//       //👉 type.- es el tipo de evento q se desencadeno
//       //👉 target.- es el elemento que origino el evento

//       //👉 Dentro de target estan todos los eventos y propiedades q se pueden usar por dicho elemento y los q estan en null son eventos q no tienen definida dicha función en dichos eventos. En cambio vemos el evento onclick q si tiene definida la funcion holaMundo
//     }

// /* *************************************************************************************************************************************** */

//    //2️⃣ COMO MANEJADOR SEMÁNTICO

//    //👉 Se le dice manejador semántico xq va teniendo una coherencia en la manera como la vamos definiendo
//    //👉 cuando definamos un evento como semántico igualamos el evento semántico al nombre de la funcion pero sin (), xq los () hacen q cuando se cargue el Navegador se va a ejecutar
//     const $eventoSemantico = document.getElementById('evento-semantico')
//     $eventoSemantico.onclick = holaMundo //👈 no le ponemos () a la función xq sino al momento q se recarga el Navegador, se estará ejecutando el evento, y luego la consola nos dará undefined, xq el objeto event q mandamos a la consola no estará definido, xq la función se ejecutó asi como va, osea a la hora de cargar como tiene los parentesis se ejecuta.

//    //👇 esta es otra manera de definir un Evento de tipo semántico, puede ser una función anónima o una arrow function
//      $eventoSemantico.onclick = function(e){  //👈 Toda función q se convierte en un Manejador de Eventos, es decir una función q se ejecuta en algun momento en un evento no puede recibir parámetros, el único parámetro q recibe es el evento en sí, que lo podemos obtener con la palabra 'event' o en algunos casos abreviar con la letra 'e'
//         alert(`Hola Manejador de Evento Semántico`)
//         console.log(e)
//         console.log(event)
//      }

// /* ************************************************************************************************************************************** */

//    //3️⃣ COMO MANEJADOR MÚLTIPLE

//    //👉 Si deseamos asignar varias funciones a un mismo elemento, tenemos el método .addEventListener() que nos perimite levantar un Escuchador de Eventos
//    const $eventoMultiple = document.getElementById('evento-multiple')
//    //👇 este método .addEventListener() recibe varios parámetros, pero sólo nos enfocaremos en 2:
//    // 1° Nombre de evento
//    // 2° Función q se va a ejecutar, pero sin parentesis
//    $eventoMultiple.addEventListener('click', holaMundo)

//    //👇 tmb podemos trabajar con una arrow function
//    $eventoMultiple.addEventListener('click', (e) => { //👈 este addEventListener nos dará 2 alerts y 4 console.log, nos da 2 alerts xq en vez de reemplazar como pasa más arriba con el evento de tipo semántico, esta es la ventaja de maneja evento múltiple con addEventListener xq puede ejecutar más funciones
//       alert(`Hola Manejador de Evento Múltiple`)
//       console.log(e)
//       console.log(e.type)
//       console.log(e.target)
//       console.log(event)
//    } )

//📝NOTA:
//👉 Cuando escuchemos de Event Handler hacemos referencia a la función q se ejecuta en dicho Evento
//👉 Una misma función nos puede servir para desencadenar eventos en diferentes elementos
//👉 Los eventos semánticos tienen un pequeño inconveniente, si nos damos cuenta, cuando hablabamos de los Prototipos y hablamos de la funcion constructora, y si queriamos agregarle más métodos teniamos q agregarle a su Prototipo, aqui pasa algo similar, el onclick es como agregarle un método al Prototipo del Modelo de eventos del elemento del DOM q se estamos manejando
//👉 Habrá veces q a lo mejor a un mismo elemento Html le asignemos diferentes Manejadores de Eventos, es decir diferentes funciones q hagan diferentes cosas, bueno la limitante q tienen los eventos de tipo semántico, es q una vez q esta definido el evento semántico sólo va poder ejecutar una función.
//👉 Toda función q se convierte en un Manejador de Eventos, es decir una función q se ejecuta en algún momento en un evento no puede recibir parámetros, el único parámetro q recibe es el evento en sí, que lo podemos obtener con la palabra 'event' o en algunos casos abreviar con la letra 'e'

/* **********     Curso JavaScript: 74. DOM: Flujo de Eventos (Burbuja y Captura) - #jonmircha     ********** */
/*
Si no se especifica el parámetro boolean, el valor por defecto es false.
  Si el boolean es falso se ejecuta la fase de burbuja (ir del elemento más interno al más externo <body>)
  Si el boolean es verdadero se ejecuta la fase de captura (ir del elemento más externo <body> al más interno)
*/
