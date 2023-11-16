import React from 'react';
import PropTypes from 'prop-types';

import styles from './Card.module.scss';

const Card = ({ image, productName, price }) => {
	return (
		<div className={styles.root}>
			<img className={styles.image} src={image} alt='foto' />
			<div className={styles.title}>{productName}</div>
			<div className={styles.price}>{price} ₽</div>
		</div>
	);
};

Card.propTypes = {};

export default Card;
