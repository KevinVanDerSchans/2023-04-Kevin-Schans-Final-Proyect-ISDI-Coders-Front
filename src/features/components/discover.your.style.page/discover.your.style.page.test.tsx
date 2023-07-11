import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../../../core/store/store";
import DiscoverYourStylePage from "./discover.your.style.page";

describe('Given the DiscoverYourStyle component', () => {
  describe('When it is instantiated', () => {

    beforeEach(() => {
      render(
        <Provider store={store}>
          <Router>
            <DiscoverYourStylePage></DiscoverYourStylePage>
          </Router>
        </Provider>
      );
    });

    test('Then it should be in the document', () => {
      const headerElement = screen.getByRole('banner');
      expect(headerElement).toBeInTheDocument();
    });

    test('Then it should be in the document', () => {
      const headerElement = screen.getByRole('banner');
      expect(headerElement).toBeInTheDocument();
    });

    test('Then the Footer component is rendered', () => {
      const footerElement = screen.getByRole('contentinfo');
      expect(footerElement).toBeInTheDocument();
    });

    test('Then the 404 Error image has the correct source and alt attributte', () => {
      const element = screen.getByAltText("404 Error Image");

      expect(element).toBeInTheDocument();
      expect(element).toHaveAttribute('src', '/assets/404Error.jpg');
    });
  });
});
