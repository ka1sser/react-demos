const ProductInfo = () => {
    const product = {
        name: "Temporal Forces Booster Box",
        price: 400,
        availability: "Out of stock"
    };

    return(
        <div>
            <p>name:{product.name}</p>
            <p>price:${product.price}</p>
            <p>availability:{product.availability}</p>
        </div>
    )
}

export default ProductInfo;