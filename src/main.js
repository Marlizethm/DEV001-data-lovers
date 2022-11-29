import data from "./data/ghibli/ghibli.js";
import { filterDir, newPelis, oldPelis,} from "./data.js";

const pelis = data.films;



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




// /**------------- FUNCIÓN PARA VISUALIZAR EL SCORE Y EL TITULO----------------**/
//   function visualizarScore(scoreFilms) {
//       const scorePelis = document.getElementById("statistics");
//       scorePelis.innerHTML = "";
//       for (let i = 0; i < scoreFilms.length; i++) {
//         scorePelis.innerHTML += `
//         <div class = "textos_score">
//         <h2>${scoreFilms[i].title}</h2>
//         <h2>${scoreFilms[i].rt_score}</h2>
//         </div>
//     `
//   }
// }
// window.onload = () => { visualizarScore(data.films) };


// // const scoreFilms = document.getElementById("statistics");
// //   scoreFilms.textContent = score (rt_score, "score");

// /**------------- EVENTO CLICK PARA EL MENU STATISTICS ----------------**/
// const puntaje = document.getElementById("statistics");
//   puntaje.addEventListener("click", () => {
//     const punScore = score (pelis)
//       visualizarScore(punScore)
// });




/**------------- EVENTO CLICK PARA EL MENU HOME ----------------**/

const home = document.getElementById("home")
home.addEventListener("click", () => {
    visualizarPelis(pelis)
});



/**------------- EVENTO CLICK PARA EL MENU DIRECTORES ----------------**/

const directoresPel = document.querySelectorAll(".menu-dir");

directoresPel.forEach((director) => {
    director.addEventListener("click", () => {
        const showDirector = filterDir(pelis, director.id)
        visualizarPelis(showDirector);
        // console.log(showDirector);
    })
});

/**------------- EVENTO CLICK PARA ORDENAR PELICULAS DE LA MAS RECIENTE A LA MENOS RECIENTE ----------------**/

const newestMovies = document.getElementById("newMovies")
newestMovies.addEventListener("click", () => {
    const showNewestMovies = newPelis(pelis)
    visualizarPelis(showNewestMovies);
});

/**------------- EVENTO CLICK PARA ORDENAR PELICULAS DE LA MAS RECIENTE A LA MENOS RECIENTE ----------------**/

const oldestMovies = document.getElementById("oldMovies")
oldestMovies.addEventListener("click", () => {
    const showOldestMovies = oldPelis(pelis)
    visualizarPelis(showOldestMovies);
});

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

// /**------------- FUNCIÓN PARA MOSTRAR EL MODAL ----------------**/
// const abrir = document.getElementById("modal_id");
// const cerrar = document.getElementById("close");
// const modal = document.getElementById("modal");

// abrir.addEventListener("click", function () {
//     modal.style.display = "block";
// });

// cerrar.addEventListener("click", function () {
//     modal.style.display = "none";
// });




{/* <div class="boton_Modal">
        <div class="contenedor_modal">
          <button class="close" id="close">X</button>
        </div>
      </div> */}
