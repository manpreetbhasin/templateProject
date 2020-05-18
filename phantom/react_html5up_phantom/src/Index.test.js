import {render} from '@testing-library/react';
import Elements from './pages/Index.js';

test('renders learn react link', () => {
  const { getByText } = render(<Elements />);
  const linkElement = getByText(/Elements/i);
  expect(linkElement).toBeInTheDocument();
});
