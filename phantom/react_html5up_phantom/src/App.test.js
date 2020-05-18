import {render} from '@testing-library/react';
import Elements from './pages/App.js';

test('renders learn react link', () => {
  const { getByText } = render(<Elements />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
