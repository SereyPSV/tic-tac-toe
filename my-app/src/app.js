import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './app.module.css';

import { CreateButtons, Players } from './components';
import { ticTacToeStart, TicTacToeWon } from './utils';

let playerN = 'O',
	none = 'none',
	message = '';

export const App = () => {
	const [ticTacToe, setTicTacToe] = useState(ticTacToeStart);

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

	return <AppLayout onClick={onClick} ticTacToe={ticTacToe} ticTacToeWon={ticTacToeWon} />;
};

const AppLayout = ({ onClick, ticTacToe, ticTacToeWon }) => (
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

AppLayout.propTypes = {
	onClick: PropTypes.func,
	ticTacToe: PropTypes.object,
	ticTacToeWon: PropTypes.object,
};
