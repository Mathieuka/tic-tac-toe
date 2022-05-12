import { useContext } from "react";
import { TicTacToeContext } from "./TictactoeProvider";

const useTicTacToe = () => useContext(TicTacToeContext);

export default useTicTacToe;
