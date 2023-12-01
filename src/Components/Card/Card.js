import React from 'react';
import PropTypes from 'prop-types';

import EditIcon from '../../Icons/EditIcon';
import DeleteIcon from '../../Icons/DeleteIcon';

import styles from './Card.module.scss';

const Card = ({
	id,
	image,
	price,
	productName,
	description,
	size,
	handleModalOpenClick,
	actionRemoveProduct
}) => {
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
				{/*<p>{description}</p>*/}
				{/*<p>Size: {size}</p>*/}
				<p>{price} р</p>
				<div
					className={styles.root_info_editIcon}
					onClick={handleModalOpenClick}
				>
					<EditIcon />
				</div>
				<div
					className={styles.root_info_deleteIcon}
					onClick={() => actionRemoveProduct(id)}
				>
					<DeleteIcon />
				</div>
			</div>
		</div>
	);
};

Card.propTypes = {};

export default Card;
