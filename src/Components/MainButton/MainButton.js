import React from 'react';
import PropTypes from 'prop-types';

import styles from './MainButton.module.scss';

const MainButton = ({
	width,
	height,
	text,
	backgroundColor,
	color,
	onClick
}) => {
	return (
		<button
			className={styles.mainButton}
			style={{
				width: width,
				height: height,
				color: color,
				backgroundColor: backgroundColor
			}}
			onClick={onClick}
		>
			{text}
		</button>
	);
};

MainButton.propTypes = {};

export default MainButton;
