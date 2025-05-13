// src/components/common/ProductCard.jsx
const ProductCard = ({ product }) => {
  return (
    <div className="flex-shrink-0 w-44 cursor-pointer">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <p className="text-center mt-2">{product.name}</p>
      {product.price && (
        <p className="text-center font-semibold">₹{product.price}</p>
      )}
      {product.discount && (
        <p className="text-center text-green-600 text-sm">{product.discount}</p>
      )}
    </div>
  );
};

export default ProductCard;
