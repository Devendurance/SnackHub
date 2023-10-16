import Cart from "../pages/Cart"
import { useStateValue } from "../context/StateProvider";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const [{ cart, total, showCart }, dispatch] = useStateValue();
  const navigate= useNavigate()
  let price;
  let sumWithInitial;
  const initialValue = 0;
  if (cart) {
    price = cart.map(data => data.price)
    var arrayOfNumbers = price.map(Number);
    console.log("prices: ", arrayOfNumbers)
    sumWithInitial = arrayOfNumbers.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);
    console.log(sumWithInitial);
  }
  return (
    <div className="h-screen w-1/2 mx-auto p-7">
      <p onClick={()=>navigate('/home')} className="text-3xl font-semibold hover:text-orange-500 cursor-pointer">Go back to homepage</p>
      {cart ?
        cart.map((data) => (
          <Cart
            key={data.id}
            itemId={data.id}
            name={data.name}
            imgSrc={data.imgSrc}
            qty={"4"}
            price={data.price}
          />
        )) : <div className="!text-black !font-bold !text-4xl"> ADD ITEM TO CART First</div>}
      {cart && <div className="totalSection">
        <h3>Total</h3>
        <p>
          <span>&#8358; </span> {sumWithInitial}
        </p>
      </div>}
      {cart && <Link to="https://paystack.com/pay/snackhub">
        <button className="checkOut">Check Out</button>

      </Link>}
    </div>
  )
}

export default Checkout

