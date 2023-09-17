import { useContext, useState } from "react";
import { CartContext } from "../context/Context";

function Filter() {
  const { filterDispatch, filterState } = useContext(CartContext);
  const [checked, setChecked] = useState();
  return (
    <div className="fixed left-12">
      <form className="grid grid-cols-2 gap-y-4 mt-8">
        <label>Ascending</label>
        <input
          onChange={() => filterDispatch({ type: "asc", payload: "lowToHigh" })}
          className="hover:cursor-pointer"
          type="radio"
          name="group1"
        />
        <label>Descending</label>
        <input
          onChange={() => filterDispatch({ type: "asc", payload: "highToLow" })}
          className="hover:cursor-pointer"
          type="radio"
          name="group1"
        />
        <button
          className="bg-blue-200 rounded-lg"
          onChange={() =>
            filterDispatch({
              type: "clearFilter",
              payload: checked,
            })
          }
        >
          Clear Filters
        </button>
      </form>
    </div>
  );
}

export default Filter;
