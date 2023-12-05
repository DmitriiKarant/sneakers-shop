import {
	LOADING,
	MIDDLEWARE_PRODUCTS_LIST_LOAD,
	MIDDLEWARE_REMOVE_PRODUCT,
	MIDDLEWARE_ADD_PRODUCT,
	SAVE_PRODUCTS_LIST,
	MIDDLEWARE_UPDATE_PRODUCT
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

export const updateProduct = (updatedProduct, id) => ({
	type: MIDDLEWARE_UPDATE_PRODUCT,
	payload: { updatedProduct, id }
});

export const loading = loadData => ({
	type: LOADING,
	payload: loadData
});
