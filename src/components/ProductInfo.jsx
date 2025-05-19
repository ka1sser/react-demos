const ProductInfo = () => {
    const products = [
        {
            id: 1,
            name: "Walking Wake EX",
            price: 250,
            rarity: "Special Illustration Rare",
            availability: "In stock"
        },
        {
            id: 2,
            name: "Gouging Fire EX",
            price: 200,
            rarity: "Hyper Rare",
            availability: "Out of stock"
        },
        {
            id: 3,
            name: "Raging Bolt EX",
            price: 300,
            rarity: "Special Illustration Rare",
            availability: "Out of stock"
        },
    ];


    return(
        <div>
            {products.map(({id, name, price, rarity, availability}) => (
                <ul key={id}>
                    <li>{name}</li>
                    <li>${price}</li>
                    <li>{rarity}</li>
                    <li>{availability}</li>
                </ul>
            ))}
        </div>
    )
}

export default ProductInfo;