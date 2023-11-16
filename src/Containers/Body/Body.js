import React from 'react';
import PropTypes from 'prop-types';

import Catalog from './Catalog/CatalogContainer';

import styles from './Body.module.scss';

const Body = props => {
	return (
		<div>
			<Catalog />
		</div>
	);
};

Body.propTypes = {};

export default Body;
