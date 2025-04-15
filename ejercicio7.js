/*Dada una lista de canciones, clasifícalas en un objeto donde las claves sean los géneros y los valores sean arrays de canciones de ese género. Utiliza bucles para estructurar este objeto e imprime el resultado por consola.*/
const tracks = [
  { title: 'Enter Sandman', genre: 'Metal' },
  { title: 'Back in Black', genre: 'Rock' },
  { title: 'Bohemian Rhapsody', genre: 'Rock' },
  { title: 'Blinding Lights', genre: 'Pop' },
  { title: 'Old Town Road', genre: 'Country' },
  { title: 'Smells Like Teen Spirit', genre: 'Grunge' },
  { title: 'Bad Guy', genre: 'Pop' },
  { title: 'Thunderstruck', genre: 'Rock' },
  { title: 'Hotel California', genre: 'Rock' },
  { title: 'Stairway to Heaven', genre: 'Rock' }
]
const genreSongs = {
  metal: [],
  rock: [],
  pop: [],
  country: [],
  grunge: []
}
for (const track of tracks) {
  if (track.genre === 'Metal') {
    genreSongs.metal.push(track)
  } else if (track.genre === 'Rock') {
    genreSongs.rock.push(track)
  } else if (track.genre === 'Pop') {
    genreSongs.pop.push(track)
  } else if (track.genre === 'Country') {
    genreSongs.country.push(track)
  } else {
    genreSongs.grunge.push(track)
  }
}
console.log('Canciones clasificadas por género musical:')
for (const genre in genreSongs) {
  console.log(
    `${genre}: ${genreSongs[genre].map((track) => track.title).join(', ')}`
  )
}
