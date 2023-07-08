import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter as Router } from "react-router-dom";
import Login from "./login";
import { store } from "../../../core/store/store";
import "@testing-library/jest-dom";

describe("Given the Login component", () => {
  describe("When it is rendered", () => {

    beforeEach(async () => {
      render(
        <Provider store={store}>
          <Router>
            <Login></Login>
          </Router>
        </Provider>
      );
    });

    test("Then the heading <h2> should be in the document", () => {
      const element = screen.getByRole("heading");
      expect(element).toBeInTheDocument();
    });

    test("Then the <button> should be used", async () => {
      const element = screen.getByRole("button");

      await fireEvent.click(element);
    });
  });
});
