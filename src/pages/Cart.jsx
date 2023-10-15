import { useStateValue } from "../context/StateProvider";
import { useEffect, useState } from "react";
import { actionType } from "../context/reducer";
import { BiPlus, BiMinus } from "react-icons/bi";
import { Link } from "react-router-dom";




let cartItems = [];

const Cart = () => {
  const [{ cart, total }, dispatch] = useStateValue();
  let price;
  let sumWithInitial;
  const initialValue = 0;
  if (cart) {
    price = cart.map(data => data.price)
    var arrayOfNumbers = price.map(Number);
    console.log(arrayOfNumbers)
    sumWithInitial = arrayOfNumbers.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);
    console.log(sumWithInitial);

  }
  const [qty, setQty] = useState(1);
  const [itemPrice, setItemPrice] = useState(parseInt(qty) * parseFloat(price));
  console.log('hshsh', price)

  useEffect(() => {
    cartItems = cart;
    // localStorage.setItem("cart", JSON.stringify(cartItems))
    setItemPrice(parseInt(qty) * parseFloat(price));
  }, [qty]);

  const updateQty = (action, id) => {
    if (action == "add") {
      setQty(qty + 1);
    } else {
      // initial state value is one so you need to check if 1 then remove it
      if (qty == 1) {
        cartItems.pop(id);
        dispatch({
          type: actionType.SET_CART,
          cart: cartItems,
        });
      } else {
        setQty(qty - 1);
        console.log(qty);
      }
    }
  };
  return (
    <div className="!h-[100vh] !w-1/2 mx-auto p-7 mt-4  ">

      <Link to='/home'>
        <p className="hover:text-orange-500 text-xl">Go back to home</p>
      </Link>

      {cart ?
        cart.map((data) => (
          <div
            key={data.id}
          >
            <div className="cartItem" id={data.id}>
              <div className="imgBox">
                <img src={data.imgSrc} alt="" />
              </div>
              <div className="itemSection">
                <h2 className="itemName font-bold">{data.name}</h2>
                <div className="itemQuantity">
                  <span>x {qty}</span>
                  <div className="quantity">
                    <BiMinus
                      className="itemRemove"
                      onClick={() => {
                        console.log('clicked')
                        updateQty("remove", data.id)
                      }}
                    />
                    < BiPlus
                      className="itemAdd"
                      onClick={() => updateQty("add", data.id)}
                    />
                  </div>
                </div>
              </div>
              <p className="itemPrice">
                <span className="dolorSign">&#8358;</span>{" "}
                <span className="itemPriceValue">{itemPrice}</span>
              </p>




            </div>
          </div>
        )) : <div className="!text-black !font-bold !text-4xl"> ADD ITEM TO CART First</div>}
      <div className="totalSection">
        <h3>Total</h3>
        <p>
          <span>&#8358; </span> {sumWithInitial}
        </p>
      </div>
      <button className="checkOut">Check Out</button>
    </div>
  )
}

export default Cart
