export const product = (productObject) => {
    return `
    <article class="product">
        <section id="product--id">ID: ${productObject.id}</section>
        <p class="product--name">Bean Type: ${productObject.name}</p>
        <section class="product--bean">${productObject.beanType}</section>
        <section class="product--roast">Roast Type: ${productObject.roastType}</section>
        <section class="product--price">Price: $${productObject.price}</section>
    </article>
    
    `
}

