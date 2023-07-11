import { render, screen } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import { LearnOnline } from "./learn.online";
import "@testing-library/jest-dom";

describe('Given the LearnOnline component', () => {
  describe('When it is instantiated', () => {

    render(
      <Router>
        <LearnOnline></LearnOnline>
      </Router>
    );

    test('Then it should be in the document', () => {

      const learnOnlineElement = screen.getByRole('img');
      expect(learnOnlineElement).toBeInTheDocument();
    });
  });
});
