import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom'
import { Hero } from './hero';

describe('Given the Hero component', () => {
  describe('When it is instantiated', () => {

    beforeEach(() => {
      render(
        <Router>
          <Hero></Hero>
        </Router>
      );
    });

    test('Then it should be in the document', () => {
      const element = screen.getAllByRole("video");
      expect(element[0]).toBeInTheDocument();
    });

    test('Then the video should have the correct source and attributes', () => {
      const element = screen.getByRole('video');

      expect(element).toHaveAttribute('src', '/assets/heroVideo.mp4');
      expect(element).toHaveAttribute('autoPlay');
      expect(element).toHaveAttribute('loop');
    });
  });
});
