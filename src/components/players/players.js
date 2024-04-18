import { Input } from './player';
import styles from './players.module.css';
import PropTypes from 'prop-types';

export const Players = ({ playerN }) => {
	return (
		<div className={styles.players}>
			<Input color={'red'}>Player 1</Input>

			<div className={`${styles.nextMove} ${playerN === 'O' ? styles.red : styles.green}`}>
				<p>Next</p>
				<p>{playerN === 'O' ? 'X' : 'O'}</p>
			</div>
			<Input color={'green'}>Player 2</Input>
		</div>
	);
};

Players.propTypes = {
	playerN: PropTypes.string,
};
