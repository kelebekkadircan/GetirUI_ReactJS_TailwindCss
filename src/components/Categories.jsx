import React, { useEffect } from 'react'
import { useState } from 'react'
import categoryData from '../api/Categories.json'
import Category from './ui/Category'


function Categories() {

    const [categories, setCategories] = useState([])

    useEffect(() => {

        // istek
        setCategories(categoryData);


    }, [])


    return (
        <>
            <div className='bg-white py-4'>
                <div className='container mx-auto'>
                    <h3 className=' mb-3 text-sm font-semibold'>
                        Kategoriler
                    </h3>
                    <div className='grid grid-cols-10'>
                        {/* {!categories.length && "Yükleniyor.."} */}
                        {categories && categories.map((cat, i) => <Category key={i} cat={cat} />)}
                    </div>
                </div>
            </div>


        </>
    )
}

export default Categories