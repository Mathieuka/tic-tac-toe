import { useContext } from "react";
import { TictactoeContext } from "./TictactoeProvider";

const useTicTacToe = () => useContext(TictactoeContext);

export default useTicTacToe;
