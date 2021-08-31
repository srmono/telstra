import React from 'react'
import Product from './Product';

function TollsList() {
    const tools = ["React","SpringBoot","MongoDB","OAuth"];
    const toolsList = tools.map( tool => <h2>{tool}</h2> );
    const products = [
        {
            id: 1,
            brand: "Lenovo",
            ram: "16gb",
            processor: "SnapDragon 888+ "
        },
        {
            id: 2,
            brand: "MI",
            ram: "8gb",
            processor: "SnapDragon 870+ "
        },
        {
            id: 3,
            brand: "Samsung",
            ram: "16gb",
            processor: "Helio "
        }
    ]
    const productList = products.map( product => (
        <Product product={product} />
    ))
    return (
        <div>
            { productList }
        </div>
    )
}

export default TollsList
