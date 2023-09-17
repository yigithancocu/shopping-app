import { useContext, useState, useEffect } from "react";
import { CartContext } from "../context/Context";
import Basket from "./Basket";
import { Link } from "react-router-dom";

function Cart() {
  const {
    state: { cart },
  } = useContext(CartContext);
  const { dispatch } = useContext(CartContext);

  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.quantity, 0)
    );
  }, [cart]);
  return (
    <div>
      {cart.length === 0 ? (
        <div className=" mt-48 text-center">
          <h1>Add some products to basket</h1>
          <Link
            className="bg-stone-400 w-48 text-stone-800 rounded-lg"
            to={"/"}
          >
            Contiune shopping
          </Link>
        </div>
      ) : (
        <div className="flex ">
          <div>
            {cart.map((basket) => (
              <div>
                <div className="flex ml-48">
                  <div className="flex mt-20 w-full">
                    <img className="w-48 h-56" src={basket.image} />
                    <div className="mt-12 ml-36 w-1/3">
                      <h1 className="mb-12">{basket.title}</h1>
                      <div className="flex flex-row space-x-8 justify-around ">
                        <button
                          onClick={() => {
                            dispatch({ type: "descrease", payload: basket.id });
                          }}
                        >
                          -
                        </button>
                        <h1>{basket.quantity}</h1>

                        <button
                          onClick={() => {
                            dispatch({ type: "increase", payload: basket.id });
                            console.log(basket.quantity);
                          }}
                        >
                          +
                        </button>
                        <h1 className="">{basket.quantity * basket.price} </h1>
                        <button
                          className="ml-4 bg-red-400 rounded-md text-white"
                          onClick={() => {
                            dispatch({ type: "remove", payload: basket });
                          }}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="overflow-y-scroll mt-20 bg-stone-400 w-64  max-h-5/6 fixed right-48">
            <div className="text-center grid grid-cols gap-y-4 mt-4">
              <h1>Basket {cart.length} items</h1>
              {cart.map((c) => (
                <div>
                  {c.quantity}x{c.title}
                </div>
              ))}
              <h1 className="bg-red-300 rounded-md">Total Price:{total}</h1>
              <Link to={"/"} className=" rounded-md bg-blue-200">
                Continue shopping
              </Link>

              <button className=" rounded-md bg-blue-200">
                Go to the payment
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
/*<div>
      {cart.map((c) => (
        <Basket basket={c} />
      ))}
    </div>*/
