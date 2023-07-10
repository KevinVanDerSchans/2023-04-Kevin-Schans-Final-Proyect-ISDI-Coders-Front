import { DanceCourseCard } from "./danceCourse.card";
import { render, screen } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom";
import { store } from "../../../../../core/store/store";
import { Provider } from "react-redux";

describe("Given the DanceCourseCard component", () => {
  describe("When it is intantiated", () => {

    render(
      <Provider store={store}>
        <Router>
          <DanceCourseCard item={{
            id: '3',
            courseName: 'line salsa',
            level: 'Intermediate',
            priceCourse: '19,99',
            totalClasses: 10,
            initialDescription: 'abc',
            largeDescription: "abcdef",
            image: {
              urlOriginal: "",
              url: "https://example.image.jpg",
              mimetype: "",
              size: 0,
            },
            video: {
              urlOriginal: "",
              url: "https://example.video.jpg",
              mimetype: "",
              size: 0,
            },
          }}
          ></DanceCourseCard>
        </Router>
      </Provider>
    );

    test("Then it should be in the document", () => {
      const element = screen.getByRole("listitem");
      expect(element).toBeInTheDocument();
    });
  });
});
