import { Route, Routes } from 'react-router-dom';
import AdminPage from '../Containers/AdminPage/AdminPageContainer';
import AdminEditPage from '../Containers/AdminEditPage/AdminEditPage';

import { useEffect } from 'react';
import Body from '../Containers/Body/BodyContainer';
import styles from './App.module.scss';

function App({ actionLoadProductList, productList }) {
	// const getProducts = async (products) => {
	//   await fetch('https://654005d245bedb25bfc192e9.mockapi.io/api/v1/products').then(response => response.json()).then(json => console.log(json))
	// }

	useEffect(() => {
		actionLoadProductList();
	}, []);

	return (
		<div className={styles.app}>
			<Body />
			{/*<Routes>*/}
			{/*  <Route path={'/'} element={<AdminPage/>}/>*/}
			{/*  <Route path={'/edit'} element={<AdminEditPage/>}/>*/}
			{/*</Routes>*/}
			{/*  <AdminPage/>*/}
		</div>
	);
}

export default App;
