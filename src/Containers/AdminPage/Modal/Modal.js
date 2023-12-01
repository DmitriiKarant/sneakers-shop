import React from 'react';
import PropTypes from 'prop-types';

import cns from 'classnames';

import styles from './Modal.module.scss';
import PlusIcon from '../../../Icons/PlusIcon';

const Modal = ({ active, setActive, children }) => {
	const handleModalCloseClick = () => {
		setActive(false);
	};
	return (
		<div
			className={cns(styles.root, active && styles.root_active)}
			onClick={handleModalCloseClick}
		>
			<div
				className={cns(
					styles.root__content,
					active && styles.root__contentActive
				)}
				onClick={e => e.stopPropagation()}
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
