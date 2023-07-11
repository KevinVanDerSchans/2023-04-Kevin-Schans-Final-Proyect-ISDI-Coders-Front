import { DanceCourseCard } from "./danceCourse.card";
import { render, screen } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom";
import { DanceCourse } from "../../../../models/danceCourse";
import { Provider } from "react-redux";
import { store } from "../../../../../core/store/store";


const mockDanceCourse = {
  id: "1",
  courseName: 'line salsa',
  level: 'Intermediate',
  priceCourse: '19,99',
  totalClasses: "10",
  initialDescription: 'abc',
  largeDescription: "abcdef",
  image: {
    url: "https://example.image.jpg",
  },
  video: {
    url: "https://example.video.jpg",
  },
}

describe("Given the DanceCourseCard component", () => {
  describe("When it is intantiated", () => {

    beforeEach(() => {
      render(
        <Provider store={store}>
          <Router>
            <DanceCourseCard item={mockDanceCourse as DanceCourse}></DanceCourseCard>
          </Router>
        </Provider>
      )
    })

    test("Then it should be in the document", () => {
      const element = screen.getByRole("listitem");
      expect(element).toBeInTheDocument();
    });
  });
});
