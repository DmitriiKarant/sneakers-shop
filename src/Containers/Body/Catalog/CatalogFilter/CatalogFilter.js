import React from 'react';
import PropTypes from 'prop-types';

import styles from './CatalogFilter.module.scss';
import FilterSize from './Components/FilterSize';
import FilterPrice from './Components/FilterPrice';
import FilterGender from './Components/FilterGender';

const CatalogFilter = props => {
	return (
		<div className={styles.root}>
			<div className={styles.title}>{'Подбор\nпо параметрам'}</div>
			<div className={styles.priceFilterBlock}>
				<FilterPrice />
			</div>
			<div className={styles.genderFilterBlock}>
				<FilterGender />
			</div>
			<div className={styles.sizeFilterBlock}>
				<FilterSize />
			</div>
		</div>
	);
};

CatalogFilter.propTypes = {};

export default CatalogFilter;
