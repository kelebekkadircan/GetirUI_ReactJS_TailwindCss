import React, { useState } from 'react'
import Slider from "react-slick";
// import "~slick-carousel/slick/slick.css";
import ReactFlagsSelect from "react-flags-select";
import { FaFacebook } from 'react-icons/fa'



function HeroSection() {

    const [selected, setSelected] = useState("TR");

    const phones =
    {







        AF: "93 ",
        AL: "355 ",
        DZ: "213 ",
        AS: "1684",
        AD: "376 ",
        AO: "244 ",
        AI: "1264",
        AQ: "672 ",
        AG: "1268",

        US: 1,
        DE: "+13",
        TR: "+90",
        FR: "+21",
    }


    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 750,
        autoplaySpeed: 3500,
        cssEase: "linear"


    };




    return (
        <>
            <div className='h-[500px] relative before:bg-gradient-to-r  before:from-primary-brand-color before:to-transparent before:absolute before:inset-0 before:h-full before:w-full before:z-10 '>

                <Slider {...settings}>
                    <div>
                        <img className='w-full h-[500px] object-cover' src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-1.jpg" alt="resim1" />
                    </div>
                    <div>
                        <img className='w-full h-[500px] object-cover' src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-2.jpg" alt="resim1" />
                    </div>
                    <div>
                        <img className='w-full h-[500px] object-cover' src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-4.jpg" alt="resim1" />
                    </div>

                </Slider>

                <div className='container flex justify-between items-center absolute top-0 left-1/2 -translate-x-1/2 h-full z-20'>
                    <div >

                        <img src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg" alt="getirbimutluluk" />
                        <h3 className='mt-8 text-white font-semibold text-4xl' >Dakikalar İçinde <br /> Kapınızda <br /> </h3>
                    </div>
                    <div className='w-[400px] rounded-xl bg-gray-200 p-6 '>
                        <h4 className='text-primary-brand-color text-center font-semibold mb-4'>Giriş yap veya kayıt ol</h4>

                        <div className='grid gap-y-3'>
                            <div className='flex gap-x-2'>
                                <ReactFlagsSelect
                                    countries={Object.keys(phones)}
                                    customLabels={phones}
                                    onSelect={code => setSelected(code)}
                                    selected={selected}
                                    className='flag-select'

                                />
                                <label className='flex-1 relative group block cursor-pointer'>
                                    <input required type="number" className='h-14 px-4 border-2 border-gray-300 rounded w-full transition-colors hover:border-primary-brand-color outline-none focus:border-primary-brand-color peer text-sm' />
                                    <span className=' hover:border-primary-brand-color absolute top-0 left-2 h-full px-4 flex text-sm text-gray-600 items-center transition-all peer-focus:h-5 peer-focus:text-primary-brand-color peer-focus:text-xs     peer-valid:h-5 peer-valid:text-primary-brand-color peer-valid:text-xs    '>Telefon Numarası</span>
                                </label>
                            </div>

                            <button className='hover:bg-brand-color transition-colors hover:text-brand-yellow bg-brand-yellow text-brand-color h-12 flex items-center justify-center rounded-md w-full mt-2 text-sm font-semibold'>
                                Telefon numarası ile devam et
                            </button>

                            <hr className='h-[1px] bg-amber-600 my-1 ' />
                            <button className='gap-x-3  hover:bg-blue-700 transition-colors hover:text-white bg-blue-200 text-blue-700 h-12 flex items-center justify-center rounded-md w-full mt-2 text-sm font-semibold'>
                                <FaFacebook size={20} />
                                Facebook ile Giriş Yap
                            </button>
                        </div>


                    </div>
                </div>

            </div>
        </>
    )
}

export default HeroSection;