import {MIDDLEWARE_PRODUCTS_LIST_LOAD, SAVE_PRODUCTS_LIST} from "../Constants";

export const getProductList = () => ({
    type: MIDDLEWARE_PRODUCTS_LIST_LOAD,
})

export const saveProductList = (data) => (
    {
        type: SAVE_PRODUCTS_LIST,
        payload: data
    })