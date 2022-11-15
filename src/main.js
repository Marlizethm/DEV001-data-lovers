import data from "./data/ghibli/ghibli.js";
// import ghibli from "./data/ghibli/ghibli.js";
import { filterDir } from "./data.js";

const films = data.films;

function visualizarPelis(dataMovies) {

    const peliculas = document.getElementById("tarjetas");
    peliculas.innerHTML = "";
    for (let i = 0; i < dataMovies.length; i++) {
        // console.log(films[i].title);
        // console.log(films[i].poster);
        peliculas.innerHTML += `
    <div class = "portada">
    <img src="${dataMovies[i].poster}" alt"">
    <div class = "boton_modal">
        <a href="#" class="botonModal">+</a>
        </div>

    <div class = "textos_portada">
        <h2>${dataMovies[i].title}</h2>
        <p>${dataMovies[i].release_date}</p>
        <h2>${dataMovies[i].director}</h2>
        </div>
    </div>`
    }
}
window.onload = () => { visualizarPelis(data.films) };

const directoresPel = document.querySelectorAll(".menu-dir");

directoresPel.forEach((director) => {
    // console.log(d)
    director.addEventListener("click", () => {
        const showDirector = filterDir(films, director.id)
        visualizarPelis(showDirector);

        // console.log(showDirector);
    }
    )
});

// Evento click para el menu HOME

const home = document.getElementById("home")

home.addEventListener("click", () => {
    visualizarPelis(films)
});

