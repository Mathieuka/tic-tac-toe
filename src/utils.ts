const everySquaresIsEqual = (arr: string[], player: string) =>
  arr.every((value) => value === player);

const getIsVerticallyAligned = (squares: string[], player: string) => {
  const [column1, column2, column3]: string[][] = [[], [], []];
  return (i: number) => {
    if (i % 3 === 0) {
      column1.push(squares[i]);
      column2.push(squares[i + 1]);
      column3.push(squares[i + 2]);
    }
    const column1IsAligned =
      column1.length === 3 && everySquaresIsEqual(column1, player);
    const column2IsAligned =
      column2.length === 3 && everySquaresIsEqual(column2, player);
    const column3IsAligned =
      column3.length === 3 && everySquaresIsEqual(column3, player);

    return column1IsAligned || column2IsAligned || column3IsAligned;
  };
};

const getIsDiagonallyAligned = (squares: string[], player: string) => {
  const [diagonal1, diagonal2]: string[][] = [[], []];
  return (i: number) => {
    if (i % 4 === 0) {
      diagonal1.push(squares[i]);
    }
    if (i % 2 === 0 && i > 0 && i < 8) {
      diagonal2.push(squares[i]);
    }
    const diagonal1IsAligned =
      diagonal1.length === 3 && everySquaresIsEqual(diagonal1, player);
    const diagonal2IsAligned =
      diagonal2.length === 3 && everySquaresIsEqual(diagonal2, player);

    return diagonal1IsAligned || diagonal2IsAligned;
  };
};

const isHorizontallyAligned = (
  squares: string[],
  i: number,
  player: string
) => {
  if (i % 3 === 0) {
    const row = [...squares].slice(i, i + 3);
    if (everySquaresIsEqual(row, player)) {
      return true;
    }
  }
};

export const isAligned = (squares: string[], player: string) => {
  const isDiagonallyAligned = getIsDiagonallyAligned(squares, player);
  const isVerticallyAligned = getIsVerticallyAligned(squares, player);

  for (let i = 0; i < squares.length; i++) {
    if (
      isHorizontallyAligned(squares, i, player) ||
      isVerticallyAligned(i) ||
      isDiagonallyAligned(i)
    ) {
      return true;
    }
  }

  return false;
};

export const isDraw = (squares: string[], player: string) =>
  squares.filter((value) => value).length === 9 && !isAligned(squares, player);
