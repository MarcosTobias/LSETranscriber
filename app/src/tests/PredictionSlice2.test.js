import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render } from '@testing-library/react';
import PredictionView from "../components/prediction/PredictionView";
import { Provider } from "react-redux";
import store from "../redux/store";
import * as apiFetchPrediction from "../api/apiFetchPrediction";

const spy = jest.spyOn(apiFetchPrediction, "default");
jest.setTimeout(20000);

test("sign detected", async () => {

    spy.mockReturnValueOnce({'msg': 'success', 'prediction': 'K', 'index': 2, 'confidence': 0.28});

    const { getByRole } = render(<Provider store={store}>
        <PredictionView/>
    </Provider>)

    const button3 = getByRole("button", { name: "predictions.start" });

    expect(button3).toBeInTheDocument();

    fireEvent.click(button3);

    await new Promise(res => setTimeout(() => {
        fireEvent.click(button3);
        
        expect(spy).toHaveBeenCalled();

        res();
      }, 2500))

});