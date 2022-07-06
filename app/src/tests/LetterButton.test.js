import { fireEvent, render } from '@testing-library/react';
import LetterButton from "../components/prediction/LetterButton";
import { Provider } from "react-redux";
import store from "../redux/store";
import "@testing-library/jest-dom/extend-expect";

test('Button with leter render', () => {
  const {getByRole } = render(<Provider store={store}><LetterButton index={0} content={'A'}/></Provider>);
  
  const button = getByRole("button", { name: "A" });

  expect(button).toBeInTheDocument();
});


test('Button without leter render', () => {
  const {getByRole } = render(<Provider store={store}><LetterButton index={0} content={' '}/></Provider>);
  
  const button = getByRole("button", { index: 0 });

  expect(button).toBeInTheDocument();
});

test('Button on click dispatched', () => {
  const {getByRole } = render(<Provider store={store}><LetterButton index={0} content={'A'}/></Provider>);
  
  const button = getByRole("button", { name: "A" });

  fireEvent.click(button);

  expect(button).toBeInTheDocument();
});
