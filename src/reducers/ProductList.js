import {SAVE_PRODUCTS_LIST} from "../Constants";

const initialState = {
    productList: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SAVE_PRODUCTS_LIST: {
            return {
                ...state,
                productList: action.payload
            }

        }

        default:
            return state;
    }
}
