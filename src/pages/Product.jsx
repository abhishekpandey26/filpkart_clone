import { useParams } from "react-router-dom";

const Product = ({ products }) => {
  const { categoryName } = useParams();

  // Optionally filter by category (if your data has category field)
  const filteredProducts = products.filter((product) =>
    product.category.toLowerCase().includes(categoryName.toLowerCase())
  );

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4 capitalize">Products in "{categoryName}"</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {filteredProducts.length ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="bg-white p-4 rounded shadow">
              <img src={product.image} alt={product.title} className="h-32 object-contain mx-auto" />
              <h2 className="text-sm font-semibold mt-2">{product.title}</h2>
              <p className="text-green-600 font-bold">${product.price}</p>
            </div>
          ))
        ) : (
          <p>No products found in this category.</p>
        )}
      </div>
    </div>
  );
};

export default Product;
