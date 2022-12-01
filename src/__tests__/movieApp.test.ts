/**
* @jest-environment jsdom
*/

import { jest, test, describe } from "@jest/globals";
import { IMovie } from "../ts/models/Movie";
import * as functions from "./../ts/movieApp";
import * as services from "./../ts/services/movieservice";

test("Should submit form", () => {
    //arrange
    document.body.innerHTML = `<form id="searchForm">
    <input type="text" id="searchText" placeholder="Skriv titel här" />
    <button type="submit" id="search">Sök</button></form>`;
  let spy = jest.spyOn(functions, "handleSubmit").mockImplementation(
    () => 
      new Promise((resolve) => {
        resolve();
    })
);
    //act
    functions.init();
    (document.getElementById("searchForm") as HTMLFormElement).submit();

    //assert
    expect(spy).toHaveBeenCalled();
});

jest.mock("./../ts/services/movieservice.ts");

test("Should create HTML for list", async () => {
  //Arrange
  document.body.innerHTML = `<div id="movie-container"></div>`;
  let container: HTMLDivElement = document.getElementById(
    "movie-container"
  ) as HTMLDivElement;

  let searchText: string = "Hundar är söta";
  let movies: IMovie[] = await services.getData(searchText);

  //Act
  functions.createHtml(movies, container);

  //Assert
  expect(document.querySelectorAll("div.movie").length).toBe(3);
  expect(document.querySelectorAll("h3").length).toBe(3);
  expect(document.querySelectorAll("img").length).toBe(3);
});



