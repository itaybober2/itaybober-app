'use client';

import styles from '../page.module.css'
import {Square} from "@/app/tic-tac-toe/components/Square";
import {calculateWinner, SquareValue} from "@/app/tic-tac-toe/utils/helpers";

interface BoardProps {
    xIsNext: boolean;
    squares: SquareValue[];
    onPlay: (squares: SquareValue[]) => void;

}
export function Board(props: BoardProps) {
    const {xIsNext, squares, onPlay} = props;
    function handleClick(i: number) {
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        const nextSquares = squares.slice();
        if (xIsNext) {
            nextSquares[i] = 'X';
        } else {
            nextSquares[i] = 'O';
        }
        onPlay(nextSquares);
    }

    const winner = calculateWinner(squares);
    let status;
    if (winner) {
        status = 'Winner: ' + winner;
    } else {
        status = 'Next player: ' + (xIsNext ? 'X' : 'O');
    }

    return (
        <>
            <div>
                <div className={styles.status}>{status}</div>
            </div>
            <div>
                <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
                <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
                <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
            </div>
            <div>
                <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
                <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
                <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
            </div>
            <div className={styles.lowerRow}>
                <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
                <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
                <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
            </div>
        </>
    );
}