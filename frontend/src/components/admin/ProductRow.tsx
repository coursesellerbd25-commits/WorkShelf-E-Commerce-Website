type Props = {
  product: {
    id: number;
    name: string;
    category: string;
    price: number;
    stock: number;
  };
};

const ProductRow = ({ product }: Props) => {
  return (
    <tr className="border-b">

      <td className="px-4 py-4">
        {product.name}
      </td>

      <td className="px-4 py-4">
        {product.category}
      </td>

      <td className="px-4 py-4">
        ${product.price}
      </td>

      <td className="px-4 py-4">
        {product.stock}
      </td>

      <td className="space-x-3 px-4 py-4">

        <button className="rounded bg-blue-100 px-4 py-2 text-blue-700 hover:bg-blue-200">
          Edit
        </button>

        <button className="rounded bg-red-100 px-4 py-2 text-red-600 hover:bg-red-200">
          Delete
        </button>

      </td>

    </tr>
  );
};

export default ProductRow;