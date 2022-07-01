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
// function saludar(nombre = "Desconocid@") {
//   alert(`Hola ${nombre}`);
//   console.log(Event);
// }

// const $eventoSemantico = document.getElementById("evento-semantico"),
//   $eventoMultiple = document.getElementById("evento-multiple"),
//   $eventoRemover = document.getElementById("evento-remover");
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
// $eventoMultiple.addEventListener("click", () => {
//   saludar();
//   saludar("Victor");
// });

// const removerDobleClick = (e) => {
//   alert(`Removiendo el evento de tipo ${e.type}`);
//   console.log(e);
//   $eventoRemover.removeEventListener("dblclick", removerDobleClick);
//   $eventoRemover.disabled = true;
// };

// $eventoRemover.addEventListener("dblclick", removerDobleClick);

const $divsEventos = document.querySelectorAll(".eventos-flujo div");
console.log($divsEventos);
