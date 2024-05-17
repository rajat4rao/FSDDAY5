class Movie {
  constructor(title, studio, rating = "PG") {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }

  static getPG(movies) {
    return movies.filter(movie => movie.rating === "PG");
  }
}


const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");


const movies = [
  new Movie("Aavesham", "PR Movies", "R"),
  new Movie("Romancham", "Leo Entertainment", "PG"),
  new Movie("Rorsach", "DG Movies", "PG"),
];

const pgMovies = Movie.getPG(movies);
console.log(pgMovies);
