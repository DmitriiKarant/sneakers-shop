import React from 'react';

import PropTypes from 'prop-types';

import styles from './InputDoubleRange.module.scss';

const InputDoubleRange = props => {
	return (
		<div className={styles.sliderTrack}>
			<div className={styles.minSliderRange}></div>
			<div className={styles.maxSliderRange}></div>
		</div>
	);
};

InputDoubleRange.propTypes = {};

export default InputDoubleRange;
