import { MemoryRouter as Router } from "react-router-dom";
import { render, screen, act } from "@testing-library/react";
import { AppRoutes } from "./app.routes";
import "@testing-library/jest-dom";

describe("Given the AppRoutes component", () => {
  describe("When it is instantiate with a route /", () => {
    const MockedComponentHome = jest.fn().mockReturnValue(<h1>Home</h1>);
    jest.mock("../home/Home", () => MockedComponentHome);

    let element: HTMLElement;

    beforeEach(async () => {
      await act(async () =>
        render(
          <Router initialEntries={["/"]} initialIndex={0}>
            <AppRoutes></AppRoutes>
          </Router>
        )
      );

      element = screen.getByText("Home");
    });
    test("Then it should render Home", () => {
      expect(MockedComponentHome).toHaveBeenCalled();
      expect(element).toBeInTheDocument();
    });
  });

  describe("When it is instantiate with a route /myCourses", () => {
    const MockedComponentList = jest.fn().mockReturnValue(<h1>MY COURSES</h1>);
    jest.mock("../my.courses/my.courses", () => MockedComponentList);
    let element: HTMLElement;

    beforeEach(async () => {
      await act(async () =>
        render(
          <Router initialEntries={["/myCourses"]} initialIndex={0}>
            <AppRoutes></AppRoutes>
          </Router>
        )
      );

      element = screen.getByText("MY COURSES");
    });
    test("Then it should render List", () => {
      expect(MockedComponentList).toHaveBeenCalled();
      expect(element).toBeInTheDocument();
    });
  });

  describe("When it is instantiate with a route *", () => {
    const MockedComponentError = jest.fn().mockReturnValue(<h1>Contact</h1>);
    jest.mock("../contact/contact", () => MockedComponentError);
    let element: HTMLElement;

    beforeEach(async () => {
      await act(async () =>
        render(
          <Router initialEntries={["/*"]} initialIndex={0}>
            <AppRoutes></AppRoutes>
          </Router>
        )
      );

      element = screen.getByText("Contact");
    });
    test("Then it should render ErrorPage", () => {
      expect(MockedComponentError).toHaveBeenCalled();
      expect(element).toBeInTheDocument();
    });
  });
});
