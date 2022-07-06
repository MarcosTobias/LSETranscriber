import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render } from '@testing-library/react';
import Predictions from "../components/prediction/Predictions";
import { Provider } from "react-redux";
import store from "../redux/store";

const redux = require("react-redux");
redux.useSelector = jest.fn();

test("onClick read delete and record", async () => {
    let counter = 0;

    redux.useSelector.mockImplementation(() => {
        if(counter == 0)
            return ['H'];
        if(counter == 2) {
            counter = 0;
            return false;
        }
    })

    const { getByRole } = render(<Provider store={store}>
        <Predictions/>
    </Provider>)

    const button = getByRole("button", { name: "Read" });

    expect(button).toBeInTheDocument();

    fireEvent.click(button);

    const button2 = getByRole("button", { name: "Remove" });

    expect(button2).toBeInTheDocument();

    fireEvent.click(button2);

    const button3 = getByRole("button", { name: "Start/stop" });

    expect(button3).toBeInTheDocument();

    fireEvent.click(button3);

});

test("empty prediction", async () => {
    let counter = 0;

    redux.useSelector.mockImplementation(() => {
        if(counter == 0)
            return [];
        if(counter == 2) {
            counter = 0;
            return false;
        }
    })

    const { queryByText } = render(<Provider store={store}>
        <Predictions/>
    </Provider>)

    const button = queryByText("Read");

    expect(button).toBeInTheDocument();

});
