import React from 'react';
import PropTypes from 'prop-types';

import styles from '../CatalogFilter.module.scss';

const sizeArray = [35, 36, 37, 38, 39, 40, 41, 42, 43];

const FilterSize = props => {
	return (
		<div className={styles.sizeFilter}>
			{sizeArray.map(size => (
				<div className={styles.sizeFilter__card}>{size}</div>
			))}
		</div>
	);
};

FilterSize.propTypes = {};

export default FilterSize;
