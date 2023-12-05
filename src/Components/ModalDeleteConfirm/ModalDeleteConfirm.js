import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal/Modal';
import MainButton from '../MainButton/MainButton';

import styles from './ModalDeleteConfirm.module.scss';

const ModalDeleteConfirm = ({
	id,
	productName,
	actionRemoveProduct,
	setOpenRemoveModal
}) => {
	const applyButtonText = 'удалить';
	const applyButtonWidth = '100px';
	const applyButtonHeight = '40px';
	const applyButtonBackgroundColor = '#F14F4F';
	const applyButtonColor = '#FFF';

	const canselButtonText = 'отмена';
	const canselButtonWidth = '100px';
	const canselButtonHeight = '40px';
	const canselButtonBackgroundColor = '#444B58';
	const canselButtonColor = '#FFF';

	return (
		<div>
			<Modal active={true} modalClose={setOpenRemoveModal}>
				<div
					className={styles.textBlock}
				>{`Удалить ${productName} ?`}</div>
				<div className={styles.buttonBlock}>
					<MainButton
						text={applyButtonText}
						onClick={() => actionRemoveProduct(id)}
						width={applyButtonWidth}
						height={applyButtonHeight}
						backgroundColor={applyButtonBackgroundColor}
						color={applyButtonColor}
					/>
					<MainButton
						text={canselButtonText}
						onClick={() => setOpenRemoveModal(false)}
						width={canselButtonWidth}
						height={canselButtonHeight}
						backgroundColor={canselButtonBackgroundColor}
						color={canselButtonColor}
					/>
				</div>
			</Modal>
		</div>
	);
};

ModalDeleteConfirm.propTypes = {};

export default ModalDeleteConfirm;
