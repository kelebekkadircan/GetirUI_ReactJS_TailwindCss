import React from 'react'

function MobileApp() {
    return (
        <>
            <div className=' bg-mobile-app flex justify-between items-center bg-primary-brand-color  mt-7 rounded-lg text-white '>
                <div className='flex flex-col gap-y-3 p-10'>
                    <h3 className='font-bold text-3xl  tracking-tight' >Getir'i İndirin</h3>
                    <p className='text-xl font-semibold ' >İstediğiniz ürünü dakikalar içinde kapınız <br /> getirelim.</p>
                    <nav className='mt-5 flex gap-x-4 '>
                        <a href="#" className='transition-all hover:scale-110 transform'>
                            <img src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg" alt="" />
                        </a>
                        <a href="#" className='transition-all hover:scale-110 transform' >
                            <img src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg" alt="" />
                        </a>
                        <a href="#" className='transition-all hover:scale-110 transform'>
                            <img src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg" alt="" />
                        </a>
                    </nav>
                </div>
                <picture className='pt-6'>
                    <img src="https://cdn.getir.com/getirweb-images/common/landing/phoneLanding.png" alt="" />
                </picture>

            </div>

        </>
    )
}

export default MobileApp