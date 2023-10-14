/* eslint-disable no-empty-pattern */
/* eslint-disable react/prop-types */
// import { AddRounded, Favorite, StarRounded } from "@mui/icons-material";
import { useState } from "react";
import { actionType } from "../context/reducer";
import { useStateValue } from "../context/StateProvider";
import { Items } from '../utils/HomeData';
import { useEffect } from "react";

import { MdFavorite} from "react-icons/md";
import { BsFillStarFill, BsStarHalf, BsFillEyeFill, BsFillCartFill } from "react-icons/bs";
import { BiPlus } from "react-icons/bi";

let cartData = [];

function ItemCard({ itemId, imgSrc, name, price, ratings }) {
  const [currentValue, setCurrentValue] = useState(Math.floor(ratings));
  const [isFavourite, setFavourite] = useState(false);
  const [{}, dispatch] = useStateValue(); //use state value
  const [isCart, setCart] = useState(null);
  const [isTotal, setTotal] =useState(null);

  useEffect(() => {
    if (isCart) {
      cartData.push(isCart);
      dispatch({
        type: actionType.SET_CART,
        cart: cartData,
      });
    }
  }, [isCart]);

  const handleClick = (value) => {
    setCurrentValue(value);
  };

  return (
    <div className="itemCard" id={itemId}>
      <div
        className={`isFavourite ${isFavourite ? "active" : ""}`}
        onClick={() => setFavourite(!isFavourite)}
      >
        
        <MdFavorite className="!text-red-400 text-4xl"/>
      </div>

      <div className="imgBox">
        <img src={imgSrc} alt="" className="itemImg" />
      </div>

      <div className="itemContent">
        <h3 className="itemName font-bold">{name}</h3>
        <div className="bottom flex">
          <div className="ratings flex w-20 flex-wrap">
            {Array.apply(null, { length: 5 }).map((e, i) => (
              <i
                key={i}
                className={`rating ${currentValue > i ? "orange" : "gray"}`}
                onClick={() => handleClick(i + 1)}
              >
                
                <BsFillStarFill className="!flex !font-bold flex-row"/>
              </i>
            ))}
            <h3 className="price font-bold mt-4">
              <span>&#8358; </span>
              {price}
            </h3>
          </div>
          <i
            className="addToCart"
            onClick={() => {
              console.log('clicked')
              setCart(Items.find((n) => n.id === itemId));
            }}
          >
            
            < BiPlus className='text-white text-3xl font-semibold' />
          </i>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
