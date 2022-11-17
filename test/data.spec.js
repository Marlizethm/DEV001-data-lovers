import { filterDir, newPelis, oldPelis } from "../src/data.js";

describe("filterDir", () => {
  const directores = [
    {
      title: "Castle in the Sky",
      director: "Hayao Miyazaki",
      release_date: "1986",
    },

    {
      title: "When Marnie Was There",
      director: "Hiromasa Yonebayashi",
      release_date: "2014",
    },

    {
      title: "Tales from Earthsea",
      director: "Gorō Miyazaki",
      release_date: "2006",
    },
  ];

  it("returns `Directores que hicieron parte de la pelicula`", () => {
    expect(filterDir(directores, "Hayao Miyazaki")).toEqual([
      {
        title: "Castle in the Sky",
        director: "Hayao Miyazaki",
        release_date: "1986",
      },
    ]);
  });
});

describe('newPelis', () => {
  it('is a function', () => {
    expect(typeof newPelis).toBe('function');
  });

  it("Deberia retornar las peliculas mas nuevas", () => {
    const pruebaYear = [
      {
        title: "Castle in the Sky",
        director: "Hayao Miyazaki",
        release_date: "1986",
      },

      {
        title: "When Marnie Was There",
        director: "Hiromasa Yonebayashi",
        release_date: "2014",
      },

      {
        title: "Tales from Earthsea",
        director: "Gorō Miyazaki",
        release_date: "2006",
      },
    ];

    const resultado = [
      {
        title: "When Marnie Was There",
      director: "Hiromasa Yonebayashi",
      release_date: "2014",
      },
      {
        title: "Tales from Earthsea",
        director: "Gorō Miyazaki",
        release_date: "2006",
      },
      {
        title: "Castle in the Sky",
        director: "Hayao Miyazaki",
        release_date: "1986",
      },
    ]

    expect(newPelis(pruebaYear)).toEqual(resultado);
  });
});


describe('oldPelis', () => {
  it('is a function', () => {
    expect(typeof oldPelis).toBe('function');
  });

  it("Deberia retornar las peliculas mas viejas", () => {
    const pruebaYear1 = [
      {
        title: "Castle in the Sky",
        director: "Hayao Miyazaki",
        release_date: "1986",
      },

      {
        title: "When Marnie Was There",
        director: "Hiromasa Yonebayashi",
        release_date: "2014",
      },

      {
        title: "Tales from Earthsea",
        director: "Gorō Miyazaki",
        release_date: "2006",
      },
    ];

    const resultado1 = [
      {
        title: "Castle in the Sky",
        director: "Hayao Miyazaki",
        release_date: "1986",
      },

      {
        title: "Tales from Earthsea",
        director: "Gorō Miyazaki",
        release_date: "2006",
      },

      {
        title: "When Marnie Was There",
      director: "Hiromasa Yonebayashi",
      release_date: "2014",
      },
    ]

    expect(oldPelis(pruebaYear1)).toEqual(resultado1);
  });
});
