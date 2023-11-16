import React, { useState } from 'react';
import PropTypes from 'prop-types';

import styles from '../CatalogFilter.module.scss';

const FilterPrice = props => {
	let [minPrice, setMinPrice] = useState(0);
	let [maxPrice, setMaxPrice] = useState(500);
	const minGap = 10;

	// if (parseInt(maxPrice) - parseInt(minPrice) <= minGap) {
	// 	// setMinPrice(() => {
	// 	// 	return maxPrice - minGap;
	// 	// });
	// 	return (minPrice = parseInt(maxPrice) - minGap);
	// }
	//
	// if (parseInt(maxPrice) - parseInt(minPrice) <= minGap) {
	// 	// setMinPrice(() => {
	// 	// 	return maxPrice - minGap;
	// 	// });
	// 	return (maxPrice = parseInt(minPrice) + minGap);
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

	console.log('minPrice', minPrice);
	console.log('maxPrice', maxPrice);

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
			/>
			<input
				type='range'
				min='0'
				max='500'
				value={maxPrice}
				id='slider-max'
				onChange={handleChangeMaxPrice}
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
