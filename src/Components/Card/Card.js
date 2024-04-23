import React, { useState } from 'react';
import PropTypes from 'prop-types';

import EditIcon from '../../Icons/EditIcon';
import DeleteIcon from '../../Icons/DeleteIcon';
import ModalDeleteConfirm from '../ModalDeleteConfirm/ModalDeleteConfirm';
import ModalUpdateProduct from '../ModalUpdateProduct/ModalUpdateProduct';

import styles from './Card.module.scss';

const Card = ({
	id,
	image,
	price,
	productName,
	description,
	size,
	actionRemoveProduct,
	actionUpdateProduct
}) => {
	const [openRemoveModal, setOpenRemoveModal] = useState(false);
	const [openUpdateModal, setOpenUpdateModal] = useState(false);

	const handleRemoveProduct = () => {
		setOpenRemoveModal(true);
	};
	const handleChangeModalOpenClick = () => {
		setOpenUpdateModal(true);
	};

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
					onClick={handleChangeModalOpenClick}
				>
					<EditIcon />
				</div>
				<div
					className={styles.root_info_deleteIcon}
					onClick={handleRemoveProduct}
				>
					<DeleteIcon />
				</div>
			</div>
			{openRemoveModal && (
				<ModalDeleteConfirm
					id={id}
					productName={productName}
					setOpenRemoveModal={setOpenRemoveModal}
					actionRemoveProduct={actionRemoveProduct}
				/>
			)}
			{openUpdateModal && (
				<ModalUpdateProduct
					id={id}
					productName={productName}
					price={price}
					setOpenUpdateModal={setOpenUpdateModal}
					actionUpdateProduct={actionUpdateProduct}
				/>
			)}
		</div>
	);
};

Card.propTypes = {};

export default Card;
