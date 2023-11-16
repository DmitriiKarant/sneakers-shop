import React from 'react';
import PropTypes from 'prop-types';

import Logo from '../../Icons/Logo';
import BasketIcon from '../../Icons/BasketIcon';
import MainButton from '../../Components/MainButton/MainButton';

import styles from './Header.module.scss';
import { useNavigate } from 'react-router-dom';

const Header = props => {
	const navigate = useNavigate();

	const headerButtonText = 'Перейти к покупкам';
	const headerButtonWidth = '250px';
	const headerButtonHeight = '60px';
	const headerButtonBackgroundColor = '#F14F4F';
	const headerButtonColor = '#FFFFFF';

	const handleTransitShoppingClick = () => {
		navigate('/edit');
	};

	return (
		<div className={styles.body}>
			<div className={styles.body_header}>
				<div className={styles.body_header_block}>
					<div className={styles.body_header_block_menu}>
						<div className={styles.body_header_block_menu_logo}>
							<Logo />
						</div>
						<div className={styles.body_header_block_menu_info}>
							<p>Каталог</p>
							<p>Подбор товара</p>
							<p> Доставка и оплата</p>
							<p>Контакты</p>
							<div
								className={
									styles.body_header_block_menu_info_basket
								}
							>
								<div
									className={
										styles.body_header_block_menu_info_basket_text
									}
								>
									Корзина
								</div>
								<div
									className={
										styles.body_header_block_menu_info_basket_icon
									}
								>
									<BasketIcon />
								</div>
							</div>
						</div>
					</div>

					<div className={styles.body_header_block_title}>
						Кроссовки известных брендов с доставкой по России и СНГ
					</div>
					<div className={styles.body_header_block_subTitle}>
						Мы продаем кроссовки брендов Nike, Adidas, Puma, Reebok,
						Converse и многие другие по низким ценам
					</div>
					<MainButton
						width={headerButtonWidth}
						height={headerButtonHeight}
						text={headerButtonText}
						color={headerButtonColor}
						backgroundColor={headerButtonBackgroundColor}
						onClick={handleTransitShoppingClick}
					/>
				</div>
			</div>
		</div>
	);
};

Header.propTypes = {};

export default Header;
