import Nav from '../../components/layout/Nav';
import { render, screen } from '@testing-library/react';

describe('Nav', () => {
  beforeEach(() => {
    render(<Nav />);
  });
  
  it('Should render logo and name of the page', () => {
    const logo = screen.getByAltText('logo');
    const nameOfApp = screen.getByText("Today's Meal");
    expect(logo).toBeInTheDocument;
    expect(nameOfApp).toBeInTheDocument;
  });
});
