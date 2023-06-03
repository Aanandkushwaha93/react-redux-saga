import { ADD_TO_CART, REMOVE_TO_CART, EMPTY_TO_CART } from './constant';
export const cartData = (data = [], action) => {
    switch (action.type) {
        case ADD_TO_CART:
            console.warn("reducer ADD called", action);
            return [action.data, ...data]
            break;
        case REMOVE_TO_CART:
            console.warn("reducer REMOVE called", action);
            // data.length = data.length ? data.length - 1 : []
            const remainingItem = data.filter((item) => item.id !== action.data);
            console.warn("rem items", remainingItem)
            return [...remainingItem]
            break;
        case EMPTY_TO_CART:
            console.warn("EMPTY_TO_CART", action);
            data = []
            return [...data]
            break;
        default:
            return data;
    }
}