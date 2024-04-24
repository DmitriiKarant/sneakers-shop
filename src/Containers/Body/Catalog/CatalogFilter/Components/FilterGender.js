import React, { useState } from 'react';

import PropTypes from 'prop-types';

import Check from '../../../../../Icons/Check';

import styles from '../CatalogFilter.module.scss';

const FilterGender = props => {
	const [inputOnMale, setInputOnMale] = useState(false);
	const [inputOnFemale, setInputOnFemale] = useState(false);

	const handleInputClickMale = () => {
		setInputOnMale(!inputOnMale);
	};

	const handleInputClickFemale = () => {
		setInputOnFemale(!inputOnFemale);
	};

	return (
		<>
			<div className={styles.genderFilterTitle}>Пол</div>
			<div className={styles.genderFilter}>
				<div className={styles.input} onClick={handleInputClickMale}>
					{inputOnMale && <Check />}
				</div>
				<div className={styles.inputTextMale}>мужской</div>
				<div className={styles.input} onClick={handleInputClickFemale}>
					{inputOnFemale && <Check />}
				</div>
				<div>женский</div>
			</div>
		</>
	);
};

FilterGender.propTypes = {};

export default FilterGender;
