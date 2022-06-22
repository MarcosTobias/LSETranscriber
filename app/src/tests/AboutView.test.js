import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render } from '@testing-library/react';
import AboutView from "../components/AboutView";
import { Provider } from "react-redux";
import store from "../redux/store";

test("Capture is dispatched", async () => {
    window.HTMLElement.prototype.scrollIntoView = function() {}
    const { getByText } = render(<Provider store={store}>
        <AboutView />
    </Provider>)

    const header = getByText("Scroll down");

    expect(header).toBeInTheDocument();

    fireEvent.click(header);
});