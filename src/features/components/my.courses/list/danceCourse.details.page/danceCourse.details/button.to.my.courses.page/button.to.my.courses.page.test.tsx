import { render, screen } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom";
import { ButtonToMyCoursesPage } from "./button.to.my.courses.page";

describe('Given the ButtonToHomePage component', () => {
  describe('When it is instantiated', () => {

    render(
      <Router>
        <ButtonToMyCoursesPage></ButtonToMyCoursesPage>
      </Router>
    );

    test('Then it should be in the document and has the correct Link property', () => {
      const element = screen.getByRole("link");
      expect(element).toBeInTheDocument();
      expect(element).toHaveAttribute("href", "/myCourses");
    });
  });
});
