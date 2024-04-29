import React from 'react';
import PropTypes from 'prop-types';

import styles from './CatalogFilter.module.scss';
import FilterSize from './Components/FilterSize';
import FilterPrice from './Components/FilterPrice';
import FilterGender from './Components/FilterGender';
import MainButton from '../../../../Components/MainButton/MainButton';

const CatalogFilter = props => {
	const applyButtonName = 'Применить';
	const applyButtonWidth = '239px';
	const applyButtonHeight = '60px';
	const applyButtonBC = '#444B58';
	const applyButtonColor = '#FFFFFF';

	return (
		<div className={styles.root}>
			<div className={styles.title}>{'Подбор\nпо параметрам'}</div>
			<div className={styles.priceFilterBlock}>
				<p className={styles.priceFilterBlock_title}>Цена, руб</p>
				<FilterPrice />
			</div>
			<div className={styles.genderFilterBlock}>
				<FilterGender />
			</div>
			<div className={styles.sizeFilterBlock}>
				<FilterSize />
			</div>
			<MainButton
				text={applyButtonName}
				width={applyButtonWidth}
				height={applyButtonHeight}
				backgroundColor={applyButtonBC}
				color={applyButtonColor}
			/>
			<div className={styles.canselButton}>сбросить</div>
		</div>
	);
};

CatalogFilter.propTypes = {};

export default CatalogFilter;
