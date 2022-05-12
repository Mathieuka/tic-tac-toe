import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { isAligned } from "./utils";
import TicTacToeProvider from "./Provider/TictactoeProvider";
import App from "./App";

describe("TicTacToe", () => {
  test("Player 1 win horizontally", () => {
    render(
      <TicTacToeProvider>
        <App />
      </TicTacToeProvider>
    );
    userEvent.click(screen.getByTestId("square-0"));
    userEvent.click(screen.getByTestId("square-6"));
    userEvent.click(screen.getByTestId("square-1"));
    userEvent.click(screen.getByTestId("square-7"));
    userEvent.click(screen.getByTestId("square-2"));
    expect(screen.getByText(/player 1 wins/i)).toBeInTheDocument();
  });

  test("Player 1 win vertically", () => {
    render(
      <TicTacToeProvider>
        <App />
      </TicTacToeProvider>
    );
    userEvent.click(screen.getByTestId("square-0"));
    userEvent.click(screen.getByTestId("square-1"));
    userEvent.click(screen.getByTestId("square-3"));
    userEvent.click(screen.getByTestId("square-4"));
    userEvent.click(screen.getByTestId("square-6"));
    expect(screen.getByText(/player 1 wins/i)).toBeInTheDocument();
  });

  test("Player 1 win Diagonally", () => {
    render(
      <TicTacToeProvider>
        <App />
      </TicTacToeProvider>
    );
    userEvent.click(screen.getByTestId("square-0"));
    userEvent.click(screen.getByTestId("square-1"));
    userEvent.click(screen.getByTestId("square-4"));
    userEvent.click(screen.getByTestId("square-2"));
    userEvent.click(screen.getByTestId("square-8"));
    expect(screen.getByText(/player 1 wins/i)).toBeInTheDocument();
  });

  describe("Check if there are 3 crosses aligned", () => {
    test("Not aligned horizontally", () => {
      const squares1 = ["1", "2", "1", "", "", "", "", "", ""];
      expect(isAligned(squares1)).toEqual(false);

      const squares2 = ["", "1", "1", "1", "", "", "", "", ""];
      expect(isAligned(squares2)).toEqual(false);
    });

    test("Aligned horizontally", () => {
      const squares1 = ["1", "1", "1", "", "", "", "", "", ""];
      expect(isAligned(squares1)).toEqual(true);

      const squares2 = ["", "", "", "1", "1", "1", "", "", ""];
      expect(isAligned(squares2)).toEqual(true);

      const squares3 = ["", "", "", "", "", "", "1", "1", "1"];
      expect(isAligned(squares3)).toEqual(true);
    });

    test("Not aligned diagonally", () => {
      const squares1 = ["1", "", "", "", "1", "", "", "", "2"];
      expect(isAligned(squares1)).toEqual(false);
    });

    test("Aligned diagonally", () => {
      const squares1 = ["1", "", "", "", "1", "", "", "", "1"];
      expect(isAligned(squares1)).toEqual(true);

      const squares2 = ["", "", "1", "", "1", "", "1", "", ""];
      expect(isAligned(squares2)).toEqual(true);
    });

    test("Not aligned vertically", () => {
      const squares1 = ["1", "", "", "1", "", "", "2", "", ""];
      expect(isAligned(squares1)).toEqual(false);
    });

    test("Vertically Aligned", () => {
      const squares1 = ["1", "", "", "1", "", "", "1", "", ""];
      expect(isAligned(squares1)).toEqual(true);
      const squares2 = ["", "1", "", "", "1", "", "", "1", ""];
      expect(isAligned(squares2)).toEqual(true);
      const squares3 = ["", "", "1", "", "", "1", "", "", "1"];
      expect(isAligned(squares3)).toEqual(true);
    });
  });
});
