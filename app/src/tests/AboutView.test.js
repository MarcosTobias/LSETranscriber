import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render } from '@testing-library/react';
import AboutView from "../components/about/AboutView";
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

test("Capture is dispatched", async () => {
    window.HTMLElement.prototype.scrollIntoView = function() {}
    const { getByText } = render(
        <Suspense fallback={<Loader />}>
            <Provider store={store}>
                <I18nextProvider i18n={i18n}>
                    <AboutView />
                </I18nextProvider>
            </Provider>
        </Suspense>
    )

    await new Promise(res => setTimeout(() => {
        expect(true).toBe(true)
        res()
      }, 2500))

    const header = getByText("about.scrollDown");

    expect(header).toBeInTheDocument();

    fireEvent.click(header);
});