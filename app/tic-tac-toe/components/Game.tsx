'use client';

import {useCallback, useState} from "react";
import {SquareValue} from "../utils/helpers";
import {Board} from "@/app/tic-tac-toe/components/Board";
import styles from '../page.module.css'


export const Game = () => {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const xIsNext = currentMove % 2 === 0;
    const currentSquares = history[currentMove];

    function handlePlay(nextSquares: SquareValue[]) {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
    }


    const onNewGamePress = useCallback(() => {
        setHistory([Array(9).fill(null)]);
        setCurrentMove(0);
    }, []);

    return (
        <div className={styles.game}>
            <div>
                <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
            </div>
            <div>
                <button onClick={onNewGamePress}>Start new game</button>
            </div>
        </div>
    );
}

