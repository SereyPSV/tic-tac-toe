import React, { useState } from 'react';
import { CreateButtons, Players } from './components';
import styles from './app.module.css';
import { ticTacToeStart } from './utils';
import { TicTacToeWon } from './utils';

let playerN = 'O',
	none = 'none',
	message = '';

export const App = () => {
	let [ticTacToe, setTicTacToe] = useState(ticTacToeStart);

	const onClick = (item) => {
		if (item.target.className === styles.field) {
			return;
		}
		if (item.target.textContent === '') {
			if (playerN !== 'X') {
				playerN = 'X';
			} else {
				playerN = 'O';
			}
			setTicTacToe({ ...ticTacToe, [item.target.id]: playerN });
		}
		if (item.target.className === styles.buttonStart) {
			playerN = 'O';
			none = 'none';
			setTicTacToe(ticTacToeStart);
		}
	};

	const ticTacToeWon = TicTacToeWon(ticTacToe, playerN, none, message);

	return (
		<div className={styles.app} style={{ height: `${window.screen.height}px` }}>
			<label className={styles.appLabel}>Tic Tac Toe</label>
			<Players playerN={playerN} />
			<div className={styles.field} onClick={onClick}>
				<CreateButtons
					buttons={ticTacToe}
					ticTacToeBCG={TicTacToeWon(ticTacToe, playerN)}
				/>
			</div>
			<button className={styles.buttonStart} onClick={onClick}>
				Start Game!
			</button>
			<div className={styles.wonMessage} style={{ display: `${ticTacToeWon.none}` }}>
				{ticTacToeWon.message}
			</div>
		</div>
	);
};
