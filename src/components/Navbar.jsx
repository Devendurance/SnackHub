/* eslint-disable no-unused-vars */

// import { cart } from "../Data";
import { useEffect, useRef, useState } from "react";
import logo from '../assets/logo.png';
import { BsSearch } from "react-icons/bs";
// BsFillMoonFill, BsFillSunFill 
import { CgProfile } from "react-icons/cg";
import { MdReorder } from "react-icons/md";
import { useLocation } from "react-router-dom";
import { useNavigate , Navigate} from "react-router-dom";
import { auth, provider } from "../firebase.config";
import { signInWithPopup } from "firebase/auth";
import { signOut} from "firebase/auth";

// import {getAuth, signInWithPopup, GoogleAuthProvider} from "firebase/auth";
// import {app} from "../firebase.config";
import { useStateValue } from "../context/StateProvider";
import { BsFillStarFill, BsStarHalf, BsFillEyeFill, BsFillCartFill } from "react-icons/bs";
import { actionType } from "../context/reducer";
import { useGetUserInfo } from "../hooks/useGetUserInfo";

const Navbar = () => {
  // const firebaseAuth = getAuth(app);
  // const provider = new GoogleAuthProvider();
  const [{ cart , showCart}, dispatch] = useStateValue();
  const { isAuth } = useGetUserInfo();
  const location = useLocation()
  const navigate = useNavigate()
  const navbarRef = useRef();
  const searchRef = useRef();
  // const cartRef = useRef();

  const clickCart = () =>{
    navigate('/checkout')

    //Dispatch action of showingCart state 

    // if (cart !== null){
    //   dispatch({
    //     type: actionType.SHOW_CART,
    //     showCart: !showCart,
    //   });
    // }
    // else{
    //   dispatch({
    //     type: actionType.SHOW_CART,
    //     showCart:  false,
    //   });
    // }
  }
  const navbarHandler = () => {
    navbarRef.current.classList.toggle("active");
    searchRef.current.classList.remove("active");
  };

  const searchHandler = () => {
    searchRef.current.classList.toggle("active");
    navbarRef.current.classList.remove("active");
    console.log(location)
  };

  const [value, setValue] = useState("")

  // const handleClick = () => {
  //   signInWithPopup(auth, provider).then((data) => {
  //     console.log(data)
  //     setValue(data.user.email);
  //     console.log(value)
  //     const userData = {
  //       email: data.user.email,
  //       avatar: data.user.photoURL,
  //       name: data.user.displayName,
  //       isAuth: true,
  //     }
  //     localStorage.setItem("email", JSON.stringify(userData))
  //     if (value) {
  //       navigate('/home')
  //     }
  //   })
  // }

  const signInWithGoogle = async () => {
    const results = await signInWithPopup(auth, provider);
    const authInfo = {
      userID: results.user.uid,
      name: results.user.displayName,
      email: results.user.email,
      avatar: results.user.photoURL,
      isAuth: true,
    };
    localStorage.setItem("email", JSON.stringify(authInfo));
    navigate("/home");
  };

  //To get user logged in from local storage into javasript object
  const [user, setUser] = useState(null)

  useEffect(() => {
    setValue(localStorage.getItem("email"));

    const ref = localStorage.getItem("email")
    if (ref) {
      setUser(JSON.parse(ref))
      console.log(user)
      // navigate("/home")
    }
  }, [])

  const signUserOut = async () => {
    try {
      await signOut(auth);
      localStorage.clear();
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  if (isAuth) {
    return <Navigate to="/home" />;
  }



  return (
    <header className="header">
      <a href="#" className="logo">
        <img
          src={logo}
          alt=""
          onClick={() => navigate('/')}
          className="logo"
        />
      </a>
      {location.pathname === '/' && <nav className="navbar"
        ref={navbarRef}
      >
        <a href="#home">home</a>
        <a href="#about">about</a>
        <a href="#menu">menu</a>
        <a href="#products">products</a>
        <a href="#review">review</a>
        <a href="#contact">contact</a>
        <a href="#blogs">blogs</a>
      </nav>}

      {location.pathname === '/home' && <nav className="navbar"
        ref={navbarRef}
      >
        {user && <div className="flex items center justify-center">
          <img className="rounded-full mt-20 w-1/2" src={user.avatar} alt="avatar" />
          <div onClick={signUserOut} className="text-[#f8901c] flex justify-center items-center cursor-pointer text-xl font-bold w-1/2"><p>logout</p></div>
          </div>}
      </nav>}

      <div className="icons flex !border !border-white">
        <div
          className="fas fa-search"
          id="search-btn"
          onClick={searchHandler}
        >
          <BsSearch />
        </div>

        {location.pathname === '/home' &&  <div onClick={clickCart} className="shoppingCart">
        <BsFillCartFill className="cart"  />
        <div className={`${!cart ? "noCartItem" : "cart_content"}`}>
          <p>{cart ? cart.length : ""}</p>
        </div>
      </div>}

        {location.pathname === '/' && <div
          className="fas fa-shopping-cart"
          id="cart-btn"
        // onClick={cartHandler}
        >
          <CgProfile
            onClick={signInWithGoogle}
          />
        </div>}

        <div
          className="fas fa-bars"
          id="menu-btn"
          onClick={navbarHandler}
        >
          <MdReorder />
        </div>
        <div
          id="menu-btn"
          onClick={navbarHandler}
        ></div>
      </div>
      <div className="search-form"
        ref={searchRef}
      >
        <input type="search" id="search-box" placeholder="search here..." />
        <label htmlFor="search-box" className="fas fa-search"></label>
      </div>

      <div className="cart-items-container"
      // ref={cartRef}
      >
        {/* {cart.map((item, index) => (
          <div className="cart-item" key={index * Math.random()}>
            <span className="fas fa-times"></span>
            <img src={item.img} alt="" />
            <div className="content">
              <h3>cart item 01</h3>
              <div className="price">$15.99/-</div>
            </div>
          </div>
        ))} */}
        <a href="#" className="btn">
          checkout now
        </a>
      </div>
    </header>
  );
};

export default Navbar;
