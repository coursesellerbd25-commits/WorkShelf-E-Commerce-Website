import { useState } from 'react';

const QuantitySelector = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="flex items-center gap-3">
      <button
        onClick={() => quantity > 1 && setQuantity(quantity - 1)}
        className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 text-lg"
      >
        -
      </button>

      <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200">
        {quantity}
      </div>

      <button
        onClick={() => setQuantity(quantity + 1)}
        className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 text-lg"
      >
        +
      </button>
    </div>
  );
};

export default QuantitySelector;