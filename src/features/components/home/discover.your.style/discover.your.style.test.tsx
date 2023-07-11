import { render, screen } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom";
import { DiscoverYourStyle } from "./discover.your.style";

describe('Given the DiscoverYourStyle component', () => {
  describe('When it is instantiated', () => {

    beforeEach(() => {
      render(
        <Router>
          <DiscoverYourStyle></DiscoverYourStyle>
        </Router>
      );
    });

    test('Then it should be in the document', () => {
      const titleElement = screen.getByText("DISCOVER YOUR STYLE!");
      expect(titleElement).toBeInTheDocument();
    });

    test('Then it render the correct number of <li> elements', () => {
      const listItems = screen.getAllByRole("listitem");
      expect(listItems).toHaveLength(4);
    });

    test('Then the button has the correct link', () => {
      const buttonElement = screen.getByRole("link", { name: "LET'S GO!" });

      expect(buttonElement).toBeInTheDocument();
      expect(buttonElement.getAttribute("href")).toBe("/discoverYourStyle");
      expect(buttonElement.getAttribute("target")).toBe("_blank");
    });
  });
});

