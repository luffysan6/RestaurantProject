import React, { useEffect } from "react";
import FoodStore from "../../store/FoodStore";
import { Edit2Icon, Trash } from "lucide-react";

const Explore = () => {
  const { getAllFood, foodData } = FoodStore();
  console.log(foodData);

  useEffect(() => {
    getAllFood();
  }, []);

  return (
    <div className="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default">
      <table className="w-full text-sm text-left rtl:text-right text-body">
        <thead className="text-sm text-body bg-neutral-secondary-soft border-b rounded-base border-default">
          <tr>
            <td scope="col" className="px-6 py-3 font-medium">
              Food Name
            </td>
            <td scope="col" className="px-6 py-3 font-medium">
              Food Price
            </td>
            <td scope="col" className="px-6 py-3 font-medium">
              Food Category
            </td>
            <td scope="col" className="px-6 py-3 font-medium">
              Food Avaibility
            </td>
            <td scope="col" className="px-6 py-3 font-medium">
              Delete
            </td>
            <td scope="col" className="px-6 py-3 font-medium">
              Edit
            </td>
          </tr>
        </thead>
        <tbody>
          {foodData.map((obj) => (
            <tr
              className="bg-neutral-primary border-b border-default"
              key={obj._id}
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-heading whitespace-nowrap"
              >
                {obj.name}
              </th>
              <td className="px-6 py-4">{obj.price}</td>
              <td className="px-6 py-4">{obj.category}</td>
              <td className="px-6 py-4">{obj.isavaiable ? "Yes" : "No"}</td>
              <td className="px-6 py-4">
                <button
                  data-food-id={obj._id}
                  onClick={(e) => {
                    console.log(e.target);
                  }}
                >
                 
                  <Trash color="#fc1c03" />
                </button>
              </td>
              <td className="px-6 py-4">
                <Edit2Icon color="#037ffc" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Explore;
