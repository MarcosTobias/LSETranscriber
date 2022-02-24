import { render } from '@testing-library/react';
import App from "../App";
import { Provider } from "react-redux";
import store from "../redux/store";
import "@testing-library/jest-dom/extend-expect";

test('user arrives to the home page', async () => {
    const { getByRole } = render(<Provider store={store}><App /></Provider>);
  
      const button = getByRole("button", { name: "Read" });
  
      expect(button).toBeInTheDocument();
  });