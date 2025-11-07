import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';

const Article = () => {
    return (
        <section className='grid md:grid-cols-2'>

            <div className="m-5 md:m-2 relative">
                <img src="https://www.apple.com/v/home/cf/images/promos/ipad-pro/promo_ipadpro_avail__s271j89g8kii_small_2x.jpg" alt="" />

                <div className="flex flex-col absolute top-1 text-white w-full items-center">
                    <h1 className="text-xl font-bold md:text-4xl">iPad Pro</h1>
                    <p className="text-sm font-semibold md:text-lg">Unbelievably thin. Incredibly powerful.</p>

                    <div className="flex gap-5 mt-2">
                        <button className=" font-thin bg-blue-500 p-1 rounded-3xl text-white md:text-xl md:px-4 md:py-0  hover:bg-blue-600 hover:text-white">Learn more</button>
                        <button className="text-sm w-20 font-bold border border-blue-500 rounded-3xl p-1 bg-black text-blue-500 md:text-xl md:p-2  hover:bg-blue-600 hover:text-white">Buy</button>
                    </div>


                </div>


                <div className='flex absolute bottom-3 w-full items-center flex-col'>
                    <div className='flex'><p className='text-blue-600'
                    >Build for</p><p className='text-pink-400'>Apple</p><p className='text-orange-400'>Intelligence</p></div></div>
            </div>
            {/* two */}
            <div className="m-5 md:m-2 relative">
                <img src="https://www.apple.com/v/home/cf/images/promos/apple-watch-series-10/promo_apple_watch_series_10_avail__b9etp10v9tn6_small_2x.jpg" alt="" />

                <div className="flex flex-col absolute top-1 text-black w-full items-center">
                    <h1 className="text-xl font-bold md:text-4xl"> <i class="fa-brands fa-apple"></i> Watch 10</h1>
                    <p className="text-sm font-medium md:text-lg">SERIES 10</p>
                    <p className="text-sm font-medium md:text-lg">Thinstant classis</p>

                    <div className="flex gap-5 mt-2">
                        <button className=" font-thin bg-blue-500 p-1 rounded-3xl text-white md:text-xl md:px-4 md:py-0  hover:bg-blue-600 hover:text-white">Learn more</button>
                        <button className="text-sm w-20 font-bold border border-blue-500 rounded-3xl p-1 bg-white text-blue-500 md:text-xl md:p-2  hover:bg-blue-600 hover:text-white">Buy</button>
                    </div>
                </div>
            </div>
            {/* three */}
            <div className="m-5 md:m-2 relative ">
                <img src="https://www.apple.com/in/education/mac/images/overview/hero/hero_dsb1__dagkm4t9ni82_medium_2x.jpg" alt="" />

                <div className="flex flex-col absolute bottom-3 md:bottom-20  text-white w-full items-center">
                    <div className="flex gap-5 mt-2">
                        <button className=" bg-white p-1 rounded-2xl text-black  md:p-2">Learn more</button>
                    </div>
                </div>
            </div>
            {/* four */}
            <div className="m-5 md:m-2 relative">
                <img src="https://www.apple.com/v/home/cf/images/promos/airpods-4/promo_airpods_4_avail__bl22kvpg6ez6_small_2x.jpg" alt="" />

                <div className="flex flex-col absolute bottom-7 text-white w-full items-center">
                    <h1 className="text-xl font-bold md:text-4xl">AirPods 4</h1>
                    <p className="text-sm font-semibold md:text-lg">Iconic. Now Noise supersonic</p>
                    <p className="text-sm md:text-lg">Available with Active Noise Cancellation</p>

                    <div className="flex gap-5 mt-2">
                        <button className=" font-thin bg-blue-500 p-1 rounded-3xl text-white md:text-xl md:px-4 md:py-0  hover:bg-blue-600 hover:text-white">Learn more</button>
                        <button className="text-sm w-20 font-bold border border-blue-500 rounded-3xl p-1 bg-black text-blue-500 md:text-xl md:p-2  hover:bg-blue-600 hover:text-white">Buy</button>
                    </div>
                </div>
            </div>
            {/* five */}
            <div className="m-5 md:m-2 relative">
                <img src="https://www.apple.com/v/home/cf/images/promos/macbook-pro/promo_macbookpro_announce__gdf98j6tj2ie_medium_2x.jpg" alt="" />

                <div className="flex flex-col absolute top-7 gap-2 text-white w-full items-center">
                    <h1 className="text-xl font-bold md:text-4xl">MacBook Pro</h1>
                    <p className="text-sm font-semibold md:text-lg">A work Smart</p>

                    <div className="flex gap-5 mt-2">
                        <button className=" font-thin bg-blue-500 p-1 rounded-3xl text-white md:text-xl md:px-4 md:py-0  hover:bg-blue-600 hover:text-white">Learn more</button>
                        <button className="text-sm w-20 font-bold border border-blue-500 rounded-3xl p-1 bg-black text-blue-500 md:text-xl md:p-2  hover:bg-blue-600 hover:text-white">Buy</button>
                    </div>
                </div>

                 <div className='flex absolute bottom-3 w-full items-center flex-col'>
                    <div className='flex'><p className='text-blue-600'
                    >Build for</p><p className='text-pink-400'>Apple</p><p className='text-orange-400'>Intelligence</p></div></div>



            </div>
            {/* six */}
            <div className="m-5 md:m-2 relative">
                <img src="https://www.apple.com/v/home/cf/images/promos/iphone-tradein/promo_iphone_tradein__bugw15ka691e_medium_2x.jpg" alt="" />

                <div className="flex flex-col absolute top-10 text-black w-full items-center">
                    <h1 className="text-xl font-bold md:text-4xl"> <i class="fa-brands fa-apple"></i> Trade In</h1>
                    <p className="text-sm font-semibold md:text-lg">Upgrade and save. it's that easy.</p>

                    <div className="flex gap-5 mt-2">
                        <button className="text-sm font-thin bg-blue-500 p-1 rounded-2xl text-white md:text-lg md:p-2  hover:bg-blue-600 hover:text-white">Get Your estimate</button>
                    
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Article