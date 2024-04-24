import React, { useState } from 'react';

import PropTypes from 'prop-types';

import styles from './InputDoubleRange.module.scss';

const InputDoubleRange = props => {
	let [minPrice, setMinPrice] = useState(0);
	let [maxPrice, setMaxPrice] = useState(500);

	return (
		<div className={styles.sliderTrack}>
			<div className={styles.minSliderRange} draggable={true}></div>
			<div className={styles.maxSliderRange}></div>
		</div>
	);
};

InputDoubleRange.propTypes = {};

export default InputDoubleRange;
