/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// import { AddRounded, RemoveRounded } from "@mui/icons-material";
import { BsChevronRight } from "react-icons/bs";
import { useEffect, useState } from "react";
import { actionType } from "../context/reducer";
import { useStateValue } from "../context/StateProvider";
import { BiPlus,BiMinus } from "react-icons/bi";
let cartItems = [];

function Checkout({ itemId, name, imgSrc, price }) {

  console.log("i am", itemId)
  const carta = JSON.parse(localStorage.getItem("cart"))
  const [qty, setQty] = useState(1);
  const [itemPrice, setItemPrice] = useState(parseInt(qty) * parseFloat(price));
  const [{ cart, total }, dispatch] = useStateValue();

  useEffect(() => {
    cartItems = cart;
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
        console.log("I am quantitty",qty);
      }
    }
  };

  return (
    <div className="cartItem" id={itemId}>
      <div className="imgBox">
        <img src={imgSrc} alt="" />
      </div>
      <div className="itemSection">
        <h2 className="itemName font-bold">{name}</h2>
        <div className="itemQuantity">
          <span>x {qty}</span>
          <div className="quantity">
            <BiMinus
              className="itemRemove"
              onClick={() => {
                console.log('clicked')
                updateQty("remove", itemId)
                // let del = carta.filter(cart => cart.itemId !== itemId)
                // console.log(del)
              }}
            />
            < BiPlus 
              className="itemAdd"
              onClick={() => updateQty("add", itemId)}
            />
          </div>
        </div>
      </div>
      <p className="itemPrice">
        <span className="dolorSign">&#8358;</span>{" "}
        <span className="itemPriceValue">{itemPrice}</span>
      </p>

      

      
    </div>
  );
}

export default Checkout;