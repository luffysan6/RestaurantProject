import { useEffect, useState } from "react";
import FoodStore from "../../store/FoodStore";
import { useParams, useNavigate } from "react-router";
import {
  Upload,
  ImagePlus,
  X,
  ArrowLeft,
  Save,
  Utensils,
  IndianRupee,
} from "lucide-react";

const CreateMenu = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
  });

  const [images, setImages] = useState([]);
  const [previews, setPreviews] = useState([]);
  const [submitting, setSubmitting] = useState(false);
  const [loading, setLoading] = useState(false);

  const { createFoodMenu, getOnefood, updateFoodMenu } = FoodStore();

  const isEditMode = Boolean(id);

  // -----------------------------
  // Input Change
  // -----------------------------
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // -----------------------------
  // Image Selection
  // -----------------------------
  const addFiles = (filesArray) => {
    const files = Array.from(filesArray);

    if (!files.length) return;

    const newPreviews = files.map((file) => URL.createObjectURL(file));

    setImages((prev) => [...prev, ...files]);
    setPreviews((prev) => [...prev, ...newPreviews]);
  };

  // -----------------------------
  // Remove Image
  // -----------------------------
  const removeImage = (index) => {
    URL.revokeObjectURL(previews[index]);

    setImages((prev) => prev.filter((_, imageIndex) => imageIndex !== index));

    setPreviews((prev) => prev.filter((_, imageIndex) => imageIndex !== index));
  };

  // -----------------------------
  // Create Food
  // -----------------------------
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (submitting) return;

    setSubmitting(true);

    try {
      const formData = new FormData();

      Object.entries(form).forEach(([key, value]) => {
        if (key === "price") {
          formData.append(key, value);
        } else {
          formData.append(key, String(value).toLowerCase());
        }
      });

      formData.append("isavaiable", true);

      images.forEach((image) => {
        formData.append("foodImage", image);
      });

      await createFoodMenu(formData);

      setForm({
        name: "",
        description: "",
        price: "",
        category: "",
      });

      previews.forEach((preview) => {
        URL.revokeObjectURL(preview);
      });

      setImages([]);
      setPreviews([]);

      navigate("/admin/explore");
    } catch (error) {
      console.error("Failed to create food:", error);
    } finally {
      setSubmitting(false);
    }
  };

  // -----------------------------
  // Update Food
  // -----------------------------
  const handleUpdate = async (e) => {
    e.preventDefault();

    if (submitting) return;

    setSubmitting(true);

    try {
      await updateFoodMenu({
        ...form,
        id,
      });

      navigate("/admin/explore");
    } catch (error) {
      console.error("Failed to update food:", error);
    } finally {
      setSubmitting(false);
    }
  };

  // -----------------------------
  // Get Food For Edit
  // -----------------------------
  useEffect(() => {
    if (!id) return;

    const loadFood = async () => {
      setLoading(true);

      try {
        const value = await getOnefood(id);

        setForm({
          name: value?.name || "",
          description: value?.description || "",
          category: value?.category || "",
          price: value?.price || "",
        });

        // If your API returns existing images
        if (value?.images?.length) {
          setPreviews(value.images);
        }
      } catch (error) {
        console.error("Failed to load food:", error);
      } finally {
        setLoading(false);
      }
    };

    loadFood();
  }, [id]);

  // -----------------------------
  // Cleanup Preview URLs
  // -----------------------------
  useEffect(() => {
    return () => {
      previews.forEach((preview) => {
        if (preview.startsWith("blob:")) {
          URL.revokeObjectURL(preview);
        }
      });
    };
  }, []);

  // -----------------------------
  // Loading
  // -----------------------------
  if (loading) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <div className="text-center">
          <div className="mx-auto h-8 w-8 animate-spin rounded-full border-2 border-gray-200 border-t-gray-800" />

          <p className="mt-3 text-sm text-gray-500">Loading food details...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-4xl">
        {/* Back Button */}
        <button
          type="button"
          onClick={() => navigate("/admin/explore")}
          className="mb-5 inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition hover:text-gray-900"
        >
          <ArrowLeft size={17} />
          Back to Menu
        </button>

        {/* Page Header */}
        <div className="mb-6">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gray-900 text-white">
              <Utensils size={21} />
            </div>

            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                {isEditMode ? "Update Menu Item" : "Create Menu Item"}
              </h1>

              <p className="mt-1 text-sm text-gray-500">
                {isEditMode
                  ? "Update the details of your food item."
                  : "Add a new food item to your restaurant menu."}
              </p>
            </div>
          </div>
        </div>

        {/* Form Card */}
        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
          {/* Card Header */}
          <div className="border-b border-gray-100 px-5 py-4 sm:px-6">
            <h2 className="text-sm font-semibold text-gray-900">
              Food Information
            </h2>

            <p className="mt-1 text-xs text-gray-500">
              Enter the basic information for this menu item.
            </p>
          </div>

          <form
            onSubmit={isEditMode ? handleUpdate : handleSubmit}
            className="space-y-6 p-5 sm:p-6"
          >
            {/* Name */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Food Name
              </label>

              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="e.g. Paneer Butter Masala"
                className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-gray-400 focus:ring-4 focus:ring-gray-100"
                required
              />
            </div>

            {/* Description */}
            <div>
              <div className="mb-2 flex items-center justify-between">
                <label className="text-sm font-semibold text-gray-700">
                  Description
                </label>

                <span className="text-xs text-gray-400">Optional</span>
              </div>

              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                rows={4}
                placeholder="Describe the food item..."
                className="w-full resize-none rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-gray-400 focus:ring-4 focus:ring-gray-100"
              />
            </div>

            {/* Price + Category */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {/* Price */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Price
                </label>

                <div className="relative">
                  <div className="pointer-events-none absolute left-3 top-1/2 flex -translate-y-1/2 items-center text-gray-400">
                    <IndianRupee size={17} />
                  </div>

                  <input
                    type="number"
                    name="price"
                    value={form.price}
                    onChange={handleChange}
                    min="0"
                    placeholder="250"
                    className="w-full rounded-xl border border-gray-200 bg-white py-3 pl-10 pr-4 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-gray-400 focus:ring-4 focus:ring-gray-100"
                    required
                  />
                </div>
              </div>

              {/* Category */}
              <div>
                <label
                  htmlFor="category"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Food Category
                </label>

                <select
                  id="category"
                  name="category"
                  value={form.category}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-gray-500 focus:ring-2 focus:ring-gray-200"
                >
                  <option value="">Select food category</option>
                  <option value="breakfast">Breakfast</option>
                  <option value="lunch">Lunch</option>
                  <option value="dinner">Dinner</option>
                  <option value="snack">Snack</option>
                  <option value="dessert">Dessert</option>
                  <option value="all">All</option>
                </select>
              </div>
            </div>

            {/* Images */}
            <div>
              <div className="mb-2 flex items-center justify-between">
                <label className="text-sm font-semibold text-gray-700">
                  Food Images
                </label>

                <span className="text-xs text-gray-400">PNG / JPG</span>
              </div>

              {/* Upload Area */}
              <label
                htmlFor="fileInput"
                className="group flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-gray-200 bg-gray-50 px-5 py-10 text-center transition hover:border-gray-400 hover:bg-gray-100"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm">
                  <ImagePlus
                    size={23}
                    className="text-gray-500 transition group-hover:text-gray-900"
                  />
                </div>

                <p className="mt-4 text-sm font-semibold text-gray-700">
                  Upload food images
                </p>

                <p className="mt-1 text-xs text-gray-400">
                  Click here to browse your images
                </p>

                <span className="mt-3 inline-flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-gray-600">
                  <Upload size={13} />
                  Choose Images
                </span>

                <input
                  id="fileInput"
                  type="file"
                  accept="image/png, image/jpeg, image/webp"
                  multiple
                  hidden
                  onChange={(e) => addFiles(e.target.files)}
                />
              </label>

              {/* Image Preview */}
              {previews.length > 0 && (
                <div className="mt-4">
                  <div className="mb-2 flex items-center justify-between">
                    <p className="text-xs font-semibold text-gray-600">
                      Selected Images
                    </p>

                    <p className="text-xs text-gray-400">
                      {previews.length}{" "}
                      {previews.length === 1 ? "image" : "images"}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                    {previews.map((src, index) => (
                      <div
                        key={`${src}-${index}`}
                        className="group relative overflow-hidden rounded-xl border border-gray-200 bg-gray-100"
                      >
                        <img
                          src={src}
                          alt={`food-preview-${index}`}
                          className="h-28 w-full object-cover transition duration-300 group-hover:scale-105"
                        />

                        <button
                          type="button"
                          onClick={() => removeImage(index)}
                          className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-full bg-black/70 text-white opacity-0 transition group-hover:opacity-100 hover:bg-red-600"
                          title="Remove image"
                        >
                          <X size={15} />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Divider */}
            <div className="border-t border-gray-100" />

            {/* Buttons */}
            <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={() => navigate("/admin/explore")}
                className="rounded-xl border border-gray-200 bg-white px-5 py-2.5 text-sm font-semibold text-gray-600 transition hover:bg-gray-50"
              >
                Cancel
              </button>

              <button
                type="submit"
                disabled={submitting}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gray-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-gray-800 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50"
              >
                <Save size={17} />

                {submitting
                  ? isEditMode
                    ? "Updating..."
                    : "Creating..."
                  : isEditMode
                    ? "Update Menu"
                    : "Create Menu"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateMenu;
