import React from 'react';
import PropTypes from 'prop-types';

import styles from './Body.module.scss';
import Catalog from './Catalog/CatalogContainer';

const Body = props => {
	return (
		<div>
			<Catalog />
		</div>
	);
};

Body.propTypes = {};

export default Body;
