import { render, screen } from "@testing-library/react";
import { LogInAndSignUpButton } from "./log.in.and.sign.up.button";
import { MemoryRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom";

describe('Given the LogInButton component', () => {
  describe('When it is instantiated', () => {

    beforeEach(() => {
      render(
        <Router>
          <LogInAndSignUpButton></LogInAndSignUpButton>
        </Router>
      );
    });

    test('Then it should be in the document and has the correct Link property', () => {
      const element = screen.getByRole("link");

      expect(element).toBeInTheDocument();
      expect(element).toHaveAttribute("href", "/logInAndSignUp");
    });

    test('Then the button has the correct text content', () => {
      const elementTextContent = screen.getByText("Log in | Sign up");
      expect(elementTextContent).toBeInTheDocument();
    });
  });
});
