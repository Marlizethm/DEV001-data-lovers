import data from "./data/ghibli/ghibli.js";
// import ghibli from "./data/ghibli/ghibli.js";
import {filterDir} from "./data.js";



const films = data.films;
// console.log(films);

const peliculas = document.getElementById("tarjetas");
for (let i = 0; i < films.length; i++) {
    // console.log(films[i].title);
    // console.log(films[i].poster);
    peliculas.innerHTML += `
    <div class = "portada">
    <img src="${films[i].poster}" alt"">
    <div class = "boton_modal">
        <a href="#" class="botonModal">+</a>
        </div>

    <div class = "textos_portada">
        <h2>${films[i].title}</h2>
        <p>${films[i].release_date}</p>
        <h2>${films[i].director}</h2>
        </div>
    </div>`
}


const directoresPel = document.querySelectorAll(".menu-dir");

directoresPel.forEach((director) => {
  // console.log(d)
  director.addEventListener("click", () => {
    const showDirector = filterDir (films, director.id)
    console.log(showDirector);
  }
  )
});







// const botonHayao = document.getElementById("Hayao-Miyazaki");
// // const botonHiroyuki = document.getElementById("Hiroyuki-Morita");
// // const botonGorō = document.getElementById("Gorō-Miyazaki");
// // const botonYoshifumi = document.getElementById("Yoshifumi-Kondō");
// // const botonHiromasa = document.getElementById("Hiromasa-Yonebayashi");
// // const botonIsao = document.getElementById("Isao-Takahata");
// const contenedor = document.getElementById("tarjetas");
// const limpiarContenedor = () => {
//   contenedor.innerHTML = "";
//   };

// const directores = ghibli.films;

// const filterDirector = directores.filter ((films) => {
// return films.director === "Hayao Miyazaki";
// });

// botonHayao.addEventListener ("click", () => {
// limpiarContenedor ();
// filterDirector.forEach ((films) => {
// contenedor.innerHTML += `
// <h2> ${films.director}</h2}`;
// });
// });



