import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter as Router } from "react-router-dom";
import { TopCourses } from "./top.courses";

describe('Given the TopCourses component', () => {
  describe('When it is rendered', () => {

    beforeEach(() => {
      render(
        <Router>
          <TopCourses></TopCourses>
        </Router>
      );
    });

    test('Then it should be in the document and display the correct dance titles', () => {
      const articles = screen.getAllByRole("article");

      expect(articles).toHaveLength(3);

      expect(articles[0]).toHaveTextContent("LINE SALSA");
      expect(articles[1]).toHaveTextContent("BACHATA");
      expect(articles[2]).toHaveTextContent("HIP HOP");
    });
  });
});
