import React, { useState } from 'react';
import PropTypes from 'prop-types';

import styles from '../CatalogFilter.module.scss';

const FilterPrice = props => {
	let [minPrice, setMinPrice] = useState(0);
	let [maxPrice, setMaxPrice] = useState(500);
	const minGap = 10;

	// function diffMin() {
	// 	if (parseInt(maxPrice) - parseInt(minPrice) < minGap) {
	// 		setMinPrice(() => {
	// 			return (minPrice = maxPrice - minGap);
	// 		});
	// 	}
	// }
	//
	// function diffMax() {
	// 	if (parseInt(maxPrice) - parseInt(minPrice) < minGap) {
	// 		setMaxPrice(() => {
	// 			return (maxPrice = parseInt(minPrice) + minGap);
	// 		});
	// 	}
	// }

	// if (parseInt(maxPrice) - parseInt(minPrice) <= minGap) {
	// 	if (1) {
	// 		minPrice = maxPrice - minGap;
	// 	} else {
	// 		maxPrice = maxPrice - minGap;
	// 	}
	// }

	if (minPrice < 0) {
		minPrice = 0;
	}
	if (maxPrice - minPrice < minGap) {
		minPrice = parseInt(maxPrice) - minGap;
		maxPrice = parseInt(minPrice) + minGap;
	}

	// if (maxPrice - minPrice < minGap) {
	// 	maxPrice = parseInt(minPrice) + minGap;
	// }

	const handleChangeMinPrice = ({ target }) => {
		setMinPrice(target.value);
	};

	const handleChangeMaxPrice = ({ target }) => {
		setMaxPrice(target.value);
	};

	const handleChangeInputMin = ({ target }) => {
		setMinPrice(target.value);
	};

	// console.log('minPrice', minPrice);
	// console.log('maxPrice', maxPrice);

	return (
		<div className={styles.priceFilter}>
			<div className={styles.sliderTrack}></div>
			<input
				type='range'
				min='0'
				max='500'
				value={minPrice}
				id='slider-min'
				onChange={handleChangeMinPrice}
				// onInput={diffMin()}
			/>
			<input
				type='range'
				min='0'
				max='500'
				value={maxPrice}
				id='slider-max'
				onChange={handleChangeMaxPrice}
				// onInput={diffMax()}
			/>
			<input
				type='number'
				value={minPrice}
				onChange={handleChangeInputMin}
			/>
		</div>
	);
};

FilterPrice.propTypes = {};

export default FilterPrice;
