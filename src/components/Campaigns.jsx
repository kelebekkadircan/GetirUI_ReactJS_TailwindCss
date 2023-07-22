import React, { useEffect, useState } from 'react'
import bannerData from '../api/Banners.json'
import Slider from 'react-slick'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'








function Campaigns() {

    const [campaign, setCampeign] = useState([])


    useEffect(() => {
        setCampeign(bannerData)
    }, [])


    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 750,
        autoplaySpeed: 3500,
        cssEase: "linear",



    };

    return (
        <>
            <div className='container mx-auto py-8'>
                <h3 className='text-sm font-semibold mb-3'>Kampanyalar</h3>
                <Slider className='-mx-2' {...settings}>
                    {campaign.length && campaign.map((camp, i) => (
                        <div key={camp.id} className='px-2' >
                            <img src={camp.image} className='rounded-lg' />
                        </div>
                    ))}

                </Slider>


            </div>

        </>

    )
}

export default Campaigns