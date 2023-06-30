import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter as Router } from "react-router-dom";
import { SelectLanguage } from "./select.language";

describe('Given the SelectLanguage component', () => {
  describe('When it is instantiated', () => {

    beforeEach(() => {
      render(
        <Router>
          <SelectLanguage></SelectLanguage>
        </Router>
      );
    });

    test('Then it should be in the document and has the correct link property', () => {
      const element = screen.getByRole("link");

      expect(element).toBeInTheDocument();
      expect(element).toHaveAttribute('href', '/');
    });

    test('Then the image should be rendered with the correct source and alt text', () => {
      const imageElement = screen.getByAltText("Flag to change language");

      expect(imageElement).toBeInTheDocument();
      expect(imageElement).toHaveAttribute('src', '/assets/englishFlag.png');
    });
  });
});
