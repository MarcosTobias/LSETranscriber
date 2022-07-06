import { fireEvent, render } from '@testing-library/react';
import App from "../App";
import { Provider } from "react-redux";
import store from "../redux/store";
import "@testing-library/jest-dom/extend-expect";

test('user arrives to the home page', async () => {
    const { getByRole } = render(<Provider store={store}><App /></Provider>);

    await new Promise(res => setTimeout(() => {
      expect(true).toBe(true)
      res()
    }, 2500))
  
    const button = getByRole("button", { name: "nav.language" });
  
    expect(button).toBeInTheDocument();

    fireEvent.click(button);

    const spanish = getByRole("button", { name: "nav.spanish" });

    expect(spanish).toBeInTheDocument();

    fireEvent.click(spanish);

    const english = getByRole("button", { name: "nav.english" });

    expect(english).toBeInTheDocument();

    fireEvent.click(english);
  });