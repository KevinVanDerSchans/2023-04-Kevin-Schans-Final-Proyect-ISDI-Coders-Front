import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter as Router } from "react-router-dom";
import { Header } from "./header";
import { Provider } from "react-redux";
import { store } from "../../../core/store/store";

describe('Given the Header component', () => {
  describe('When it is instantiated', () => {

    const options = [
      { url: "/" , label: "HOME" },
      { url: "/myCourses", label: "MY COURSES" },
      { url: "/contact", label: "CONTACT" }
    ]

    beforeEach(() => {
      render(
        <Provider store={store}>
          <Router>
            <Header options={ options }></Header>
          </Router>
        </Provider>
      );
    });

    test('Then the Header should be in the document', () => {
      const element = screen.getAllByRole("banner");
      expect(element[0]).toBeInTheDocument();
    });

    test('Then the logo image has the correct link, source and alt attributte', () => {
      const element = screen.getByAltText("Alex & Melanie's company logo");
      const link = element.closest('a');

      expect(element).toBeInTheDocument();
      expect(link).toHaveAttribute('href', '/');
      expect(element).toHaveAttribute('src', '/assets/logo.png');
    });

    test('Then the NavControls component is rendered', () => {
      const navControls = screen.getByRole('navigation');
      expect(navControls).toBeInTheDocument();
    })
  });
});
