import { createContext, useMemo, useState } from "react";
import { isAligned, isDraw } from "../utils";

interface TictactoeCtx {
  squares: string[];
  onCheckSquare: (idx: number) => void;
  player: string;
  gameState: {
    winner: boolean;
    isDraw: boolean;
  };
}

export const TicTacToeContext = createContext<TictactoeCtx>({
  squares: [],
  onCheckSquare: (idx: number) => undefined,
  player: "",
  gameState: {
    winner: false,
    isDraw: false,
  },
});

const useTicTacToeContext = () => {
  const [player, setPlayer] = useState("1");
  const [squares, setSquares] = useState(Array.from({ length: 9 }, () => ""));

  const onCheckSquare = (idx: number) => {
    if (!squares[idx]) {
      const newSquares = [...squares];
      newSquares[idx] = player === "1" ? "1" : "2";
      setSquares(newSquares);
      if (!isAligned(newSquares)) {
        setPlayer(() => (player === "1" ? "2" : "1"));
      }
    }
  };

  const contextValue = useMemo(
    () => ({
      squares,
      onCheckSquare,
      player,
      gameState: {
        winner: isAligned(squares),
        isDraw: isDraw(squares),
      },
    }),
    [squares]
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
