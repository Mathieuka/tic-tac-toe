import { createContext, useMemo, useState } from "react";
import { isAligned } from "../utils";

interface TictactoeCtx {
  squares: string[];
  onCheckSquare: (idx: number) => void;
  player: string | null;
}

export const TictactoeContext = createContext<TictactoeCtx>({
  squares: [],
  onCheckSquare: (idx: number) => undefined,
  player: "",
});

const useTicTacToeContext = () => {
  const [player, setPlayer] = useState<null | string>("1");
  const [squares, setSquares] = useState<string[]>(
    Array.from({ length: 9 }, () => "")
  );

  const onCheckSquare = (idx: number) => {
    if (!squares[idx]) {
      const newSquares = [...squares];
      newSquares[idx] = player === "1" ? "1" : "2";
      setSquares(newSquares);
      setPlayer(() => (player === "1" ? "2" : "1"));
      if (isAligned(newSquares)) {
        alert(`Player's ${player} wins`);
      }
    }
  };

  const contextValue = useMemo(
    () => ({ squares, onCheckSquare, player }),
    [squares]
  );

  return contextValue;
};

const TicTacToeProvider = ({ children }: { children: JSX.Element }) => {
  const context = useTicTacToeContext();

  return (
    <TictactoeContext.Provider value={context}>
      {children}
    </TictactoeContext.Provider>
  );
};

export default TicTacToeProvider;
