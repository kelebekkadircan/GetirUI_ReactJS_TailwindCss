import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai'

function ProductItem({ prod }) {
    return (

        <div className='flex p-2 items-center gap-y-1 bg-white flex-col text-sm font-semibold text-center'>


            {/* <span className='flex items-center justify-center pl-14 rounded text-brand-color bg-white cursor-pointer hover:text-brand-yellow border-brand-color '> <AiOutlinePlus size={22} /> </span> */}
            <a href="#" className=' top-3 right-3 bg-white w-8 h-8 flex items-center justify-center border border-gray-200 rounded-xl transition-all text-brand-color shadow-md hover:bg-brand-color  hover:border-brand-color hover:text-brand-yellow ' >
                <AiOutlinePlus size={22} />
            </a>
            <img src={prod.image} alt={prod.alt} />
            <div className=' text-brand-color' >{prod.price} TL</div>
            <div className=' text-gray-900' >{prod.title}</div>
            <div className='text-gray-500'>{prod.alt}</div>


        </div>

    )
}

export default ProductItem