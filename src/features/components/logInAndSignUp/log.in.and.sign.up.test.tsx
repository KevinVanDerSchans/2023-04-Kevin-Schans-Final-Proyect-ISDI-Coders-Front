import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../../../core/store/store";
import LogInAndSignUp from "./log.in.and.sign.up";

describe('Given the LogInAndSignUp component', () => {
  describe('When it is instantiated', () => {

    beforeEach(() => {
      render(
        <Provider store={store}>
          <Router>
            <LogInAndSignUp></LogInAndSignUp>
          </Router>
        </Provider>
      );
    });

    test('Then it should be in the document', () => {
      const element = screen.getByRole('link');
      expect(element).toBeInTheDocument();
    });
  });
});
