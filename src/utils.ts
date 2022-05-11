export const horizontallyAligned = (squares: string[]) => {
  for (let i = 0; i < squares.length; i++) {
    if (i % 3 === 0) {
      if (
        [...squares].slice(i, i + 3).every((value) => value === "1") ||
        [...squares].slice(i, i + 3).every((value) => value === "2")
      ) {
        return true;
      }
    }
  }
  return false;
};

export const diagonallyAligned = (squares: string[]) => {
  const diagonals: string[][] = [[], []];
  for (let i = 0; i < squares.length; i++) {
    if (i % 4 === 0) {
      diagonals[0].push(squares[i]);
    }

    if (i % 2 === 0 && i > 0 && i < 8) {
      diagonals[1].push(squares[i]);
    }
  }

  const isAligned =
    diagonals[0].every((value) => value === "1") ||
    diagonals[0].every((value) => value === "2") ||
    diagonals[1].every((value) => value === "1") ||
    diagonals[1].every((value) => value === "2");

  return isAligned;
};

export const isAligned = (squares: string[]) =>
  horizontallyAligned(squares) || diagonallyAligned(squares);
