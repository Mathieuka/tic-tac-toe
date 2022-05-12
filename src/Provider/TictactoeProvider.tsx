import { createContext, useMemo, useState } from "react";
import { isAligned } from "../utils";

interface TictactoeCtx {
  squares: string[];
  onCheckSquare: (idx: number) => void;
  player: string;
  winner: boolean;
}

export const TicTacToeContext = createContext<TictactoeCtx>({
  squares: [],
  onCheckSquare: (idx: number) => undefined,
  player: "",
  winner: false,
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
    () => ({ squares, onCheckSquare, player, winner: isAligned(squares) }),
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
