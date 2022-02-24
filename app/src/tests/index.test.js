import React from "react";
import ReactDOM from "react-dom";
import store from "../redux/store";
import { Provider } from "react-redux";
import App from "../App";
import "@testing-library/jest-dom/extend-expect";

jest.mock("react-dom", () => ({ render: jest.fn() }));

describe("Application root", () => {
    it("should render without crashing", () => {
        const div = document.createElement("div");
        div.id = "root";
        document.body.appendChild(div);
        require("../index.js");
        expect(ReactDOM.render).toHaveBeenCalledWith(<React.StrictMode>
            <Provider store={store}>
                <App />
            </Provider>

        </React.StrictMode >, div);
    });
});