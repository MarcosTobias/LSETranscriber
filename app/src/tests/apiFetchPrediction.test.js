
import "@testing-library/jest-dom/extend-expect";
import apiFetchPrediction from "../api/apiFetchPrediction";
import API from "../api/API";
import BG from "../img/bg.jpg";

global.fetch = jest.fn();

test("prediction fetching", async () => {
    jest.spyOn(API, "getPrediction").mockImplementation(() => {
        return [];
    });

    const mockedResult = BG;
    fetch.mockReturnValue(
        Promise.resolve({
            json: () => Promise.resolve(mockedResult)
        }));

    const result = apiFetchPrediction(BG, 0);

    expect(result).toBeDefined();

});

