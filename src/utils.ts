export const horizontallyAligned = (squares: string[]) => {
  for (let i = 0; i < squares.length; i++) {
    if (i % 3 === 0) {
      const line = [...squares].slice(i, i + 3);
      const isAligned =
        line.every((v) => v === "1") || line.every((v) => v === "2");
      if (isAligned) {
        return true;
      }
    }
  }
  return false;
};
