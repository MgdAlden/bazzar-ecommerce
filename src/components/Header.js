import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';


import { cartImg, logodark } from '../assets';

const Header = () => {
    const [open, setOpen] = useState(false);
    const productData = useSelector((state) => state.bazaar.productData);
    const userInfo = useSelector((state) => state.bazaar.useInfo);
    const location = useLocation();

    console.log(location.pathname)


    let Links = [
        { name: "HOME", link: "/" },
        { name: "SERVICE", link: "/" },
        { name: "SHOP", link: "/#shop" },
        { name: "ABOUT", link: "/" },
        { name: "CONTACT", link: "/" },
    ];


    return (
        <div className='shadow-md w-full   items-center fixed top-0 left-0 z-40'>
            <div className='flex items-center  justify-between bg-white py-4 md:px-10 px-7 '>

                <div className='cursor-pointer '>
                    <Link to='/'>
                        <img src={logodark} alt="Logo" className='w-36  max-sm:w-32' />

                    </Link>

                </div>

                <div onClick={() => setOpen(!open)} className='text-3xl cursor-pointer md:hidden'>
                    <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
                </div>


                <ul  className={`  md:flex md:items-center md: gap-3 md:justify-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ' : 'top-[-490px]'}`}>



                    {
                        Links.map((link) => (
                            <li key={link.name} className='md:ml-5 font-titleFont text-center text-base  font-bold  md:my-0 my-5 cursor-pointer'>
                                <Link to={link.link} className='text-black decoration-[1px] hover:text-orange-900 hover:underline underline-offset-5 duration-300'>{link.name}</Link>
                            </li>
                        ))
                    }

<div className='flex justify-center items-center gap-5'>

 <Link to='/cart'>

                        <div className='relative'>
                            <img src={cartImg} alt="cartImg" className='w-10' />
                            <span className=' absolute w-6 top-3.5 left-2  text-sm flex items-center justify-center font-semibold font-titleFont'>
                                {productData.length}
                            </span>
                        </div>

                    </Link>


                    <Link  to='/login'>

                        <img className='w-8 h-8 rounded-full  '
                            src={userInfo ?
                                userInfo.image :
                                "https://images.pexels.com/photos/264547/pexels-photo-264547.jpeg?auto=compress&cs=tinysrgb&w1260&h=750&dpr=1"}
                            alt="userlogo" />
                    </Link>


                    {
                        userInfo && <p className='text-base font-titleFont font-semibold underline underline-offset-1 max-lg:hidden' >{userInfo.name}</p>
                    }



</div>
                   

                </ul>








                {/* 
                    <button className=' md:hidden'> <FaBars /> </button>
                    <button className=' md:hidden'> <FaTimes /> </button> */}



            </div>

        </div>
    )
}

export default Header