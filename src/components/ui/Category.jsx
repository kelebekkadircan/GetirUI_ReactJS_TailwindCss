import React from 'react'

function Category({ cat: { id, title, image } }) {
    return (
        <>
            <div>
                <a href="#" className='flex gap-y-2 flex-col group items-center text-center p-4 transition-all hover:bg-purple-100' >
                    <img src={image} alt={title} className='w-12 h-12 rounded-xl border border-gray-200 ' />
                    <span className='whitespace-nowrap tracking-tight text-sm font-semibold group-hover:text-brand-color text-gray-600'>{title} </span>
                </a>
            </div>
        </>
    )
}

export default Category