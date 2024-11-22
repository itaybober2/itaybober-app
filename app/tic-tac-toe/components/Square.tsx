'use client';
import {SquareValue} from "@/app/tic-tac-toe/utils/helpers";
import styles from '../page.module.css'

type SquareProps = {
    value: SquareValue;
    onSquareClick: () => void;
};


export function Square(props: SquareProps) {
    const {value, onSquareClick} = props;
    return (
        <button className={styles.square} onClick={onSquareClick}>
            {value}
        </button>
    );
}