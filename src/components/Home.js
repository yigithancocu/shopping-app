import Product from "../components/Product";
import { useContext } from "react";
import { CartContext } from "../context/Context";
import Filter from "./Filter";
function Home() {
  const {
    state: { products },
    filterState: { sort, searchQuery },
  } = useContext(CartContext);
  function transformProducts() {
    let sortedProducts = products;
    if (sort) {
      sortedProducts = sortedProducts.sort((a, b) =>
        sort === "lowToHigh" ? a.price - b.price : b.price - a.price
      );
    }

    if (searchQuery) {
      sortedProducts = sortedProducts.filter((prod) =>
        prod.title.toLowerCase().includes(searchQuery)
      );
    }

    return sortedProducts;
  }

  return (
    <div className="flex flex-row space-x-4">
      <div className="w-1/3">
        <Filter />
      </div>
      <div className="grid grid-cols-3">
        {transformProducts().map((p) => (
          <Product product={p} />
        ))}
      </div>
    </div>
  );
}

export default Home;
/*const {
    state: { products },
  } = useContext(CartContext);
  console.log(products);*/
/*const {
    initialState: { products },
  } = useContext(CartContext);*/
