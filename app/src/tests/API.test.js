import "@testing-library/jest-dom/extend-expect";
import API from "../api/API";

global.fetch = jest.fn();

test("get predictions", async () => {
    const mockedResult = { id: "test" };
    fetch.mockReturnValue(
        Promise.resolve({
            json: () => Promise.resolve(mockedResult)
        }));

    const result = await API.getPrediction(null, 0);

    expect(result).toBe(mockedResult);
});