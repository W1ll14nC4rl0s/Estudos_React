import React from 'react'
import products from './data/products'

export default props =>{
    
    function getProducts(){
        return products.map(item =>{
            return <li key={item.id}>{item.id} - {item.name} -> R$ {item.price}</li>
        })
    }

    return(
        <div>
            <h2>Repetição</h2>
            <ul>
                {getProducts()}
            </ul>
        </div>
    )
}