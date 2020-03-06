import { product }  from "./Product.js"
import { useProducts } from "./productDataProvider.js"


const contentTarget = document.querySelector(".ProductInformationDisplay")

export const productList = () => {
    const productObjectArray = useProducts()

    for (const productObject of productObjectArray) {
        const HTMLRepresentationProduct = product(productObject)

        contentTarget.innerHTML += HTMLRepresentationProduct
    }
}

