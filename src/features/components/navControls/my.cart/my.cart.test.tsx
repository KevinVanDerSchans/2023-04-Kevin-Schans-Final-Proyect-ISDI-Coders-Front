import { render, screen } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { MyCart } from "./my.cart";

describe('Given the MyCart component', () => {
  describe('When it is instantiated', () => {
    beforeEach(() => {
      render(
        <Router>
          <MyCart></MyCart>
        </Router>
      );
    });

    test('Then it should be in the document and has the correct link property', () => {
      const element = screen.getByRole("link");

      expect(element).toBeInTheDocument();
      expect(element).toHaveAttribute('href', '/');
    });

    test('Then it should render the FontAwesomeIcon component with the correct icon', () => {
      const iconElement = screen.getByLabelText('Online shopping cart for dance courses');

      expect(iconElement).toBeInTheDocument();
      expect(iconElement).toHaveClass(`fa-${faCartShopping.iconName}`);
    });
  });
});
