import { createContext, useMemo, useState } from "react";
import { isAligned, isDraw } from "../utils";

interface TicTacToeCtx {
  squares: string[];
  onCheckSquare: (idx: number) => void;
  player: string;
  gameState: {
    hasWin: boolean;
    isDraw: boolean;
  };
  reset: () => void;
}

export const TicTacToeContext = createContext<TicTacToeCtx>({
  squares: [],
  onCheckSquare: (idx: number) => undefined,
  player: "",
  gameState: {
    hasWin: false,
    isDraw: false,
  },
  reset: () => undefined,
});

const blankSquares = Array.from({ length: 9 }, () => "");

const useTicTacToeContext = () => {
  const [player, setPlayer] = useState("1");
  const [squares, setSquares] = useState(blankSquares);

  const onCheckSquare = useMemo(
    () => (idx: number) => {
      if (!isAligned(squares, player)) {
        if (!squares[idx]) {
          const newSquares = [...squares];
          newSquares[idx] = player === "1" ? "1" : "2";
          setSquares(newSquares);
          if (!isAligned(newSquares, player)) {
            setPlayer(() => (player === "1" ? "2" : "1"));
          }
        }
      }
    },
    [player, squares]
  );

  const contextValue = useMemo(
    () => ({
      squares,
      onCheckSquare,
      player,
      gameState: {
        hasWin: isAligned(squares, player),
        isDraw: isDraw(squares, player),
      },
      reset: () => setSquares(() => blankSquares),
    }),
    [squares, onCheckSquare, player]
  );

  return contextValue;
};

const TicTacToeProvider = ({ children }: { children: JSX.Element }) => {
  const context = useTicTacToeContext();

  return (
    <TicTacToeContext.Provider value={context}>
      {children}
    </TicTacToeContext.Provider>
  );
};

export default TicTacToeProvider;
