import { render, screen } from "@testing-library/react";
import { DanceCourseCreateForm } from "./danceCourse.create.form";
import "@testing-library/jest-dom";
import { MemoryRouter as Router } from "react-router-dom";
import { store } from "../../../../core/store/store";
import { Provider } from "react-redux";

describe("Given a DanceCourseCreateForm component", () => {
  describe("When it is intantiated", () => {
    render(
      <Router>
        <Provider store={store}>
          <DanceCourseCreateForm></DanceCourseCreateForm>
        </Provider>
      </Router>
    );

    test("Then it should be in the document", () => {
      const element = screen.getAllByRole("heading");
      expect(element[0]).toBeInTheDocument();
    });
  });
});
