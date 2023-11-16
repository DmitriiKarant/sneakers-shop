import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import Card from '../../Components/Card/Card';

import styles from './AdminPage.module.scss';
import { useNavigate } from 'react-router-dom';

const AdminPage = ({ productList, actionRemoveProduct }) => {
	const [loading, setLoading] = useState(true);
	const navigate = useNavigate();
	console.log(productList);

	useEffect(() => {
		productList.length && setLoading(false);
	}, [productList]);

	const handleExitButtonClick = () => {
		navigate('/');
	};

	return (
		<div>
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
						/>
					);
				})
			)}
			<button onClick={handleExitButtonClick}>exit</button>
		</div>
	);
};

AdminPage.propTypes = {};

export default AdminPage;
