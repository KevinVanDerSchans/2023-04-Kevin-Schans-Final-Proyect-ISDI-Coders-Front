import { render, screen } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../../../../../../core/store/store";
import "@testing-library/jest-dom";
import { DanceCourseDetails } from "./danceCourse.details";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: jest.fn().mockReturnValue({ id: "1" }),
}));

jest.mock("../../../../../hooks/use.danceCourses", () => ({
  useDanceCourses: jest.fn().mockReturnValue({
    danceCourses: [
      {
        id: "1",
        courseName: "line salsa",
        level: "Intermediate",
        priceCourse: "29,99",
        totalClasses: 27,
        largeDescription: "abcdef",
        video:
          { url:
            "line-salsa.mp4"
          },
      },

      {
        id: "2",
        courseName: "bachata fusion",
        level: "Advanced",
        priceCourse: "39,99",
        totalClasses: 32,
        largeDescription: "abcdef",
        video:
          { url:
            "bachata-fusion.mp4"
          },
      },
    ],
  }),
}));

describe("Given a DanceCourseDetails component", () => {
  describe("When it is instantiated", () => {

    test("It should render the details", () => {

      render(
        <Router initialEntries={["/details/1"]}>
          <Provider store={store}>
            <DanceCourseDetails />
          </Provider>
        </Router>
      );

      const danceCourseDetails = screen.getByRole("heading");
      expect(danceCourseDetails).toBeInTheDocument();
    });
  });
});
