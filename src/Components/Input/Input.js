import React from 'react';
import PropTypes from 'prop-types';

import styles from './Input.module.scss';

const Input = ({ value, type, placeholder, element, setProduct }) => {
	const handleChange = ({ target }) => {
		setProduct(prevState => ({
			...prevState,
			[element]: target.value
		}));
	};

	return (
		<div className={styles.root}>
			<input
				value={value}
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
