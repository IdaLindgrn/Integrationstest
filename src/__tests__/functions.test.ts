import { IMovie } from "../ts/models/Movie";
import * as functions from "../ts/functions";

test("Should sort list descending from a-ö", () => {
    //Arrange
    let bestMovies: IMovie[] = [
    {
      Title: "My Little Pony 3",
      imdbID:"3",
      Type: "Movie",
      Poster: "My Little Pony 3",
      Year: "1678",
     },
     {
      Title: "My Little Pony 1",
      imdbID:"1",
      Type: "Movie",
      Poster: "My Little Pony 1",
      Year: "2002",
     },
     {
      Title: "My Little Pony 3",
      imdbID:"4",
      Type: "Movie",
      Poster: "My Little Pony 3",
      Year: "1938",
     },
     {
        Title: "My Little Pony 2",
        imdbID:"2",
        Type: "Movie",
        Poster: "My Little Pony 2",
        Year: "2007",
     },
    ];

    //Act
    functions.movieSort(bestMovies);

    //Assert
    expect(bestMovies[0].Title).toBe("My Little Pony 1");
    expect(bestMovies[3].Title).toBe("My Little Pony 3");
});


test("Should sort list descending from ö-a", () => {
    //Arrange
    let bestMovies: IMovie[] = [
    {
      Title: "My Little Pony 3",
      imdbID:"3",
      Type: "Movie",
      Poster: "My Little Pony 3",
      Year: "1678",
     },
     {
      Title: "My Little Pony 1",
      imdbID:"1",
      Type: "Movie",
      Poster: "My Little Pony 1",
      Year: "2002",
     },
     {
      Title: "My Little Pony 3",
      imdbID:"4",
      Type: "Movie",
      Poster: "My Little Pony 3",
      Year: "1938",
     },
     {
        Title: "My Little Pony 2",
        imdbID:"2",
        Type: "Movie",
        Poster: "My Little Pony 2",
        Year: "2007",
     },
    ];

    //Act
    functions.movieSort(bestMovies, false);

    //Assert
    expect(bestMovies[0].Title).toBe("My Little Pony 3");
    expect(bestMovies[3].Title).toBe("My Little Pony 1");
});