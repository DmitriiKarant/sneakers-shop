import React from 'react';
import PropTypes from 'prop-types';

import styles from './Input.module.scss';

const Input = ({ type, placeholder, element, setNewProduct }) => {
	const handleChange = ({ target }) => {
		setNewProduct(prevState => ({
			...prevState,
			// productName: target.value
			[element]: target.value
		}));
	};

	return (
		<div className={styles.root}>
			<input
				className={styles.root__input}
				type={type}
				placeholder={placeholder}
				onChange={handleChange}
			/>
		</div>
	);
};

Input.propTypes = {};

export default Input;
