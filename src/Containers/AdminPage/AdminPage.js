import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { useNavigate } from 'react-router-dom';

import Card from '../../Components/Card/Card';
import PlusIcon from '../../Icons/PlusIcon';
import ModalAddProduct from '../../Components/ModalAddProduct/ModalAddProduct';

import styles from './AdminPage.module.scss';

const AdminPage = ({
	productList,
	actionRemoveProduct,
	actionAddProduct,
	actionUpdateProduct
}) => {
	const [loading, setLoading] = useState(true);
	const [openAddModal, setOpenAddModal] = useState(false);
	const navigate = useNavigate();

	// console.log(productList);

	useEffect(() => {
		productList.length && setLoading(false);
	}, [productList]);

	const handleExitButtonClick = () => {
		navigate('/');
	};

	const handleAddModalOpenClick = () => {
		setOpenAddModal(true);
	};

	return (
		<div className={styles.root}>
			<div
				className={styles.root__plusIcon}
				onClick={handleAddModalOpenClick}
			>
				<PlusIcon />
			</div>
			{loading ? (
				<h1>Loading...</h1>
			) : (
				productList.map(prod => {
					return (
						<Card
							id={prod.id}
							image={prod.image}
							price={prod.price}
							productName={prod.productName}
							description={prod.description}
							size={prod.size}
							key={prod.id}
							actionRemoveProduct={actionRemoveProduct}
							actionUpdateProduct={actionUpdateProduct}
						/>
					);
				})
			)}
			<button onClick={handleExitButtonClick}>exit</button>
			{openAddModal && (
				<ModalAddProduct
					setOpenAddModal={setOpenAddModal}
					actionAddProduct={actionAddProduct}
				/>
			)}
		</div>
	);
};

AdminPage.propTypes = {};

export default AdminPage;
