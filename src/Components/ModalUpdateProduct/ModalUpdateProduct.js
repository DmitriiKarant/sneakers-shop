import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal/Modal';
import Input from '../Input/Input';
import MainButton from '../MainButton/MainButton';

const ModalUpdateProduct = ({
	id,
	productName,
	price,
	setOpenUpdateModal,
	actionUpdateProduct
}) => {
	const [updatedProduct, setUpdatedProduct] = useState({
		productName: productName,
		price: price
	});

	const handleModalButtonClick = () => {
		actionUpdateProduct(updatedProduct, id);
	};

	const modalInputProductNameType = 'text';
	const modalInputProductNamePlaceholder = 'название';
	const modalInputProductNameElement = 'productName';

	const modalInputProductPriceType = 'number';
	const modalInputProductPricePlaceholder = 'цена';
	const modalInputPriceElement = 'price';

	const modalButtonWidth = '220px';
	const modalButtonHeight = '60px';
	const modalButtonText = 'Изменить товар';
	const modalButtonBackgroundColor = '#F14F4F';
	const modalButtonColor = '#FFFFFF';

	return (
		<Modal active={true} modalClose={setOpenUpdateModal}>
			<h3>Изменение товара</h3>
			<Input
				value={updatedProduct.productName}
				type={modalInputProductNameType}
				placeholder={modalInputProductNamePlaceholder}
				element={modalInputProductNameElement}
				setProduct={setUpdatedProduct}
			/>
			<Input
				value={updatedProduct.price}
				type={modalInputProductPriceType}
				placeholder={modalInputProductPricePlaceholder}
				element={modalInputPriceElement}
				setProduct={setUpdatedProduct}
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

ModalUpdateProduct.propTypes = {};

export default ModalUpdateProduct;
