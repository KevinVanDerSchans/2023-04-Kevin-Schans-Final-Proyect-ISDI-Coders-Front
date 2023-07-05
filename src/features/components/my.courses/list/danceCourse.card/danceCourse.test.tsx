import { DanceCourse } from "../../../../models/danceCourse";
import { DanceCourseCard } from "./danceCourse.card";
import { render, screen } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom";

const mockDanceCourse = {
  id: '3',
  image: {
    url: 'line-salsa.png'
  },
  courseName: 'line salsa',
  priceCourse: '19,99',
  initialDescription: 'abc',
  level: 'Intermediate',
}

describe("Given the DanceCourseCard component", () => {
  describe("When it is intantiated", () => {

    beforeEach(() => {
      render(
        <Router>
          <DanceCourseCard item={mockDanceCourse as DanceCourse}></DanceCourseCard>
        </Router>
      );
    });

    test("Then it should be in the document", () => {
      const element = screen.getByRole("listitem");
      expect(element).toBeInTheDocument();
    });
  });
});
