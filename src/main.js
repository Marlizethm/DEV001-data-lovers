import ghibli from "./data/ghibli/ghibli.js";

// console.log(ghibli);
const btnAbrirIntro = document.querySelector('#btn-abrir-intro'),  /*Estoy llamando el ID del botón para abrir la caja de mi intro*/
    introduccion = document.querySelector('#intro');

btnAbrirIntro.addEventListener('click', () => {   /*Evento clic para luego pasarle una función de tipo flecha para que ejecute la parte de abrir la caja de la intro y otro para girar el botón*/
// import data from './data/data.js';
    btnAbrirIntro.classList.toggle('active');   /*Necesito acceder al botón, luego que acceda a su lista de clases y luego que tenga un toggle de la clase active*/
    introduccion.classList.toggle('active');
} );

let films = ghibli.films;
// console.log(films);

const peliculas = document.getElementById("peliculas");

for (let i = 0; i < films.length; i++){
    // console.log(films[i].title);
    // console.log(films[i].poster);
    peliculas.innerHTML += `
    <div class = "tarjeta">
    <h2>${films[i].title}</h2>
    <img src="${films[i].poster}" alt"">
    <p>${films[i].description}</p>
    <p>${films[i].release_date}</p>
    </div>
    `
}
