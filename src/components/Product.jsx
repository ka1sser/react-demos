import React from 'react';

const Product = ({prod_name, prod_price}) => {
    return(
        <div>
            <h2>{prod_name}</h2>
            <p>${prod_price}</p>
        </div>
    )
}

export default Product;