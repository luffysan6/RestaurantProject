import { useEffect } from "react";
import FoodStore from "../../store/FoodStore";
import FoodCard from "../../Component/FoodCard";

const Explore = () => {
  const { foodData, getAllFood } = FoodStore();

  useEffect(() => {
    getAllFood();
  }, []);
  return (
    <div>
      {foodData.map((obj) => (
        <FoodCard food={obj} />
      ))}
    </div>
  );
};

export default Explore;
