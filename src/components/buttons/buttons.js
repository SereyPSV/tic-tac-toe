import { Fragment } from 'react';
import styles from './createButtons.module.css';
import PropTypes from 'prop-types';

export const CreateButtons = ({ buttons, ticTacToeBCG }) => {
	return (
		<Fragment>
			{Object.keys(buttons).map((item) => (
				<div
					className={`${styles.button} ${styles[ticTacToeBCG[item]]}`}
					style={buttons[item] === 'X' ? { color: 'red' } : { color: 'green' }}
					key={item}
					id={item}
				>
					{buttons[item]}
				</div>
			))}
		</Fragment>
	);
};

CreateButtons.propTypes = {
	buttons: PropTypes.object,
};
