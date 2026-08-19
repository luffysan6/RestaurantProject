import { useState } from "react";

const CreateMenu = () => {
  const [form, setform] = useState({});

  const handleChange = () => {};
  let errors = "";
  return (
    <div className="p-6 max-w-2xl">
      <h1 className="text-xl font-semibold mb-6">Upload New Menu</h1>

      <form className="space-y-5">
        <div>
          <label className="block text-sm font-medium mb-1">Name</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full border rounded-md px-3 py-2 text-sm"
            required
          />
          {errors.name && (
            <p className="text-red-600 text-xs mt-1">{errors.name}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Description</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            rows={3}
            className="w-full border rounded-md px-3 py-2 text-sm"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Price</label>
            <input
              type="number"
              name="price"
              value={form.price}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2 text-sm"
              required
              min="0"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Category</label>
            <input
              name="category"
              value={form.category}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2 text-sm"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Images</label>
          <div
          // onDragOver={(e) => {
          //   e.preventDefault();
          //   setDragging(true);
          // }}
          // onDragLeave={() => setDragging(false)}
          // onDrop={handleDrop}
          // onClick={() => document.getElementById("fileInput").click()}
          // className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors ${
          //   dragging ? "border-blue-500 bg-blue-50" : "border-gray-300"
          // }`}
          >
            <input
              id="fileInput"
              type="file"
              accept="image/*"
              multiple
              hidden
              //   onChange={(e) => addFiles(e.target.files)}
            />
            <p className="text-sm text-gray-500">
              Drag & drop images here, or click to browse
            </p>
          </div>
          {errors.images && (
            <p className="text-red-600 text-xs mt-1">{errors.images}</p>
          )}

          {/* {previews.length > 0 && (
            <div className="grid grid-cols-4 gap-3 mt-3">
              {previews.map((src, i) => (
                <div key={src} className="relative group">
                  <img
                    src={src}
                    alt={`preview-${i}`}
                    className="w-full h-20 object-cover rounded-md"
                  />
                  <button
                    type="button"
                    onClick={() => removeImage(i)}
                    className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full w-5 h-5 text-xs opacity-0 group-hover:opacity-100"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          )} */}
        </div>

        <button
          type="submit"
          //   disabled={submitting}
          className="px-5 py-2 bg-blue-600 text-white rounded-md text-sm disabled:opacity-50"
        >
          {/* {submitting ? "Uploading..." : "Create Menu Item"} */}
        </button>
      </form>
    </div>
  );
};

export default CreateMenu;
