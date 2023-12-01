import {
	LOADING,
	MIDDLEWARE_PRODUCTS_LIST_LOAD,
	MIDDLEWARE_REMOVE_PRODUCT,
	MIDDLEWARE_ADD_PRODUCT,
	SAVE_PRODUCTS_LIST
} from '../Constants';

export const getProductList = () => ({
	type: MIDDLEWARE_PRODUCTS_LIST_LOAD
});

export const saveProductList = data => ({
	type: SAVE_PRODUCTS_LIST,
	payload: data
});

export const removeProduct = id => ({
	type: MIDDLEWARE_REMOVE_PRODUCT,
	payload: id
});

export const addProduct = newProduct => ({
	type: MIDDLEWARE_ADD_PRODUCT,
	payload: newProduct
});

export const loading = loadData => ({
	type: LOADING,
	payload: loadData
});
