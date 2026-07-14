import { useState } from 'react';
import toast from 'react-hot-toast';

const AdminAddProductPage = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('Books');
  const [stock, setStock] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
  ) => {
    e.preventDefault();

    if (!image) {
      toast.error('Please select an image.');
      return;
    }

    const formData = new FormData();

    formData.append('name', name);
    formData.append('description', description);
    formData.append('price', price);
    formData.append('category', category);
    formData.append('stock', stock);
    formData.append('image', image);
    const loadingToast = toast.loading('Uploading product...');
    try {
      const response = await fetch(
      'http://localhost:5000/api/v1/products',
        {
          method: 'POST',
          body: formData,
        },
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message);
      }

      toast.dismiss(loadingToast);

      toast.success('Product added successfully!');

      console.log(data);

      } catch (error) {
        toast.dismiss(loadingToast);
        toast.error(error instanceof Error ? error.message : 'Something went wrong');
      }
    };

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl rounded-2xl bg-white p-6 shadow-sm sm:p-8">

        <h1 className="text-3xl font-bold text-slate-900">
          Add New Product
        </h1>

        <p className="mt-2 text-slate-500">
          Upload a new product to your store.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">

          {/* Product Name */}
          <div>
            <label className="mb-2 block font-medium">
              Product Name
            </label>

            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Atomic Habits"
              className="w-full rounded-xl border p-3 outline-none focus:border-blue-600"
            />
          </div>

          {/* Description */}
          <div>
            <label className="mb-2 block font-medium">
              Description
            </label>

            <textarea
              rows={5}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Write product description..."
              className="w-full rounded-xl border p-3 outline-none focus:border-blue-600"
            />
          </div>

          {/* Price */}
          <div>
            <label className="mb-2 block font-medium">
              Price
            </label>

            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="49.99"
              className="w-full rounded-xl border p-3 outline-none focus:border-blue-600"
            />
          </div>

          {/* Category */}
          <div>
            <label className="mb-2 block font-medium">
              Category
            </label>

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full rounded-xl border p-3 outline-none focus:border-blue-600"
            >
              <option>Books</option>
              <option>Office</option>
              <option>Stationery</option>
              <option>Electronics</option>
            </select>
          </div>

          {/* Stock */}
          <div>
            <label className="mb-2 block font-medium">
              Stock
            </label>

            <input
              type="number"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
              placeholder="50"
              className="w-full rounded-xl border p-3 outline-none focus:border-blue-600"
            />
          </div>

          {/* Image */}
          <div>
            <label className="mb-2 block font-medium">
              Product Image
            </label>

            <input
              type="file"
              accept="image/*"
              onChange={(e) =>
                setImage(e.target.files?.[0] || null)
              }
              className="block w-full rounded-xl border p-3"
            />

            {image && (
              <p className="mt-2 text-sm text-slate-500">
                Selected: {image.name}
              </p>
            )}
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full rounded-xl bg-blue-600 py-4 text-lg font-semibold text-white transition hover:bg-blue-700"
          >
            Save Product
          </button>

        </form>

      </div>
    </main>
  );
};

export default AdminAddProductPage;