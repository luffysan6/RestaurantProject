import { useEffect } from "react";
import FoodStore from "../../store/FoodStore";
import FoodCard from "../../Component/FoodCard";

const Explore = () => {
  const { foodData, getAllFood } = FoodStore();

  useEffect(() => {
    getAllFood();
  }, []);
  return (
    <div className="flex flex-row gap-2 my-5 justify-center px-3">
      {foodData.map((obj) => (
        <FoodCard food={obj} />
      ))}
    </div>
  );
};

export default Explore;
