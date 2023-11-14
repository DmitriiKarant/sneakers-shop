import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import styles from './AdminPage.module.scss';
import Card from '../../Components/Card/Card';

const AdminPage = ({ productList }) => {
	const [loading, setLoading] = useState(true);
	console.log(productList);

	useEffect(() => {
		productList.length && setLoading(false);
	}, [productList]);

	return (
		<div>
			{loading ? (
				<h1>Loading...</h1>
			) : (
				productList.map(prod => {
					return (
						<Card
							image={prod.image}
							price={prod.price}
							productName={prod.productName}
							key={prod.id}
						/>
					);
				})
			)}
		</div>
	);
};

AdminPage.propTypes = {};

export default AdminPage;