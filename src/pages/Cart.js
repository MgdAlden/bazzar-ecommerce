
import { useEffect, useState } from "react";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

// import axios from "axios";

import CartItem from "../components/CartItem";
import StripeCheckout from "react-stripe-checkout";

const Cart = () => {
  const productData = useSelector((state) => state.bazaar.productData);
  const userInfo = useSelector((state) => state.bazaar.useInfo);
  const [totalAmt, setTotalAmt] = useState('');
  const [payNow, setPayNow] = useState(false);


  useEffect(() => {


    let price = 0;

    productData.map((item) => {

      price += item.price * item.quantity;
      return price;
    });
    setTotalAmt(price.toFixed(2));


  }, [productData])

  const handleCheckOut = () => {
    if (userInfo) {
      setPayNow(true);

    } else {
      toast.error('Please sign in to Checkout');
    }

  };
  
  
  
// TODO: This code is linked to the backend code


  // const payment = async(token) => {
  //   await axios.post("http://localhost:8000/pay",
  //   {
  //   amount:totalAmt * 100,
  //   token:token,
  //   }
  //   );
  // };
  



  return (

    <div>

      <img
        className="w-full h-60 object-cover"
        src="https://images.pexels.com/photos/1435752/pexels-photo-1435752.jpeg?auto=compress&dpr=1&w1260&h=840"
        alt=""
      />
      {productData.length === 0 ?

        <div className="w-full flex flex-col items-center justify-center gap-4 py-11">
          <p className="text-xl text-semibold text-red-500"> You Cart Empty. Please go back to Shopping and add products to Cart</p>
          <Link to='/'>
            <button className="mt-8 ml-7 text-base flex items-center gap-1 text-gray-400
       hover:text-black duration-300  ">
              <span><HiOutlineArrowLeft /></span>
              go shopping
            </button>
          </Link>

        </div>




        : <div className="max-w-screen-xl max-lg:pb-0 mx-auto px-2 py-20 flex max-lg:flex-col max-lg:gap-3 max-lg:justify-center max-lg:items-center">
          <CartItem />

          <div className=" max-lg:w-full w-1/3 bg-[#e1e1e1]  h-[500px]  flex items-center flex-col  py-6 px-4">
            <div className="flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6 ">
              <h2 className="text-2xl font-medium">cart totals</h2>
              <p className="flex items-center gap-4 text-base">

                Subtotal <span className="font-titleFont font-bold text-lg">$ {totalAmt}</span>
              </p>
              <p className="flex items-start gap-4 text-base">

                Shipping  <span className="font-titleFont font-bold text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit,quas veritatis .</span>
              </p>
            </div>
            <p className="font-titleFont w-full font-semibold flex justify-between pt-3 " >
              Total <span className=" text-xl font-bold  ">$ {totalAmt}</span> </p>

            <button
              onClick={handleCheckOut}

              className="text-base flex  bg-black text-white w-fit  px-2 py-3 mt-6 hover:bg-gray-800 duration-300">
              proceed to checkout
            </button>
            {
            
            payNow&&  <div className=" w-full mt-6 flex items-center justify-center">
            
            <StripeCheckout
            
            stripeKey="pk_test_51O4Nb0CUtU9fMYGyzjHTcMDInychOFnywdCIlPVHk2k9eONW7GxRmecoJVhQuGxi98NjmQwqSXs9LemkrEuhPkop00Q4qYmoiH"
            name="Bazaar Online Shopping"
            amount={totalAmt*100}
            label='Pay to bazaar'
            description={`Your Payment amount is $ ${totalAmt}`}
            // token={payment}
            email={userInfo.email}
            />
             </div>
            }
          </div>
        </div>}
      <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  )
}

export default Cart