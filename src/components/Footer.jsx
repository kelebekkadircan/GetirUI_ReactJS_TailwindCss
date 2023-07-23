
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"
import Menu from "./ui/Menu"



function Footer() {

    const menus = [
        {
            title: 'Getir\'i keşfedin',
            items: [
                {
                    title: 'Hakkımızda'
                },
                {
                    title: 'Kariyer'
                },
                {
                    title: 'İletişim'
                },
                {
                    title: 'Teknoloji Kariyerleri'
                },
                {
                    titile: 'Sosyal Sorumluluk Projeleri'
                }
            ]
        },
        {
            title: 'Yardıma mı ihtiyacınız var ?',
            items: [
                {
                    title: 'Sıkça Sorulan Sorular'
                },
                {
                    title: 'Kişisel Verilerin Korunması'
                },
                {
                    title: 'Gizlilik Politikası'
                },
                {
                    title: 'Kullanım Koşulları'
                },
                {
                    titile: 'Çerez Politikası'
                }
            ]
        },
        {
            title: 'İş Ortağımız Olun',
            items: [
                {
                    title: 'Bayimiz Olun'
                },
                {
                    title: 'Deponuzu Kiralayın'
                },
                {
                    title: 'GetirYemek Restoranı Olun'
                },
                {
                    title: 'GetirÇarşı İşletmesi Olun'
                },
                {
                    titile: 'Zincir Restoranlar'
                }
            ]
        },
    ]


    return (
        <>
            <div className='bg-white mt-10'>
                <div className='container mx-auto '>
                    <div className='grid grid-cols-4 pt-10'>
                        <section>
                            <nav className='grid gap-y-4'>
                                <h6 className='font-semibold text-brand-color text-2xl'>Getir'i indirin</h6>
                                <a href="#">
                                    <img src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg" alt="" />
                                </a>
                                <a href="#">
                                    <img src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg" alt="" />
                                </a>
                                <a href="#">
                                    <img src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg" alt="" />
                                </a>
                            </nav>
                        </section>
                        {menus.map((menu, index) => <Menu key={index} {...menu} />)}
                    </div>
                    <div className="flex justify-between items-center border-t border-gray-200 mt-6 pt-6 ">
                        <div className="text-xs text-gray-700 flex gap-x-6">
                            &copy; 2023 Getir
                            <a href="#" className="text-primary-brand-color hover:underline">
                                Bilgi Toplumu Hizmetleri
                            </a>
                        </div>
                        <nav className="flex gap-x-3 transition-all items-center" >
                            <a href="#" className="w-8 h-8 rounded-xl text-gray-700 hover:bg-primary-brand-color hover:bg-opacity-10 flex hover:text-primary-brand-color items-center justify center ">
                                <FaFacebook size={22} />
                            </a>
                            <a href="#" className="w-8 h-8 rounded-xl text-gray-700 hover:bg-primary-brand-color hover:bg-opacity-10 flex hover:text-primary-brand-color items-center justify center ">
                                <FaTwitter size={22} />
                            </a>
                            <a href="#" className="w-8 h-8 rounded-xl text-gray-700 hover:bg-primary-brand-color hover:bg-opacity-10 flex hover:text-primary-brand-color items-center justify center ">
                                <FaInstagram size={22} />
                            </a>
                        </nav>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Footer