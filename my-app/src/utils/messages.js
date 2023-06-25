import { TicTacToeLogic, ticTacToeBackground } from './index';
import PropTypes from 'prop-types';

export const TicTacToeWon = (ticTacToe, playerN, none, message) => {
	const resultWon = TicTacToeLogic(ticTacToe, playerN);
	if (resultWon) {
		none = 'flex';
	}
	if (Object.values(ticTacToe).some((i) => i === '')) {
		message = 'Player ' + (playerN === 'O' ? '2' : '1') + ' won!';
	} else {
		message = 'Nobody won!';
		none = 'flex';
	}
	return {
		Background: { ...ticTacToeBackground, ...resultWon },
		message: message,
		none: none,
	};
};

TicTacToeWon.propTypes = {
	ticTacToe: PropTypes.object,
	playerN: PropTypes.string,
	none: PropTypes.string,
	message: PropTypes.string,
};
