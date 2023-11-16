import React from 'react';
import PropTypes from 'prop-types';

import styles from './CatalogFilter.module.scss';
import FilterSize from './Components/FilterSize';

const CatalogFilter = props => {
	return (
		<div className={styles.root}>
			<div className={styles.title}>Подбор по параметрам</div>
			<div className={styles.priceFilter}></div>
			<div className={styles.sizeFilter}>
				<FilterSize />
			</div>
		</div>
	);
};

CatalogFilter.propTypes = {};

export default CatalogFilter;
