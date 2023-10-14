// export const actionType = {
//   SET_USER: "SET_USER",
//   SET_FOOD_ITEMS: "SET_FOOD_ITEMS",
//   SET_CART_SHOW: "SET_CART_SHOW",
//   SET_CARTITEMS: "SET_CARTITEMS",
// };

// const reducer = (state, action) => {
//   // console.log(action);

//   switch (action.type) {
//     case actionType.SET_USER:
//       return {
//         ...state,
//         user: action.user,
//       };

//     case actionType.SET_FOOD_ITEMS:
//       return {
//         ...state,
//         foodItems: action.foodItems,
//       };

//     case actionType.SET_CART_SHOW:
//       return {
//         ...state,
//         cartShow: action.cartShow,
//       };

//     case actionType.SET_CARTITEMS:
//       return {
//         ...state,
//         cartItems: action.cartItems,
//       };

//     default:
//       return state;
//   }
// };

// export default reducer;


export const initialState = {
  cart: null,
  total: null,
  showCart: false,
};

export const actionType = {
  SET_CART: "SET_CART",
  SET_TOTAL: "SET_TOTAL",
  SHOW_CART: "SHOW_CART",
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case actionType.SET_CART:
      return {
        ...state,
        cart: action.cart,
      };

    case actionType.SET_TOTAL:
      return {
        ...state,
        total: action.total,
      };
    case actionType.SHOW_CART:
      return {
        ...state,
        showCart: action.showCart,
      };

    default:
      return state;
  }
};

console.log(initialState.showCart)

export default reducer;

