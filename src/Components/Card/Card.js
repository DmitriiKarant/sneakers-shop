import React from 'react';
import PropTypes from 'prop-types';

import styles from './Card.module.scss';
import EditIcon from '../../Icons/EditIcon';
import DeleteIcon from '../../Icons/DeleteIcon';

const Card = ({ image, price, productName, description, size }) => {
	return (
		<div className={styles.root}>
			<div className={styles.root_imageBlock}>
				<img
					src={image}
					alt='foto'
					className={styles.root_imageBlock_image}
				/>
			</div>
			<div className={styles.root_info}>
				<p>{productName}</p>
				<p>{description}</p>
				<p>Size: {size}</p>
				<p>{price} р</p>
				<div className={styles.root_info_editIcon}>
					<EditIcon />
				</div>
				<div className={styles.root_info_deleteIcon}>
					<DeleteIcon />
				</div>
			</div>
		</div>
	);
};

Card.propTypes = {};

export default Card;
