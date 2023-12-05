import axios from 'axios';
import {
	MIDDLEWARE_PRODUCTS_LIST_LOAD,
	MIDDLEWARE_REMOVE_PRODUCT,
	MIDDLEWARE_ADD_PRODUCT,
	MIDDLEWARE_UPDATE_PRODUCT
} from '../Constants';
import {
	getProductList,
	loading,
	saveProductList
} from '../Actions/ProductList';

const getProducts =
	({ dispatch }) =>
	next =>
	async action => {
		const baseURL =
			'https://654005d245bedb25bfc192e9.mockapi.io/api/v1/products';

		switch (action.type) {
			case MIDDLEWARE_PRODUCTS_LIST_LOAD:
				try {
					const response = await axios.get(baseURL);
					dispatch(saveProductList(response.data));
				} catch (error) {
					console.log(MIDDLEWARE_PRODUCTS_LIST_LOAD);
				}
				break;
			case MIDDLEWARE_REMOVE_PRODUCT:
				console.log(action.payload);
				try {
					dispatch(loading(true));
					await axios.delete(`${baseURL}/${action.payload}`, {
						method: 'DELETE'
					});
					dispatch(loading(false));

					dispatch(getProductList());
				} catch (error) {
					console.log(MIDDLEWARE_REMOVE_PRODUCT);
				}
				break;
			case MIDDLEWARE_ADD_PRODUCT:
				console.log(action.payload);
				try {
					dispatch(loading(true));
					await axios.post(`${baseURL}`, action.payload);
					dispatch(loading(false));

					dispatch(getProductList());
				} catch (error) {
					console.log(MIDDLEWARE_ADD_PRODUCT);
				}
				break;
			case MIDDLEWARE_UPDATE_PRODUCT:
				console.log(action.payload);
				try {
					dispatch(loading(true));
					await axios.put(
						`${baseURL}/${action.payload.id}`,
						action.payload.updatedProduct
					);
					dispatch(loading(false));

					dispatch(getProductList());
				} catch (error) {
					console.log(MIDDLEWARE_UPDATE_PRODUCT);
				}
				break;
			default: {
				next(action);
			}
		}
	};

export default getProducts;
