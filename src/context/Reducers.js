export function cartReducer(state, action) {
  switch (action.type) {
    case "add":
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }],
      };
    default:
      return state;

    case "remove":
      return {
        ...state,
        cart: state.cart.filter(
          (cartItem) => cartItem.id !== action.payload.id
        ),
      };
    case "increase":
      return {
        ...state,
        cart: state.cart.filter((c) =>
          c.id === action.payload ? (c.quantity += 1 / 2) : c.quantity
        ),
      };

    case "descrease":
      return {
        ...state,
        cart: state.cart.filter((c) =>
          c.id === action.payload
            ? (c.quantity = c.quantity - 1 / 2)
            : c.quantity
        ),
      };
  }
}
export function filterReducer(state, action) {
  switch (action.type) {
    case "asc":
      return { ...state, sort: action.payload };
    case "dsc":
      return { ...state, sort: action.payload };
    case "filterBySearch":
      return { ...state, searchQuery: action.payload };
    case "clearFilter":
      return { ...state, checked: action.payload };
  }
}
/* case "add":
      return { ...state, cart: [...state.cart, { ...action.payload }] };
    default:
      return state;
...state,
        cart: state.cart.map((cartItem) =>
          cartItem.id === action.id
            ? { ...cartItem, quantity: cartItem.quantity + action.payload }
            : cartItem
        )*/

/*...state,
        cart: state.cart.filter((cartItem) =>
          cartItem.id === action.payload.id
            ? { ...(cartItem.quantity = cartItem.quantity + 1) }
            : cartItem*/
/*state.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }*/
