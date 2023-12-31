import { useState, useEffect } from "react";
import {VscError} from "react-icons/vsc"

const cartItems = [

  {
    productId: "sdfsfe",
    photo: "https://i.pinimg.com/564x/65/7b/8e/657b8e45c62448b6f2dec8e461001284.jpg",
    name: "macbook",
    price: 324,
    stock: 34,
    quantity: 4
  }

];
const subtotal = 4000;
const tax = Math.round(subtotal * 0.18);
const shippingCharges = 200;
const discount = 100;
const total = subtotal + tax + shippingCharges;
const Cart = () => {

  const [couponCode, setCouponCode] = useState<String>("")
  const [isValidCouponCode, setIsValidCouponCode] = useState<boolean>(false)

  useEffect(() => {
   const timeOutId = setTimeout(() => {
    if(Math.random() > 0.5){
      setIsValidCouponCode(true)
    }else{
      setIsValidCouponCode(false)
    }
   }, 1000);    

    return () => {
      clearTimeout(timeOutId)
      setIsValidCouponCode(false)
    }
  }, [couponCode])
  

  return (
    <div className="cart">
      <main>
        {
          cartItems.map((i,idx)=> (<cartItems key={idx} cartItem={i} />)
            )
        }
      </main>
      <aside>

        <p>Subtotal: ${subtotal}</p>
        <p>Shipping charges: ${shippingCharges}</p>
        <p>Tax: ${tax}</p>
        <p>
          Discount - <em>
           ${discount}
           </em>
        </p>
        <p>
          <b>Total: ${total}</b>
        </p>

        <input type="text" placeholder="Coupan code" 
        value={couponCode} onChange={(e)=> setCouponCode(e.target.value)}/>
        {
          couponCode && (
            isValidCouponCode? (
            <span className="green">${discount} off using the <code>{couponCode}</code></span> ) :( 
            <span className="red">Invalid <VscError /></span>)
          
          )
        }
      </aside>
    </div>
  )
}

export default Cart