import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { useNavigate } from 'react-router-dom';

import Card from '../../Components/Card/Card';
import Modal from './Modal/Modal';
import PlusIcon from '../../Icons/PlusIcon';
import Input from './Input/Input';
import MainButton from '../../Components/MainButton/MainButton';

import styles from './AdminPage.module.scss';

const AdminPage = ({ productList, actionRemoveProduct, actionAddProduct }) => {
	const [newProduct, setNewProduct] = useState({ productName: '', price: 0 });
	const [loading, setLoading] = useState(true);
	const [modalActive, setModalActive] = useState(false);
	const navigate = useNavigate();
	console.log(productList);

	const modalInputProductNameType = 'text';
	const modalInputProductNamePlaceholder = 'название';
	const modalInputProductNameElement = 'productName';

	const modalInputProductPriceType = 'number';
	const modalInputProductPricePlaceholder = 'цена';
	const modalInputPriceElement = 'price';

	const modalButtonWidth = '220px';
	const modalButtonHeight = '60px';
	const modalButtonText = 'Добавить товар';
	const modalButtonBackgroundColor = '#F14F4F';
	const modalButtonColor = '#FFFFFF';

	useEffect(() => {
		productList.length && setLoading(false);
	}, [productList]);

	const handleExitButtonClick = () => {
		navigate('/');
	};

	const handleModalOpenClick = () => {
		setModalActive(true);
	};

	const handleModalButtonClick = () => {
		actionAddProduct(newProduct);
	};

	return (
		<div className={styles.root}>
			<div
				className={styles.root__plusIcon}
				onClick={handleModalOpenClick}
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
							// handleModalOpenClick={handleModalOpenClick}
						/>
					);
				})
			)}
			<button onClick={handleExitButtonClick}>exit</button>
			<Modal active={modalActive} setActive={setModalActive}>
				<Input
					type={modalInputProductNameType}
					placeholder={modalInputProductNamePlaceholder}
					element={modalInputProductNameElement}
					setNewProduct={setNewProduct}
				/>
				<Input
					type={modalInputProductPriceType}
					placeholder={modalInputProductPricePlaceholder}
					element={modalInputPriceElement}
					setNewProduct={setNewProduct}
				/>
				<MainButton
					width={modalButtonWidth}
					height={modalButtonHeight}
					text={modalButtonText}
					backgroundColor={modalButtonBackgroundColor}
					color={modalButtonColor}
					onClick={handleModalButtonClick}
				/>
			</Modal>
		</div>
	);
};

AdminPage.propTypes = {};

export default AdminPage;
