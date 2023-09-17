import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/Context";

function Header() {
  const {
    state: { cart },
  } = useContext(CartContext);
  const { filterDispatch } = useContext(CartContext);
  return (
    <div className="flex justify-around bg-stone-400 h-12 items-center sticky top-0">
      <Link to={"/"}>Shopping</Link>
      <label>Search</label>
      <input
        type="text"
        onChange={(e) => {
          filterDispatch({ type: "filterBySearch", payload: e.target.value });
        }}
      />
      <Link to={"/cart"}>Basket: {cart.length}</Link>
    </div>
  );
}

export default Header;
