import ghibli from "./data/ghibli/ghibli.js";

let films = ghibli.films;
// console.log(films);
const peliculas = document.getElementById("tarjetas");
for (let i = 0; i < films.length; i++) {
    // console.log(films[i].title);
    // console.log(films[i].poster);
    peliculas.innerHTML += `
    <div class = "portada">
    <img src="${films[i].poster}" alt"">

    <div class = "textos_portada">
        <h2>${films[i].title}</h2>
        <p>${films[i].release_date}</p>
        <h2>${films[i].director}</h2>
        </div>

        <div class = "boton_modal">
        <a href="#" class="botonModal">+</a>
        </div>
    </div>`
}

//<p>${films[i].description}</p>
/* 
films = ghibli.films;
const directores = document.getElementById(Hayao Miyazaki);
for(let i = 0; i < films.length; i++){
    directores.innerHTML=`
    <div class = "d1">
    <
    `
} */




