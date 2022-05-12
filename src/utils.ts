const allValueIsEqual = (arr: string[], values: string[]) => {
  let isEqual = false;
  values.forEach((val) => {
    if (arr.every((value) => value === val)) {
      isEqual = true;
    }
  });

  return isEqual;
};

export const horizontallyAligned = (squares: string[]) => {
  for (let i = 0; i < squares.length; i++) {
    if (i % 3 === 0) {
      const row = [...squares].slice(i, i + 3);
      if (allValueIsEqual(row, ["1", "2"])) {
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

  return (
    allValueIsEqual(diagonals[0], ["1", "2"]) ||
    allValueIsEqual(diagonals[1], ["1", "2"])
  );
};

export const verticallyAligned = (squares: string[]) => {
  const columns: string[][] = [[], [], []];
  for (let i = 0; i < squares.length; i++) {
    if (i % 3 === 0) {
      columns[0].push(squares[i]);
      columns[1].push(squares[i + 1]);
      columns[2].push(squares[i + 2]);
    }
  }
  return (
    allValueIsEqual(columns[0], ["1", "2"]) ||
    allValueIsEqual(columns[1], ["1", "2"]) ||
    allValueIsEqual(columns[2], ["1", "2"])
  );
};

export const isAligned = (squares: string[]) =>
  horizontallyAligned(squares) ||
  diagonallyAligned(squares) ||
  verticallyAligned(squares);
