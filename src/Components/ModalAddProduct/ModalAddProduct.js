import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal/Modal';
import Input from '../Input/Input';
import MainButton from '../MainButton/MainButton';

const ModalAddProduct = ({ setOpenAddModal, actionAddProduct }) => {
	const [newProduct, setNewProduct] = useState({ productName: '', price: 0 });

	const handleModalButtonClick = () => {
		actionAddProduct(newProduct);
	};

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

	return (
		<Modal active={true} modalClose={setOpenAddModal}>
			<Input
				type={modalInputProductNameType}
				placeholder={modalInputProductNamePlaceholder}
				element={modalInputProductNameElement}
				setProduct={setNewProduct}
			/>
			<Input
				type={modalInputProductPriceType}
				placeholder={modalInputProductPricePlaceholder}
				element={modalInputPriceElement}
				setProduct={setNewProduct}
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
	);
};

ModalAddProduct.propTypes = {};

export default ModalAddProduct;
