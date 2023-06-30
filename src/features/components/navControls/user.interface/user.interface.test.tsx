import { render, screen } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { UserInterface } from "./user.interface";

describe('Given the UserInterface', () => {
  describe('When it is instantiated', () => {
    beforeEach(() => {
      render(
        <Router>
          <UserInterface></UserInterface>
        </Router>
      );
    });

    test('Then it should be in the document with the correct link property', () => {
      const element = screen.getByRole("link");

      expect(element).toBeInTheDocument();
      expect(element).toHaveAttribute("href", "/");
    });

    test('Then it should render the FontAwesomeIcon component with the correct icon', () => {
      const iconElement = screen.getByLabelText("User interface to review your data");

      expect(iconElement).toBeInTheDocument();
      expect(iconElement).toHaveClass(`fa-${faUser.iconName}`);
    });
  });
});
