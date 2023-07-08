import { AppRoutes } from "./app.routes";
import { MemoryRouter as Router } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import "@testing-library/jest-dom";

describe('Given the AppRoutes component', () => {
  describe('When it is instantiated with the Home route', () => {

    const homeMockComponent = jest.fn().mockReturnValue(<h1>Home</h1>);
    jest.mock("../home/home", () => homeMockComponent);

    let element: HTMLElement;

    beforeEach(async () => {
      await act(async () => {
        render(
          <Router initialEntries={[""]} initialIndex={0}>
            <AppRoutes></AppRoutes>
          </Router>
        );
      });

      element = screen.getByText("Home");
    });

    test('Then it should ', () => {
      expect(homeMockComponent).toHaveBeenCalled();
      expect(element).toBeInTheDocument();
    });
  });

  describe("When it is instantiated with the MyCourses route", () => {

    const myCoursesMockComponent = jest.fn().mockReturnValue(<h1>My courses</h1>);
    jest.mock("../my.courses/my.courses", () => myCoursesMockComponent);

    let element: HTMLElement;

    beforeEach(async () => {
      await act(async () => {
        render(
          <Router initialEntries={["/myCourses"]} initialIndex={0}>
            <AppRoutes></AppRoutes>
          </Router>
        );
      });

      element = screen.getByText("My courses");
    });

    test("Then it should be in the document", () => {
      expect(myCoursesMockComponent).toHaveBeenCalled();
      expect(element).toBeInTheDocument();
    });
  });


  describe("When it is instantiated with the LogInAndSignUp route", () => {
    const loginMockComponent = jest.fn().mockReturnValue(<h1>Login</h1>);
    jest.mock("../logInAndSignUp/log.in.and.sign.up", () => loginMockComponent);

    let element: HTMLElement;

    beforeEach(async () => {
      await act(async () => {
        render(
          <Router initialEntries={["/logInAndSignUp"]} initialIndex={0}>
            <AppRoutes></AppRoutes>
          </Router>
        );
      });

      element = screen.getByText("Login");
    });

    test("Then it should be in the document", () => {
      expect(loginMockComponent).toHaveBeenCalled();
      expect(element).toBeInTheDocument();
    });
  });

  describe("When it is instantiated with the Form route", () => {

    const formMockComponent = jest.fn().mockReturnValue(<h1>Form</h1>);
    jest.mock("../form/form.page", () => formMockComponent);

    let element: HTMLElement;

    beforeEach(async () => {
      await act(async () => {
        render(
          <Router initialEntries={["/form"]} initialIndex={0}>
            <AppRoutes></AppRoutes>
          </Router>
        );
      });

      element = screen.getByText("Form");
    });

    test("Then it should be in the document", () => {
      expect(formMockComponent).toHaveBeenCalled();
      expect(element).toBeInTheDocument();
    });
  });

  describe("When it is instantiated with the Details route", () => {

    const detailsMockComponent = jest.fn().mockReturnValue(<h1>Details</h1>);
    jest.mock("../my.courses/list/danceCourse.details.page/danceCourse.details.page", () => detailsMockComponent);

    let element: HTMLElement;

    beforeEach(async () => {
      await act(async () => {
        render(
          <Router initialEntries={["/details/:id"]} initialIndex={0}>
            <AppRoutes></AppRoutes>
          </Router>
        );
      });

      element = screen.getByText("Details");
    });

    test("Then it should be in the document", () => {
      expect(detailsMockComponent).toHaveBeenCalled();
      expect(element).toBeInTheDocument();
    });
  });

  describe("When it is instantiated with the Contact route", () => {

    const contactMockComponent = jest.fn().mockReturnValue(<h1>Contact</h1>);
    jest.mock("../contact/contact", () => contactMockComponent);

    let element: HTMLElement;

    beforeEach(async () => {
      await act(async () => {
        render(
          <Router initialEntries={["/*"]} initialIndex={0}>
            <AppRoutes></AppRoutes>
          </Router>
        );
      });

      element = screen.getByText("Contact");
    });

    test("Then it should be in the document", () => {
      expect(contactMockComponent).toHaveBeenCalled();
      expect(element).toBeInTheDocument();
    });
  });

});
