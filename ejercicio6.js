/*Agrupa las películas de Star Wars por década de lanzamiento en un objeto donde las claves son las décadas y los valores son arrays de películas.
Utiliza bucles para lograrlo e imprime el objeto final por consola.*/
const starWarsMovies = [
  { title: 'A New Hope', releaseYear: 1977 },
  { title: 'The Empire Strikes Back', releaseYear: 1980 },
  { title: 'Return of the Jedi', releaseYear: 1983 },
  { title: 'The Phantom Menace', releaseYear: 1999 },
  { title: 'Attack of the Clones', releaseYear: 2002 },
  { title: 'Revenge of the Sith', releaseYear: 2005 },
  { title: 'The Force Awakens', releaseYear: 2015 },
  { title: 'The Last Jedi', releaseYear: 2017 },
  { title: 'The Rise of Skywalker', releaseYear: 2019 },
  { title: 'Rogue One', releaseYear: 2016 },
  { title: 'Solo', releaseYear: 2018 }
]
const starWars = {
  decade70: [],
  decade80: [],
  decade90: [],
  decade2000: [],
  decade2010: []
}
for (const movie of starWarsMovies) {
  if (movie.releaseYear < 1980) {
    starWars.decade70.push(movie)
  } else if (movie.releaseYear >= 1980 && movie.releaseYear < 1990) {
    starWars.decade80.push(movie)
  } else if (movie.releaseYear >= 1990 && movie.releaseYear < 2000) {
    starWars.decade90.push(movie)
  } else if (movie.releaseYear >= 2000 && movie.releaseYear < 2010) {
    starWars.decade2000.push(movie)
  } else {
    starWars.decade2010.push(movie)
  }
}
console.log('Las peliculas de Star Wars agrupadas por década de lanzamiento:')
console.log(starWars)
