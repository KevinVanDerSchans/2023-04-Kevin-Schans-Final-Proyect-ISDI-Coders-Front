import { act, render, screen } from "@testing-library/react";
import { useDanceCourses } from "./use.danceCourses";
import { MemoryRouter as Router } from "react-router-dom";
import { Provider, useDispatch } from "react-redux";
import { store } from "../../core/store/store";
import userEvent from "@testing-library/user-event";

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: jest.fn().mockReturnValue(jest.fn()),
}));

const mockId = "1";

const mockDanceCourse = {
  id: "1",
  courseName: "line salsa",
  priceCourse: "29,99",
} as unknown as FormData;

function TestComponent() {
  const {
    loadDanceCourses,
    createDanceCourses,
    deleteDanceCourses,
  } = useDanceCourses();

  return (
    <>
      <button onClick={() => createDanceCourses(mockDanceCourse)}></button>
      <button onClick={() => loadDanceCourses()}></button>
      <button onClick={() => deleteDanceCourses(mockId)}></button>
    </>
  );
}

describe("Given the useUsers custom hook", () => {
  let elements: HTMLElement[];
  beforeEach(async () => {
    await act(() =>
      render(
        <Router>
          <Provider store={store}>
            <TestComponent></TestComponent>
          </Provider>
        </Router>
      )
    );
    elements = screen.getAllByRole("button");
  });
  describe("When is rendered", () => {
    test("Then the createDanceCourses function should be called", async () => {
      await act(async () => {
        await userEvent.click(elements[0]);
        expect(useDispatch()).toHaveBeenCalled();
      });
    });

    test("Then the loadDanceCourses function should be called", async () => {
      await act(async () => {
        await userEvent.click(elements[1]);
        expect(useDispatch()).toHaveBeenCalled();
      });
    });

    test("Then the deleteDanceCourses function should be called", async () => {
      await act(async () => {
        await userEvent.click(elements[3]);
        expect(useDispatch()).toHaveBeenCalled();
      });
    });
  });
});
