import RootLayout from '../../app/layout';
import { render } from '@testing-library/react';

describe('RootLayout', () => {
  it('renders the name of the app', () => {
    render(<RootLayout children={undefined} />);
  });
});
