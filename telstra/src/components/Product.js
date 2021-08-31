import React from 'react'

const Product = ({product}) => {
    
    return (
        <div>
            <h2 key={product.id}> Brand is: {product.brand} and Processor : {product.processor} </h2>
        </div>
    )
}

export default Product
