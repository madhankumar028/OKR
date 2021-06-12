import { render } from '@testing-library/react';
import App from './App';

const renderComponent = () => render(<App />);

describe('Main', () => {
  it("renders the home page and expect the wrapper element to have okr__app--wrapper class", () => {
    const { getByTestId } = renderComponent();
    const homePage = getByTestId("okr__app--test");

    expect(homePage).toHaveClass("okr__app--wrapper");
  });
});
