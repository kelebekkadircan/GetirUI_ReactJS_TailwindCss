import React, { useEffect, useState } from 'react'




function Cards() {

    const cards = [
        {
            id: 1,
            image: 'https://getir.com/_next/static/images/intro-in-minutes-a7a9238a73013642a6597c4db06653c1.svg',
            title: 'Her siparişinize bir kampanya',
            description: " Getir'de vereceğiniz her siparişe uygun bir kampanya bulabilirsiniz "
        },
        {
            id: 2,
            image: 'https://getir.com/_next/static/images/intro-market-courier-34cd8b0ca1d547580d506566edfacf8d.svg',
            title: 'Dakikalar içinde kapınızda',
            description: " Getir'le siparişiniz dakikalar içinde kapınıza gelir "
        },
        {
            id: 3,
            image: 'https://getir.com/_next/static/images/intro-discount-6248544cb695830a2e25debd3c0f3d29.svg',
            title: 'Binlerce çeşit mutluluk',
            description: " Getir'de binlerce çeşit arasından seçiminizi yapabilirsiniz "
        },
    ]


    const [card, setCard] = useState([])



    useState(() => {

        setCard(cards)
    }, [])

    return (
        <>
            <div className='mt-10 grid grid-cols-3 gap-x-4 '>

                {card.length && card.map(card => (
                    <div className='bg-white p-14 rounded-lg shadow-2xl flex flex-col items-center justify-center text-center '>
                        <img className='w-36 h-36 mb-6' src={card.image} />
                        <h6 className='text-brand-color font-bold text-lg '>{card.title}</h6>
                        <p className='mt-2 text-gray-700'>{card.description}</p>
                    </div>
                ))}

            </div>

        </>

    )
}

export default Cards