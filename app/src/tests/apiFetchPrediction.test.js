
import "@testing-library/jest-dom/extend-expect";
import apiFetchPrediction from "../api/apiFetchPrediction";
import API from "../api/API";
import BG from "../img/bg.jpg";

test("prediction fetching", async () => {
    jest.spyOn(API, "getPrediction").mockImplementation(() => {
        return [];
    });

    global.fetch = jest.fn(() => 
        Promise.resolve(new Response(BG))
    );

    const result = apiFetchPrediction(BG, 0);

    expect(result).toBeDefined();

});

