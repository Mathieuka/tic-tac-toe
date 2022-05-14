const allValueIsEqual = (arr: string[], values: string[]) => {
  let isEqual = false;
  values.forEach((val) => {
    if (arr.every((value) => value === val)) {
      isEqual = true;
    }
  });

  return isEqual;
};

const getIsVerticallyAligned = (squares: string[]) => {
  const [column1, column2, column3]: string[][] = [[], [], []];
  return (i: number) => {
    if (i % 3 === 0) {
      column1.push(squares[i]);
      column2.push(squares[i + 1]);
      column3.push(squares[i + 2]);
    }
    const column1IsAligned =
      column1.length === 3 && allValueIsEqual(column1, ["1", "2"]);
    const column2IsAligned =
      column2.length === 3 && allValueIsEqual(column2, ["1", "2"]);
    const column3IsAligned =
      column3.length === 3 && allValueIsEqual(column3, ["1", "2"]);

    return column1IsAligned || column2IsAligned || column3IsAligned;
  };
};

const getIsDiagonallyAligned = (squares: string[]) => {
  const diagonals: string[][] = [[], []];
  return (i: number) => {
    if (i % 4 === 0) {
      diagonals[0].push(squares[i]);
    }
    if (i % 2 === 0 && i > 0 && i < 8) {
      diagonals[1].push(squares[i]);
    }
    const diagonal1IsAligned =
      diagonals[0].length === 3 && allValueIsEqual(diagonals[0], ["1", "2"]);
    const diagonal2IsAligned =
      diagonals[1].length === 3 && allValueIsEqual(diagonals[1], ["1", "2"]);

    return diagonal1IsAligned || diagonal2IsAligned;
  };
};

const isHorizontallyAligned = (squares: string[], i: number) => {
  if (i % 3 === 0) {
    const row = [...squares].slice(i, i + 3);
    if (allValueIsEqual(row, ["1", "2"])) {
      return true;
    }
  }
};

export const isAligned = (squares: string[]) => {
  const isDiagonallyAligned = getIsDiagonallyAligned(squares);
  const isVerticallyAligned = getIsVerticallyAligned(squares);

  for (let i = 0; i < squares.length; i++) {
    if (
      isHorizontallyAligned(squares, i) ||
      isVerticallyAligned(i) ||
      isDiagonallyAligned(i)
    ) {
      return true;
    }
  }

  return false;
};

export const isDraw = (squares: string[]) =>
  squares.filter((value) => value).length === 9 && !isAligned(squares);
