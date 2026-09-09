import { useEffect } from "react";
import FoodStore from "../../store/FoodStore";
import {
  Edit2Icon,
  Trash2,
  Plus,
  Utensils,
  CheckCircle2,
  XCircle,
} from "lucide-react";
import { useNavigate } from "react-router";

const Explore = () => {
  const { getAllFood, foodData, deleteFoodMenu } = FoodStore();
  const navigate = useNavigate();

  useEffect(() => {
    getAllFood();
  }, []);

  const handleDelete = async (foodId) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this food item?",
    );

    if (!confirmed) return;

    try {
      await deleteFoodMenu(foodId);
      await getAllFood();
    } catch (error) {
      console.error("Failed to delete food:", error);
    }
  };

  return (
    <div className="w-full px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-6xl">
        {/* Header */}
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Food Menu</h1>

            <p className="mt-1 text-sm text-gray-500">
              Manage your restaurant food items, prices and availability.
            </p>
          </div>

          <button
            type="button"
            onClick={() => navigate("/admin/create-menu")}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-gray-900 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-gray-800 active:scale-95"
          >
            <Plus size={18} />
            Add Food
          </button>
        </div>

        {/* Table Card */}
        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
          {/* Table Header */}
          <div className="border-b border-gray-100 px-5 py-4">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-100">
                <Utensils size={18} className="text-gray-600" />
              </div>

              <div>
                <h2 className="text-sm font-semibold text-gray-900">
                  All Food Items
                </h2>

                <p className="text-xs text-gray-500">
                  {foodData?.length || 0}{" "}
                  {foodData?.length === 1 ? "item" : "items"} available
                </p>
              </div>
            </div>
          </div>

          {/* Responsive Table */}
          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] text-left text-sm">
              <thead className="border-b border-gray-100 bg-gray-50">
                <tr>
                  <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
                    Food
                  </th>

                  <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
                    Price
                  </th>

                  <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
                    Category
                  </th>

                  <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
                    Availability
                  </th>

                  <th className="px-5 py-3 text-right text-xs font-semibold uppercase tracking-wide text-gray-500">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-100">
                {foodData?.map((obj) => (
                  <tr
                    key={obj._id}
                    className="group transition hover:bg-gray-50"
                  >
                    {/* Food */}
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        {obj.images?.[0] ? (
                          <img
                            src={obj.images[0]}
                            alt={obj.name}
                            className="h-12 w-12 shrink-0 rounded-xl object-cover ring-1 ring-gray-200"
                          />
                        ) : (
                          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gray-100 text-gray-400">
                            <Utensils size={19} />
                          </div>
                        )}

                        <div className="min-w-0">
                          <p className="truncate font-semibold text-gray-900">
                            {obj.name}
                          </p>

                          <p className="mt-0.5 text-xs text-gray-400">
                            ID: {obj._id?.slice(-8)}
                          </p>
                        </div>
                      </div>
                    </td>

                    {/* Price */}
                    <td className="px-5 py-4">
                      <span className="font-semibold text-gray-900">
                        ₹{Number(obj.price || 0).toLocaleString("en-IN")}
                      </span>
                    </td>

                    {/* Category */}
                    <td className="px-5 py-4">
                      <span className="inline-flex rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-medium text-gray-600">
                        {obj.category || "Uncategorized"}
                      </span>
                    </td>

                    {/* Availability */}
                    <td className="px-5 py-4">
                      {obj.isavaiable ? (
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-green-200 bg-green-50 px-3 py-1 text-xs font-medium text-green-700">
                          <CheckCircle2 size={14} />
                          Available
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-red-200 bg-red-50 px-3 py-1 text-xs font-medium text-red-600">
                          <XCircle size={14} />
                          Unavailable
                        </span>
                      )}
                    </td>

                    {/* Actions */}
                    <td className="px-5 py-4">
                      <div className="flex justify-end gap-2">
                        <button
                          type="button"
                          title="Edit food"
                          onClick={() =>
                            navigate(`/admin/create-menu/${obj._id}`)
                          }
                          className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-500 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
                        >
                          <Edit2Icon size={17} />
                        </button>

                        <button
                          type="button"
                          title="Delete food"
                          onClick={() => handleDelete(obj._id)}
                          className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-500 transition hover:border-red-200 hover:bg-red-50 hover:text-red-600"
                        >
                          <Trash2 size={17} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Empty State */}
          {(!foodData || foodData.length === 0) && (
            <div className="px-6 py-16 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gray-100">
                <Utensils size={24} className="text-gray-400" />
              </div>

              <h3 className="mt-4 text-sm font-semibold text-gray-900">
                No food items found
              </h3>

              <p className="mt-1 text-sm text-gray-500">
                Start building your menu by adding your first food item.
              </p>

              <button
                type="button"
                onClick={() => navigate("/admin/create-menu")}
                className="mt-5 inline-flex items-center gap-2 rounded-xl bg-gray-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-gray-800"
              >
                <Plus size={17} />
                Add Food
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Explore;
