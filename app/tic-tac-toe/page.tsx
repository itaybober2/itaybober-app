import {Game} from "@/app/tic-tac-toe/components/Game";
import styles from "./page.module.css"

export default function TicTacToePage () {
  return (
    <div className={styles.container}>
      <h1>Tic Tac Toe</h1>
      <Game />
    </div>
  );
}