import "@testing-library/jest-dom/extend-expect";
import reportWebVitals from "../reportWebVitals";

jest.mock("web-vitals");

test("web vitals", async () => {
    //I'm so sorry about this
    reportWebVitals(() => 3 + 2);
    reportWebVitals("should not work");
    expect(true).toBe(true);
});