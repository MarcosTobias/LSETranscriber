import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render } from '@testing-library/react';
import PredictionView from "../components/prediction/PredictionView";
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

jest.setTimeout(20000);

test("Capture is dispatched", async () => {
    const { getByRole } = render(
        <Suspense fallback={<Loader />}>
            <Provider store={store}>
                <I18nextProvider i18n={i18n}>
                    <PredictionView />
                </I18nextProvider>
            </Provider>
        </Suspense>
    )

    await new Promise(res => setTimeout(() => {
        expect(true).toBe(true)
        res()
      }, 2500))

    const button = getByRole("button", { name: "predictions.start" });

    expect(button).toBeInTheDocument();

    fireEvent.click(button);


    //Waiting for the capture timeout in PredictionView
    await new Promise(res => setTimeout(() => {
        expect(true).toBe(true)
        res()
      }, 2500))

    const helpIcon = getByRole("figure").children[0];

    fireEvent.mouseEnter(helpIcon);

    expect(helpIcon).toBeInTheDocument();

});