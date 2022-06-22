import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render } from '@testing-library/react';
import PredictionView from "../components/PredictionView";
import { Provider } from "react-redux";
import store from "../redux/store";

test("Capture is dispatched", async () => {
    const { getByRole } = render(<Provider store={store}>
        <PredictionView />
    </Provider>)

    const button = getByRole("button", { name: "Start/stop" });

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