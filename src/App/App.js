import { Route, Routes } from 'react-router-dom';
import AdminPage from '../Containers/AdminPage/AdminPageContainer';
import AdminEditPage from '../Containers/AdminEditPage/AdminEditPage';

import { useEffect } from 'react';
import Header from '../Containers/Header/HeaderContainer';
import styles from './App.module.scss';
import Body from '../Containers/Body/BodyContainer';

function App({ actionLoadProductList, productList, isLoading }) {
	// const getProducts = async (products) => {
	//   await fetch('https://654005d245bedb25bfc192e9.mockapi.io/api/v1/products').then(response => response.json()).then(json => console.log(json))
	// }

	useEffect(() => {
		actionLoadProductList();
	}, []);

	return (
		<div className={styles.app}>
			{isLoading && <div>Loading...</div>}
			{!isLoading && (
				<>
					<Header />
					<Routes>
						<Route path={'/'} element={<Body />} />
						<Route path={'/edit'} element={<AdminPage />} />
					</Routes>
					{/*  <AdminPage/>*/}
				</>
			)}
		</div>
	);
}

export default App;
