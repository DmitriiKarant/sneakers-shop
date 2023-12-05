import React from 'react';
import PropTypes from 'prop-types';

import cns from 'classnames';

import PlusIcon from '../../Icons/PlusIcon';

import styles from './Modal.module.scss';

export const Modal = ({ active, children, modalClose }) => {
	const handleModalCloseClick = () => {
		modalClose(false);
	};

	return (
		<div
			className={cns(styles.root, active && styles.root_active)}
			onMouseDown={handleModalCloseClick}
		>
			<div
				className={cns(
					styles.root__content,
					active && styles.root__contentActive
				)}
				onMouseDown={e => e.stopPropagation()}
			>
				<div className={styles.xIcon} onClick={handleModalCloseClick}>
					<PlusIcon />
				</div>
				{children}
			</div>
		</div>
	);
};

Modal.propTypes = {};

export default Modal;
