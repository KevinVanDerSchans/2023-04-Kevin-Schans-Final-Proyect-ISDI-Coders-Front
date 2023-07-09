import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import Login from "./login";
import { store } from "../../../core/store/store";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

describe("Given the Login component", () => {
  describe("When the login form is used", () => {

    beforeEach(() => {
      render(
        <Provider store={store}>
          <MemoryRouter>
              <Login></Login>
          </MemoryRouter>
        </Provider>
      );
    });

    test("Then check if the user fills the login form and clicks submit", () => {

      const usernameInput = screen.getByPlaceholderText("Username");
      const passwordInput = screen.getByPlaceholderText("Password");
      const submitButton = screen.getByRole("button");

      userEvent.type(usernameInput, "test");
      userEvent.type(passwordInput, "test");

      fireEvent.click(submitButton);

      expect(usernameInput).toHaveValue("");
      expect(passwordInput).toHaveValue("");
    });

    test("Then it should render the login form", () => {

      const loginForm = screen.getByRole("button")
      expect(loginForm).toBeInTheDocument;
    });
  });
});
