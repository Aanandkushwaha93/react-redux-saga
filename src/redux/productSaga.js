import { takeEvery, put } from 'redux-saga/effects'
import { PRODUCT_LIST, SEARCH_PRODUCT, SET_PRODUCT_LIST } from './constant';
function* getProducts() {
    console.warn('getProducts api here get product')
    let data = yield fetch("http://localhost:3500/product",)
    data = yield data.json();
    yield put({ type: SET_PRODUCT_LIST, data })
}
function* seachProduct(data) {
    let result = yield fetch(`http://localhost:3500/product?q=${data.query}`,)
    result = yield result.json();
    console.warn('seachProduct api here get product',data)
    yield put({ type: SET_PRODUCT_LIST, data:result })
}

function* productSaga() {
    yield takeEvery(PRODUCT_LIST, getProducts);
    yield takeEvery(SEARCH_PRODUCT, seachProduct);
}
export default productSaga;