import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render } from '@testing-library/react';
import HelpView from "../components/help/HelpView";
import { Provider } from "react-redux";
import store from "../redux/store";

test("Capture is dispatched", async () => {
    const { getByText } = render(<Provider store={store}>
        <HelpView />
    </Provider>)
});