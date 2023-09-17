import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import dataProduct from "../api/data.json";
import { cartReducer, filterReducer } from "./Reducers";
const CartContext = createContext();

export default function Context({ children }) {
  const [products, setProducts] = useState(dataProduct);

  useEffect(() => {
    setProducts(dataProduct);
  }, []);
  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });
  const [filterState, filterDispatch] = useReducer(filterReducer, {
    sort: "",
    searchQuery: "",
    checked: "false",
  });
  return (
    <CartContext.Provider
      value={{ state, dispatch, filterState, filterDispatch }}
    >
      {children}
    </CartContext.Provider>
  );
}
export { Context, CartContext };
/*useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
    }
    fetchData();
  }, []);*/
/*const initialState = {
    products: products,
    cart: [],
  };
  const [state, dispatch] = useReducer(cartReducer, initialState);*/
