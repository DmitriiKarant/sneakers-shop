import React from 'react';
import PropTypes from 'prop-types';

import styles from './Card.module.scss';

const Card = ({ image, price, productName }) => {
	return (
		<div className={styles.root}>
			<div className={styles.root_imageBlock}>
				<img
					src={image}
					alt='foto'
					className={styles.root_imageBlock_image}
				/>
			</div>
			<div className={styles.root_info}>{productName}</div>
		</div>
	);
};

Card.propTypes = {};

export default Card;