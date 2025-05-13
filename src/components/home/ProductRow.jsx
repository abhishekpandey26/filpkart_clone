// src/components/home/ProductRow.jsx
import { ChevronRight } from "lucide-react";
import ProductCard from "../common/ProductCard";

const ProductRow = ({ title, products }) => {
  return (
    <div className="bg-white mt-4 pb-4">
      <div className="container mx-auto px-4">
        <h2 className="text-xl font-semibold py-4">{title}</h2>

        <div className="relative">
          <div className="flex overflow-x-auto space-x-4 pb-4 hide-scrollbar">
            {products.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>

          <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductRow;
