import { selector } from "recoil";
import { addedProduct } from "./recoil";

export const showProductsAdded = selector({
    key: 'SHOW_PRODUCTS_ADDED',
    get: ({get}) => {
        const count = get(addedProduct).length
        const list = get(addedProduct)
        return count,list
    }
})