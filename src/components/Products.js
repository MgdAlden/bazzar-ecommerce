import React from 'react'
import ProductsCard from './productsCard'
const Products = ({ products }) => {




    return (
        <div id='shop' className='py-10 mx-4'>
            <div className='flex flex-col items-center gap-4'>
                <h1 className='max-md:text-base  text-2xl bg-black text-white py-2 px-2 max-md:w-fit  w-80 text-center'>Shopping everyday</h1>
                <span className='   w-20 h-[3px] bg-black'></span>

                <blockquote className="max-md:text-base  text-xl font-semibold italic text-center text-gray-700">
                    Welcome to the products of our 
                    <span className="before:block before:absolute mx-2 px-2 before:-inset-1 before:-skew-y-3 before:bg-gray-400 relative inline-block">
                        <span className="relative text-white ">bazaar </span>
                    </span>
                    website. We wish you happiness
                </blockquote>

            </div>
            <div className='max-w-screen-xl mx-auto gap-10  py-10 grid 
         
            md:grid-cols-2   max-lg:px-11
            xl:grid-cols-4  '>
                {products.map((item) => (
                    <ProductsCard key={item._id} product={item} />

                ))}
            </div>
        </div>
    )
}

export default Products