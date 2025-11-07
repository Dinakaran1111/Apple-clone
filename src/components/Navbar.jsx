
import React, { useState } from 'react';

import '@fortawesome/fontawesome-free/css/all.min.css';



const Navlinks = [
    {
        name: "Store",
        href: "#",
    },

    {
        name: "Mac",
        href: "#",
    },

    {
        name: "ipad",
        href: "#",
    },
    {
        name: "iphone",
        href: "#",
    }, {
        name: "Watch",
        href: "#",
    },

    {
        name: "Airpods",
        href: "#",
    }, {
        name: "Tv&Home",
        href: "#",
    }, {
        name: "Entertainment",
        href: "#",
    }, {
        name: "Accessories",
        href: "#",
    }, {
        name: "Support",
        href: "#",
    },
]

const Navbar = () => {

    const [isNavOpen, setIsNavOpen] = useState(false);

    return (
        <nav>

            {/* lap screen */}
            <div className='m-4 bg-white/50 backdrop-blur-sm md:block'>
                <div className='flex md:hidden justify-between'>
                    <i class="fa-brands fa-apple"></i>


                    <i onClick={() => setIsNavOpen(true)} class="fa-solid fa-bars"></i>
                </div>


                <ul className='hidden space-x-12 text-sm justify-center md:flex'>
                    <a href=""><i class="fa-brands fa-apple"></i></a>

                    {Navlinks.map((link, index) => (
                        <li key={index}>
                            <a href="">
                                {link.name}
                            </a>
                        </li>

                    )
                    )}

                    <p><i class="fa-solid fa-magnifying-glass"></i></p>
                    <p><i class="fa-solid fa-bag-shopping"></i></p>

                </ul>

            </div>

            {/* mobile screen */}

            <div id='side-nav' style={{
                width: "50%", height: "100vh", right: isNavOpen ? "0" : "-50%",
                transition: "right .8s ease",
            }} className='fixed z-20 top-0 bg-slate-100'>
                <div className='text-right p-5'>
                    <p onClick={() => setIsNavOpen(false)} className='inline cursor-pointer'>X</p></div>
                <ul className='flex flex-col gap-10  items-center top-0 '>

                    <a href=""><i class="fa-brands fa-apple"></i></a>

                    {Navlinks.map((link, index) => (
                        <li key={index}>
                            <a href="">
                                {link.name}
                            </a>

                        </li>

                    )
                    )}



                </ul>
            </div>




        </nav>







    )




}

export default Navbar