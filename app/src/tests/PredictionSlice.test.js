import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render } from '@testing-library/react';
import PredictionView from "../components/prediction/PredictionView";
import { Provider } from "react-redux";
import store from "../redux/store";
import * as apiFetchPrediction from "../api/apiFetchPrediction";
import i18n from "../i18n";
import { I18nextProvider } from 'react-i18next';
import { Suspense } from 'react';

const Loader = () => (
    <div className="loader">
      <div>loading---</div>
    </div>
  );

const spy = jest.spyOn(apiFetchPrediction, "default");
jest.setTimeout(20000);

test("no hand detected twice", async () => {

    spy.mockReturnValueOnce({msg: 'success', prediction: 'No hand detected'});
    spy.mockReturnValueOnce({msg: 'success', prediction: 'No hand detected'});

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

    const button3 = getByRole("button", { name: "predictions.start" });

    expect(button3).toBeInTheDocument();

    fireEvent.click(button3);

    await new Promise(res => setTimeout(() => {
        fireEvent.click(button3);
        
        expect(spy).toHaveBeenCalled();

        res();
      }, 5000))

});

