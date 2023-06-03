import { SET_PRODUCT_LIST } from './constant';
export const productData = (data = [], action) => {
    switch (action.type) {
        case SET_PRODUCT_LIST:
            console.warn("SET_PRODUCT_LIST", action);
            return [...action.data]
            break;
        default:
            return data;
    }
}