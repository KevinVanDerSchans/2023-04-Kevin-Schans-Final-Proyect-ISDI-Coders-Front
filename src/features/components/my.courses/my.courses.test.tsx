import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../../../core/store/store";
import MyCourses from "./my.courses";

describe('Given the MyCourses component', () => {
  describe('When it is instantiated', () => {

    beforeEach(() => {
      render(
        <Provider store={store}>
          <Router>
          <MyCourses></MyCourses>
          </Router>
        </Provider>
      );
    });

    test('Then the Header should be in the document', () => {
      const headerElement = screen.getByRole('banner');
      expect(headerElement).toBeInTheDocument();
    });

    test('Then the Footer component is rendered', () => {
      const footerElement = screen.getByRole('contentinfo');
      expect(footerElement).toBeInTheDocument();
    });
  });
});
