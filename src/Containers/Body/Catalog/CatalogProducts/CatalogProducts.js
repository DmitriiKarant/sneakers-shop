import React from 'react';
import PropTypes from 'prop-types';

import styles from './CatalogProducts.module.scss';
import Card from './Components/Card';

const CatalogProducts = ({ productList }) => {
	return (
		<div className={styles.root}>
			{productList.map(prod => (
				<Card
					image={prod.image}
					productName={prod.productName}
					price={prod.price}
				/>
			))}
		</div>
	);
};

CatalogProducts.propTypes = {};

export default CatalogProducts;
