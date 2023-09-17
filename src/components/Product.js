import { useContext } from "react";
import { CartContext } from "../context/Context";

function Product({ product }) {
  const { dispatch } = useContext(CartContext);
  const {
    state: { cart },
  } = useContext(CartContext);
  return (
    <div className="">
      <div className="grid grid-rows gap-y-12  text-center">
        <h1 className="mt-8">{product.title}</h1>
        <img className="w-48 h-56" src={product.image} />
        {cart.some((p) => p.id === product.id) ? (
          <button
            className="bg-red-300 rounded-lg w-24 ml-24"
            onClick={() => {
              dispatch({ type: "remove", payload: product });
            }}
          >
            Remove
          </button>
        ) : (
          <button
            onClick={() => {
              dispatch({ type: "add", payload: product });
            }}
            className="bg-blue-200 w-24 ml-24 rounded-lg"
          >
            Add
          </button>
        )}
      </div>
    </div>
  );
}

export default Product;
