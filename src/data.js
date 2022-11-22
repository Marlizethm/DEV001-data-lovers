export const filterDir = (data, director) => {
  const filtrarDirector = data.filter (data => data.director === director);{
    return filtrarDirector;
  }};


/**------------- FUNCION DE LA PELICULA MÁS RECIENTE A LA MENOS RECIENTE ----------------**/

export const newPelis = (data) => {
  let nuevas
  for(let i = 0; i < data.length; i++){
    nuevas = [...data].sort(function(a, b) {
      return b.release_date - a.release_date
    });
    return nuevas;
  }
};

/**------------- FUNCION DE LA PELICULA MENOS RECIENTE A LA MÁS RECIENTE ----------------**/

export const oldPelis = (data) => {
  let viejas
  for(let i = 0; i < data.length; i++){
    viejas = [...data].sort(function(a, b) {
      return a.release_date - b.release_date
    });
    return viejas;
  }
};












