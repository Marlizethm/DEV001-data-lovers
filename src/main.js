import data from "./data/ghibli/ghibli.js";
import { filterDir, newPelis, oldPelis } from "./data.js";

const films = data.films;

function visualizarPelis(dataMovies) {

    const peliculas = document.getElementById("tarjetas");
    peliculas.innerHTML = "";
    for (let i = 0; i < dataMovies.length; i++) {
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

/**------------- EVENTO CLICK PARA EL MENU HOME ----------------**/

const home = document.getElementById("home")
home.addEventListener("click", () => {
    visualizarPelis(films)
});

/**------------- EVENTO CLICK PARA EL MENU DIRECTORES ----------------**/

const directoresPel = document.querySelectorAll(".menu-dir");

directoresPel.forEach((director) => {
    director.addEventListener("click", () => {
        const showDirector = filterDir(films, director.id)
        visualizarPelis(showDirector);
        // console.log(showDirector);
    })
});

/**------------- EVENTO CLICK PARA ORDENAR PELICULAS DE LA MAS RECIENTE A LA MENOS RECIENTE ----------------**/

const newestMovies = document.getElementById("newMovies")
newestMovies.addEventListener("click", () => {
    const showNewestMovies = newPelis(films)
    visualizarPelis(showNewestMovies);
});

/**------------- EVENTO CLICK PARA ORDENAR PELICULAS DE LA MAS RECIENTE A LA MENOS RECIENTE ----------------**/

const oldestMovies = document.getElementById("oldMovies")
oldestMovies.addEventListener("click", () => {
    const showOldestMovies = oldPelis(films)
    visualizarPelis(showOldestMovies);
});
