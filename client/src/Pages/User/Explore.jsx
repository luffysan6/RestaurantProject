import { useEffect } from "react";
import FoodStore from "../../store/FoodStore";
import FoodCard from "../../Component/FoodCard";
import CartIcon from "../../Component/CartIcon";
import OrderStore from "../../store/OrderStore";

const Explore = () => {
  const { foodData, getAllFood } = FoodStore();
  const { addToCart } = OrderStore();
  useEffect(() => {
    getAllFood();
  }, []);
  return (
    <>
      <div className="flex flex-row gap-2 my-5 justify-center px-3">
        {foodData.map((obj) => (
          <FoodCard
            onClick={() => {
              addToCart({ obj });
            }}
            food={obj}
          />
        ))}
      </div>
      <CartIcon />
    </>
  );
};

export default Explore;
