import React from 'react';
import PropTypes from 'prop-types';

import styles from './Catalog.module.scss';
import CatalogFilter from './CatalogFilter/CatalogFilterContainer';
import CatalogProducts from './CatalogProducts/CatalogProductsContainer';

const Catalog = props => {
	return (
		<div className={styles.root}>
			<div className={styles.root__title}>Каталог</div>
			<div className={styles.root__body}>
				<CatalogFilter />
				<CatalogProducts />
			</div>
		</div>
	);
};

Catalog.propTypes = {};

export default Catalog;
