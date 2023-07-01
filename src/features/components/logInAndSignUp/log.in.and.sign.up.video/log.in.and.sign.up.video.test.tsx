import { render, screen } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom";
import { LogInAndSignUpVideo } from "./log.in.and.sign.up.video";

describe('Given the LogInAndSignUpVideo component', () => {
  describe('When it is instantiated', () => {

    beforeEach(() => {
      render(
        <Router>
          <LogInAndSignUpVideo></LogInAndSignUpVideo>
        </Router>
      );
    });

    test('Then it should be in the document', () => {
      expect(screen.getByRole("video")).toBeInTheDocument();
    });
  });
});
