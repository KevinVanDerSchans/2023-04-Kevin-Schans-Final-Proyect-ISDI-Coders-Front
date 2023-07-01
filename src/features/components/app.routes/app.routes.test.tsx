import { AppRoutes } from "./app.routes";
import { MemoryRouter as Router} from "react-router-dom";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";

const MockComponent = jest.fn().mockReturnValue(<h1>Routes</h1>)
jest.mock("../home/home", () => MockComponent)
jest.mock("../myCourses/myCourses", () => MockComponent);
jest.mock("../contact/contact", () => MockComponent);
jest.mock("../logInAndSignUp/log.in.and.sign.up", () => MockComponent);

describe('Given the AppRoutes component', () => {
  describe('When it is instantiated with the Home route', () => {

    let element: HTMLElement;

    beforeEach(async () => {
      await act(async () => {
        render(
          <Router initialEntries={["/"]} initialIndex={0}>
              <AppRoutes></AppRoutes>
          </Router>
        );
      });

      element = screen.getByText("Routes");
    });

    test('Then it should be in the document', () => {
      expect(MockComponent).toHaveBeenCalled();
      expect(element).toBeInTheDocument();
    });
  });

  describe("When it is instantiated with the MyCourses route", () => {
    let element: HTMLElement;

    beforeEach(async () => {
      await act(async () => {
        render(
          <Router initialEntries={["/myCourses"]} initialIndex={1}>
            <AppRoutes></AppRoutes>
          </Router>
        );
      });

    element = screen.getByText("Routes");
  });

  test("Then it should be in the document", () => {
    expect(MockComponent).toHaveBeenCalled();
    expect(element).toBeInTheDocument();
  });
 });

 describe("When it is instantiated with the Contact route", () => {
  let element: HTMLElement;

  beforeEach(async () => {
    await act(async () => {
      render(
        <Router initialEntries={["/contact"]} initialIndex={2}>
          <AppRoutes></AppRoutes>
        </Router>
      );
    });

  element = screen.getByText("Routes");
  });

  test("Then it should be in the document", () => {
    expect(MockComponent).toHaveBeenCalled();
    expect(element).toBeInTheDocument();
    });
  });

  describe("When it is instantiated with the LogInAndSignUp route", () => {
    let element: HTMLElement;

    beforeEach(async () => {
      await act(async () => {
        render(
          <Router initialEntries={["/logInAndSignUp"]} initialIndex={3}>
            <AppRoutes></AppRoutes>
          </Router>
        );
      });

    element = screen.getByText("Routes");
    });

    test("Then it should be in the document", () => {
      expect(MockComponent).toHaveBeenCalled();
      expect(element).toBeInTheDocument();
    });
  });
});
