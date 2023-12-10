import { ImGithub } from 'react-icons/im';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaHome } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md'
import { BsPersonFill, BsPaypal } from 'react-icons/bs'
import { logolight, paymentLogo } from '../assets';

const Footer = () => {
    return (
        <div id="footer"   className='bg-black text-[#949494] py-20 font-titleFont '>

            <div className='max-w-screen-xl mx-auto  grid  
            max-md:justify-center max-md:gap-5 
            md:grid-cols-2 md:px-5 md:gap-4
            xl:grid-cols-4'>
                {/*================ logoIcon Start here =================*/}
                <div className='flex flex-col gap-7'>
                    <img className='w-44' src={logolight} alt="logolight" />
                    <p className='text-white text-sm tracking-wide '>© M.bazaar.com</p>
                    <img className='w-56' src={paymentLogo} alt="paymentLogo" />
                    <div className='flex gap-5 text-lg text-gray-400'>
                        <ImGithub className='hover:text-white duration-300 cursor-pointer' />
                        <FaYoutube className='hover:text-white duration-300 cursor-pointer' />
                        <Link to='https://www.facebook.com/mgd.rays'>
                           <FaFacebookF className='hover:text-white duration-300 cursor-pointer' />    
                        
                        </Link>
                 
                        <FaTwitter className='hover:text-white duration-300 cursor-pointer' />
                        
                        
                        <Link to='https://www.instagram.com/mgdrays/'>
                        
                        <FaInstagram className='hover:text-white duration-300 cursor-pointer' />
                        </Link>
                        
                        
                    </div>
                </div>
                {/*================ logoIcon End here ===================*/}


                {/*================ locateUs Start here  ================*/}
                <div>

                    <h1 className='text-2xl font-semibold text-white mb-4'>Locate Us</h1>
                    <div className='text-base  flex flex-col gap-2 '>
                        <p>  Hama , syria</p>
                        <p>Mobile : 00963 0932428191</p>
                        <p>Phone  : 033 27272.....</p>
                        <p>e-mail : mgdrys234@gmail.com</p>
                    </div>

                </div>
                {/*================ locateUs end here  ==================*/}


                {/*================ profile start here ==================*/}
                <div>
                    <h1 className='text-2xl font-semibold text-white mb-4'>profile</h1>
                    <div className='text-base  flex flex-col gap-2 '>

                        <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'><span><BsPersonFill /></span>my account</p>
                        <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'><span><BsPaypal /></span>checkout</p>
                        <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'><span><FaHome /></span>order tracking</p>
                        <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'><span><MdLocationOn /></span>help & support</p>


                    </div>

                </div>
                {/*================ profile end here  ===================*/}
                
                {/*================ subcribe start here =================*/}
                
                <div className='flex flex-col justify-center'>   <input type="text" placeholder='e-mail' className='bg-transparent border  px-4 py-2 text-sm'/>
                <button className='text-sm border text-white border-t-0  hover:bg-gray-900 active:bg-white active:text-black'> Subscribe</button>
                </div>
                {/*================ subcribe end here  ==================*/}

           


            </div>

        </div>
    )
}

export default Footer