import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render } from '@testing-library/react';
import Predictions from "../components/prediction/Predictions";
import { Provider } from "react-redux";
import store from "../redux/store";
import i18n from "../i18n";
import { I18nextProvider } from 'react-i18next';
import { Suspense } from 'react';

const Loader = () => (
    <div className="loader">
      <div>loading---</div>
    </div>
  );

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

    const { getByRole } = render(
        <Suspense fallback={<Loader />}>
            <Provider store={store}>
                <I18nextProvider i18n={i18n}>
                    <Predictions />
                </I18nextProvider>
            </Provider>
        </Suspense>
    )

    await new Promise(res => setTimeout(() => {
        expect(true).toBe(true)
        res()
        }, 2500))

    const button = getByRole("button", { name: "predictions.read" });

    expect(button).toBeInTheDocument();

    fireEvent.click(button);

    const button2 = getByRole("button", { name: "predictions.remove" });

    expect(button2).toBeInTheDocument();

    fireEvent.click(button2);

    const button3 = getByRole("button", { name: "predictions.start" });

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

    const { queryByText } = render(
        <Suspense fallback={<Loader />}>
            <Provider store={store}>
                <I18nextProvider i18n={i18n}>
                    <Predictions />
                </I18nextProvider>
            </Provider>
        </Suspense>
    )

    await new Promise(res => setTimeout(() => {
        expect(true).toBe(true)
        res()
        }, 2500))

    const button = queryByText("predictions.read");

    expect(button).toBeInTheDocument();

});
