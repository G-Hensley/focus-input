import { render, screen } from '@testing-library/react';
import Home from './page';

describe('Focus Input', () => {
  test('renders input and focuses it', () => {
    render(<Home />);
    const input = screen.getByPlaceholderText('Enter your name');
    expect(input).toBeInTheDocument();
    expect(input).toHaveFocus();
  });

  test('renders the submit button', () => {
    render(<Home />);
    const button = screen.getByRole('button', { name: 'Submit' });
    expect(button).toBeInTheDocument();
  });
  
})