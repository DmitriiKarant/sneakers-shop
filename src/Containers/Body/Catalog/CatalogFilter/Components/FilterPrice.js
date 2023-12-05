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

	// if (maxPrice - minPrice < minGap) {
	// minPrice = parseInt(maxPrice) - minGap;
	// maxPrice = parseInt(minPrice) + minGap;
	// }
	// if (maxPrice - minPrice < minGap) {
	// 	maxPrice = parseInt(minPrice) + minGap;
	// 	minPrice = parseInt(maxPrice) - minGap;
	// }

	// if (maxPrice - minPrice < minGap) {
	// 	maxPrice = parseInt(minPrice) + minGap;
	// }

	const handleChangeMinPrice = ({ target }) => {
		setMinPrice(target.value);
		// if (maxPrice - minPrice > minGap) {
		// } else {
		// 	setMinPrice(maxPrice - minGap);
		// }
		// if (maxPrice - minPrice < minGap) {
		// 	// setMaxPrice(parseInt(minPrice) + minGap);
		// 	setMinPrice(maxPrice - minGap);
		// }
	};

	const handleChangeMaxPrice = ({ target }) => {
		setMaxPrice(target.value);
		// if (maxPrice - minPrice < minGap) {
		// 	// setMinPrice(parseInt(maxPrice) - minGap);
		// 	setMaxPrice(minPrice + minGap);
		// }
		// console.log('minPrice', minPrice);
		// console.log('maxPrice', maxPrice);
	};

	const handleChangeInputMin = ({ target }) => {
		setMinPrice(target.value);
	};

	console.log('minPrice', minPrice);
	console.log('maxPrice', maxPrice);
	// console.log(240 - (minPrice * 240) / 500);

	return (
		<div className={styles.priceFilter}>
			<div className={styles.sliderTrack}></div>
			<input
				// style={{ width: (maxPrice / 500) * 240 }}
				type='range'
				min='0'
				max={minPrice > maxPrice ? maxPrice : 500}
				value={minPrice}
				id='slider-min'
				onChange={handleChangeMinPrice}
				aria-disabled={true}
				// onInput={diffMin()}
			/>
			<input
				type='range'
				min={0}
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
