import React from "react";
import { render, screen } from "@testing-library/react";
import {
  horizontallyAligned,
  diagonallyAligned,
  verticallyAligned,
} from "./utils";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

describe("Check if there are 3 crosses aligned", () => {
  test("Not aligned horizontally", () => {
    const squares1 = ["1", "2", "1", "", "", "", "", "", ""];
    expect(horizontallyAligned(squares1)).toEqual(false);

    const squares2 = ["", "1", "1", "1", "", "", "", "", ""];
    expect(horizontallyAligned(squares1)).toEqual(false);
  });

  test("Horizontally", () => {
    const squares1 = ["1", "1", "1", "", "", "", "", "", ""];
    expect(horizontallyAligned(squares1)).toEqual(true);

    const squares2 = ["", "", "", "1", "1", "1", "", "", ""];
    expect(horizontallyAligned(squares2)).toEqual(true);

    const squares3 = ["", "", "", "", "", "", "1", "1", "1"];
    expect(horizontallyAligned(squares3)).toEqual(true);
  });

  test("Not aligned diagonally", () => {
    const squares1 = ["1", "", "", "", "1", "", "", "", "2"];
    expect(diagonallyAligned(squares1)).toEqual(false);
  });

  test("Diagonally", () => {
    const squares1 = ["1", "", "", "", "1", "", "", "", "1"];
    expect(diagonallyAligned(squares1)).toEqual(true);

    const squares2 = ["", "", "1", "", "1", "", "1", "", ""];
    expect(diagonallyAligned(squares2)).toEqual(true);
  });

  test("Not aligned vertically", () => {
    const squares1 = ["1", "", "", "1", "", "", "2", "", ""];
    expect(verticallyAligned(squares1)).toEqual(false);
  });

  test("Vertically columns 1", () => {
    const squares1 = ["1", "", "", "1", "", "", "1", "", ""];
    expect(verticallyAligned(squares1)).toEqual(true);
  });

  test("Vertically columns 2", () => {
    const squares1 = ["", "1", "", "", "1", "", "", "1", ""];
    expect(verticallyAligned(squares1)).toEqual(true);
  });

  test("Vertically columns 3", () => {
    const squares1 = ["", "", "1", "", "", "1", "", "", "1"];
    expect(verticallyAligned(squares1)).toEqual(true);
  });
});
