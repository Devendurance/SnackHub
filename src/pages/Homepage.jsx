/* eslint-disable no-unused-vars */
// import { BsSearch, BsFillCartFill} from "react-icons/bs";
// import { useEffect, useState } from "react";
// import { useStateValue } from "./StateProvider";

import { useEffect, useState } from "react"
// import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase.config";
import { MenuItems, Items } from '../utils/HomeData'
import BannerName from "../components/BannerName";
import MenuCard from "../components/MenuCard";
import ItemCard from "../components/ItemCard";
import DebitCard from "../components/DebitCard";
import SubMenuContainer from "../components/SubMenuContainer";
import MenuContainer from "../components/MenuContainer";
import { useStateValue } from "../context/StateProvider";
import CartItem from "../components/CartItem";
import { AiFillHome, AiFillMessage } from "react-icons/ai";
import { MdAccountBalanceWallet, MdFavorite } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { IoSettingsSharp } from "react-icons/io5";
import { BsFillCartFill } from "react-icons/bs"
// import Checkout from "../components/Checkout";


const Homepage = () => {
  // const navigate = useNavigate()
  const newUser = JSON.parse(localStorage.getItem('email'))
  // const carta = JSON.parse(localStorage.getItem("cart"))
  // console.log(carta)
  const [user, setUser] = useState(null)
  const [isMainData, setMainData] = useState(
    Items.filter((element) => element.itemId == "buger01")
  );
  // const oga = useStateValue
  // console.log(oga)
  const [{ cart, total, showCart }, dispatch] = useStateValue(); //use state value
  const [totalPrice, setTotalPrice] = useState(0);
  // const [userLogged, setUserLogged] = useState(null)

  useEffect(() => {
    const menuLi = document.querySelectorAll("#menu li");

    function setMenuActive() {
      menuLi.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }

    menuLi.forEach((n) => n.addEventListener("click", setMenuActive));

    // menu Card active class changer
    const menuCard = document
      .querySelector(".rowContainer")
      .querySelectorAll(".rowMenuCard");

    function setMenuCardActive() {
      menuCard.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }

    menuCard.forEach((n) => n.addEventListener("click", setMenuCardActive));
    console.log(newUser)
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
        console.log('I AM THE USER', user)
      }
      else {
        setUser(null)
      }
    })
    return () => unsubscribe();

  }, [newUser, isMainData, cart, showCart, total, totalPrice]);
  console.log(newUser)

  const setData = (itemId) => {
    setMainData(Items.filter((element) => element.itemId == itemId));
  };



  return (
    <div className="!text-black mt-24">
      {/* <Navbar/> */}
      {/* <img className="rounded-full" src={newUser.avatar} alt="" /> */}
      {/* <div onClick={logoutHandler} className="text-black">logout</div> */}
      {/* ksdjdkjd */}
      <div className="leftMenu">
        <ul id="menu">
          {/* prettier-ignore */}
          <MenuContainer link={'/home'} icon={<AiFillHome className="font-bold text-[#373848] text-[26px]" />} isHome />
          {/* prettier-ignore */}
          <MenuContainer link={'/checkout'} icon={<BsFillCartFill className="font-bold text-[#373848] text-[26px]" />} />
          {/* prettier-ignore */}
          <MenuContainer link={'#'} icon={<MdAccountBalanceWallet className="font-bold text-[#373848] text-[26px]" />} />
          {/* prettier-ignore */}
          <MenuContainer link={'#'} icon={< MdFavorite className="font-bold text-[#373848] text-[26px]" />} />
          {/* prettier-ignore */}
          <MenuContainer link={'#'} icon={<CgProfile className="font-bold text-[#373848] text-[26px]" />} />
          {/* prettier-ignore */}
          <MenuContainer link={'#'} icon={<IoSettingsSharp className="font-bold text-[#373848] text-[26px]" />} />
          <div className="indicator"></div>
        </ul>
      </div>
      <main>
        <div className="mainContainer">

          {/* Showing Cart Items As a Popup When The Cart Icon Is Clicked  */}

          {/* {cart && <div className="fixed z-40 top-32 right-10 bg-white">
            {showCart &&
              carta.map((data) => (
                <Checkout
                  key={data.id}
                  itemId={data.id}
                  name={data.name}
                  imgSrc={data.imgSrc}
                  qty={"4"}
                  price={data.price}
                />
              ))}

          </div>} */}
          {/* Banner  */}
          <div className="banner">
            <BannerName name={newUser.name} discount={"20"} more={"#"} />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fdelivery.png?alt=media&token=69b9823d-96df-452a-bd4e-14d27a4cc337"
              alt=""
              className="deliveryPic"
            />
          </div>


          <div className="dishContainer">
            <div className="menuCard">
              <SubMenuContainer />
            </div>

            <div className="rowContainer">
              {MenuItems &&
                MenuItems.map((data) => (
                  <div key={data.id} onClick={() => setData(data.itemId)}>
                    <MenuCard
                      imgSrc={data.imgSrc}
                      name={data.name}
                      isActive={data.id == "1" ? true : false}
                    />
                  </div>
                ))}
            </div>

            <div className="dishItemContainer">
              {isMainData &&
                isMainData.map((data) => (
                  <ItemCard
                    key={data.id}
                    itemId={data.id}
                    imgSrc={data.imgSrc}
                    name={data.name}
                    ratings={data.ratings}
                    price={data.price}
                  />
                ))}
            </div>
          </div>
        </div>
        <div className="rightMenu">
          <div className="debitCardContainer">
            <div className="debitCard">
              <DebitCard name={newUser.name} />
            </div>
          </div>

          {!cart ? (
            <div className="addSomeItem">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2FemptyCart.png?alt=media&token=50b733d4-cdd9-4025-bffe-8efa4066ca24"
                alt=""
                className="emptyCart"
              />
            </div>
          ) : (
            <div className="cartCheckOutContianer">
              <div className="cartContainer">
                <SubMenuContainer />

                <div className="cartItems">
                  {cart &&
                    cart.map((data) => (
                      <CartItem
                        key={data.id}
                        itemId={data.id}
                        name={data.name}
                        imgSrc={data.imgSrc}
                        qty={"4"}
                        price={data.price}
                      />
                    ))}
                </div>
              </div>

            </div>
          )}
        </div>
      </main>


    </div>
  )
}

export default Homepage


