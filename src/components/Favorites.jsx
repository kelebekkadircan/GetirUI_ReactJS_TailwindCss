import React, { useEffect, useState } from 'react'
import productData from '../api/Products.json'
import ProductItem from './ui/ProductItem'

function Favorites() {

    const [products, setProducts] = useState([])

    useEffect(() => {
        setProducts(productData)
    }, [])

    return (
        <>
            <div>
                <h3 className='font-semibold text-sm mb-3'>
                    Favoriler
                </h3>
                <div className='grid grid-cols-8 gap-0.1 bg-white rounded-xl overflow-hidden'>
                    {products.length && products.map((prod, index) => <ProductItem key={index} prod={prod} />)}
                </div>



            </div>

        </>
    )
}

export default Favorites