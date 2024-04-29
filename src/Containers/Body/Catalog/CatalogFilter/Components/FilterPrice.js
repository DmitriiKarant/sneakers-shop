import React, { useState } from 'react';
import PropTypes from 'prop-types';

import styles from '../CatalogFilter.module.scss';

const FilterPrice = props => {
	let [minPrice, setMinPrice] = useState(0);
	let [maxPrice, setMaxPrice] = useState(500);

	const handleChangeMinPrice = ({ target }) => {
		setMinPrice(target.value);
	};

	const handleChangeMaxPrice = ({ target }) => {
		setMaxPrice(target.value);
	};

	const handleChangeInputMin = ({ target }) => {
		target.value.length > 9
			? setMinPrice(target.value.slice(0, 9))
			: setMinPrice(target.value);
	};

	const handleChangeInputMax = ({ target }) => {
		// setMaxPrice(target.value);
		// if (target.value.length > 9) {
		// 	return setMaxPrice(target.value.slice(0, 9));
		// }
		target.value.length > 9
			? setMaxPrice(target.value.slice(0, 9))
			: setMaxPrice(target.value);
	};

	// console.log('minPrice', minPrice);
	// console.log('maxPrice', maxPrice);
	// console.log(240 - (minPrice * 240) / 500);

	return (
		<div className={styles.priceFilter}>
			<input
				className={styles.inputMin}
				type='number'
				value={minPrice}
				placeholder={'0'}
				onChange={handleChangeInputMin}
			/>
			<input
				className={styles.inputMax}
				type='number'
				value={maxPrice}
				placeholder={'0'}
				onChange={handleChangeInputMax}
			/>
		</div>
	);
};

FilterPrice.propTypes = {};

export default FilterPrice;
