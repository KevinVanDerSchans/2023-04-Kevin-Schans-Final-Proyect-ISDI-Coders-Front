import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter as Router, useNavigate } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../../../core/store/store";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Register from "./register";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

describe("Given the Register component", () => {
  describe("When it is rendered", () => {

    const navigateMock = jest.fn();

    beforeEach(() => {
      (useNavigate as jest.Mock).mockReturnValue(navigateMock);

      render(
        <Provider store={store}>
          <Router>
            <Register />
          </Router>
        </Provider>
      );
    });

    test("Then it should render the register form", () => {
      const form = screen.getByRole("heading", { name: "Register" });

      expect(form).toBeInTheDocument();
    });

    test("Then the user should fill in the form and click the Register button", () => {
      const usernameInput = screen.getByPlaceholderText ("Username");
      const emailInput = screen.getByPlaceholderText ("E-mail address");
      const passwordInput = screen.getByPlaceholderText("Password");
      const buttonElement = screen.getByRole('button', { name: /register/i });

      userEvent.type(usernameInput, "Erik");
      userEvent.type(emailInput, "erikvdsd@hotmail.com");
      userEvent.type(passwordInput, "12345");

      fireEvent.click(buttonElement);

      expect(usernameInput).toHaveValue("");
      expect(emailInput).toHaveValue("");
      expect(passwordInput).toHaveValue("");
    });
  });
});
