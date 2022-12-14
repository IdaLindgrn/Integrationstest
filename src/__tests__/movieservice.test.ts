/**
* @jest-environment jsdom
*/
import { IMovie } from "../ts/models/Movie";
import { getData } from "../ts/services/movieservice";
import { mockData } from "../ts/services/__mocks__/movieservice";

//jest.mock("./../ts/services/movieservice.ts");

jest.mock("axios", () => ({
    get: async () => {
        return new Promise((resolve) => {
            resolve({data: {Search: mockData}})
        })
    }
}))


test("Should get mock data", async () => {
    //arrange
    let searchText: string = "hej";
    //expect.assertions(1);
    //act
    let response: IMovie[] = await getData(searchText);
    //assert
    expect(response.length).toBe(3);
    expect(response[0].Title).toBe("Harry Zotter 1");
});

