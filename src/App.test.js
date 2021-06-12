import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const element = screen.getById('okr__app--test');
  expect(element).toHaveClass("okr__app--wrapper");
});
