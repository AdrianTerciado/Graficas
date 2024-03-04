/* Primer apartado */
fetch("https://swapi.dev/api/films/?format=json")
    .then(element => element.json())
    .then(film => {
        let element = [];
        let year = [];
        for (let i = 0; i < film.results.length; i++) {
            element.push(film.results[i].title);
            year.push(film.results[i].release_date.slice(0, 4))
        };
        console.log(element);
        console.log(year);

        new Chartist.Line('.ct-chart1', {
            labels: element,
            series: [
              year
            ]
          }, {
            fullWidth: true,
            chartPadding: {
              right: 40
            }
        });
    });

/* Segundo apartado */
fetch("https://swapi.dev/api/people/?format=json")
    .then(element => element.json())
    .then(film => {

        let personajes = [];
        let movies = [];

        for (let i = 0; i < film.results.length; i++) {

            personajes.push(film.results[i].name);
            movies.push(film.results[i].films.length)
        };
   /*   console.log(personajes);
        console.log(movies); */

        new Chartist.Line('.ct-chart2', {
            labels: personajes,
            series: [
              movies
            ]
          }, {
            fullWidth: true,
            chartPadding: {
              right: 40

            },

        });
    });