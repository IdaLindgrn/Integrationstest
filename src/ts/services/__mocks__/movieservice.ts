import { IOmdbResponse } from "../../models/IOmdbResponse";
import { IMovie } from "../../models/Movie";

export const mockData: IMovie[] = [
  {
  Title: "Harry Zotter 1",
  imdbID:"1",
  Type: "Movie",
  Poster: "Harry Zotter 1",
  Year: "2001",
 },
 {
  Title: "Harry Botter 2",
  imdbID:"2",
  Type: "Movie",
  Poster: "Harry Botter 2",
  Year: "2002",
 },
 {
  Title: "Harry Potter 3",
  imdbID:"3",
  Type: "Movie",
  Poster: "Harry Potter 3",
  Year: "2003",
 }
];

export const getData = async(): Promise<IMovie[]> => { //Promise som hämtar här -> <IMovie[]>
  return new Promise((resolve) => {
    resolve(mockData); //skicka direkt tillbaka datan
  });
};