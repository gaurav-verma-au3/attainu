
import { store } from '../../store'

const productsReducer = (products = [], action) => {
    if (action.type === "ADD_PRODUCT") {
        products = [...products, action.payload]
    }
    return products
}



export default productsReducer