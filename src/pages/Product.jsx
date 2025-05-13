import { useLocation } from "react-router-dom";

const Product = ({ products, cart, updateCart }) => {
  const location = useLocation();
  const categoryName = location.state?.category?.name;

  // Check if a product is in the cart
  const isInCart = (id) => {
    return cart.includes(id);
  };

  // Filter products by category if a category is selected
  const filteredProducts = categoryName 
    ? products.filter(product => 
        product.category.toLowerCase().includes(categoryName.toLowerCase()))
    : products;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">
        {categoryName ? `${categoryName} Products` : "All Products"}
      </h1>
      
      {products.length === 0 ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-contain p-4"
                />
              </div>
              <div className="p-4">
                <h2 className="text-lg font-semibold mb-2">
                  {product.title.split(" ").slice(0, 10).join(" ") + "..."}
                </h2>
                <p className="text-gray-600 mb-4 text-sm">
                  {product.description.split(" ").slice(0, 10).join(" ") + "..."}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-blue-600">${product.price}</span>
                  <button
                    onClick={() => updateCart(product.id)}
                    className={`px-4 py-2 rounded-md ${
                      isInCart(product.id)
                        ? "bg-red-500 hover:bg-red-600"
                        : "bg-blue-500 hover:bg-blue-600"
                    } text-white transition-colors duration-300`}
                  >
                    {isInCart(product.id) ? "Remove Item" : "Add Cart"}
                  </button>
                </div>
                <div className="mt-2 text-sm text-gray-500">
                  Category: {product.category}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Product;