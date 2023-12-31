import React from 'react'

function Menu({ title, items }) {
    return (
        <>
            <section>
                <nav className='grid gap-y-4'>
                    <h6 className='text-lg text-primary-brand-color'>{title}</h6>
                    <nav>
                        <ul className='grid gap-y-2'>
                            {items.map((item, index) => (
                                <li key={index}>
                                    <a href="#" className='text-sm hover:text-brand-color transition-all '>
                                        {item.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </nav>
            </section>

        </>
    )
}

export default Menu