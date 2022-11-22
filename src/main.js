import data from "./data/ghibli/ghibli.js";
import { filterDir, newPelis, oldPelis } from "./data.js";

const films = data.films;


/**------------- FUNCIÓN PARA VISUALIZAR LA DATA ----------------**/

function visualizarPelis(dataMovies) {

    const peliculas = document.getElementById("tarjetas");
    peliculas.innerHTML = "";
    for (let i = 0; i < dataMovies.length; i++) {
        peliculas.innerHTML += `
    <div class = "portada">
    <img src="${dataMovies[i].poster}" alt"">

    <button class="boton_id" id="boton_id">+</button>
    <section class="modal" id="modal"></section>


    <div class = "textos_portada">
        <h2>${dataMovies[i].title}</h2>
        <p>${dataMovies[i].release_date}</p>
        <h2>${dataMovies[i].director}</h2>
        </div>
    </div>`
    }
}
window.onload = () => { visualizarPelis(data.films) };


/**--------- FUNCIÓN PARA FLECHA UP */

  window.onscroll = function(){
    if(document.documentElement.scrollTop > 100){
      document.querySelector(".contenedor_boton_top")
      .classList.add("show");
    }else{
      document.querySelector(".contenedor_boton_top")
      .classList.remove("show");
    }
  }

  document.querySelector(".contenedor_boton_top")
  .addEventListener("click", () => {
    window.scrollTo({
      top:0,
      behavior:"smooth"
    });
  });

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

/**------------- FUNCIÓN PARA MOSTRAR EL MODAL ----------------**/
const abrir = document.getElementById("modal_id");
const cerrar = document.getElementById("close");
const modal = document.getElementById("modal");

abrir.addEventListener("click", function () {
    modal.style.display = "block";
});

cerrar.addEventListener("click", function () {
    modal.style.display = "none";
});
/**------------- FUNCIÓN PARA MOSTRAR LA DATA EN EL MODAL ----------------**/



{/* <div class="boton_Modal">
        <div class="contenedor_modal">
          <button class="close" id="close">X</button>
        </div>
      </div> */}
