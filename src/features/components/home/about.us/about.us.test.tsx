import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import { AboutUs } from './about.us';
import { MemoryRouter as Router } from "react-router-dom";

describe('Given the AboutUs component', () => {
  describe('When it is instantiated', () => {

    beforeEach(() => {
      render(
        <Router>
          <AboutUs></AboutUs>
        </Router>
      );
    });
    test('Then the image should be in the document with the button element', () => {
      const imageAndButtonElement = screen.getByAltText('Alex & Melanie. Contact them pressing the button.');

      expect(imageAndButtonElement).toBeInTheDocument();
      expect(imageAndButtonElement).toBeInTheDocument();
    });

    test('Then the button element should navigate to "/" link', () => {
      const buttonElement = screen.getByText('Contact us!');
      expect(buttonElement).toBeInTheDocument();

      fireEvent.click(buttonElement);
      expect(window.location.pathname).toBe('/');
    });
  });
});
