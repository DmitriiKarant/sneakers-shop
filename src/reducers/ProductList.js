import { LOADING, SAVE_PRODUCTS_LIST } from '../Constants';

const initialState = {
	productList: [],
	isLoading: false
};

export default (state = initialState, action) => {
	switch (action.type) {
		case SAVE_PRODUCTS_LIST: {
			return {
				...state,
				productList: action.payload
			};
		}
		case LOADING: {
			return {
				...state,
				isLoading: action.payload
			};
		}

		default:
			return state;
	}
};
