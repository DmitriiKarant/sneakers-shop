import axios from 'axios';
import { MIDDLEWARE_PRODUCTS_LIST_LOAD } from '../Constants';
import { saveProductList } from '../Actions/ProductList';

const getProducts =
	({ dispatch }) =>
	next =>
	async action => {
		switch (action.type) {
			case MIDDLEWARE_PRODUCTS_LIST_LOAD:
				{
					try {
						const response = await axios.get(
							'https://654005d245bedb25bfc192e9.mockapi.io/api/v1/products'
						);
						dispatch(saveProductList(response.data));
					} catch (error) {
						console.log('error');
					}
				}
				break;
			default: {
				next(action);
			}
		}
	};

export default getProducts;
