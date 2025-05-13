// src/components/layout/CategoryMenu.jsx
import { ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CategoryMenu = ({ categories }) => {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    navigate("/product");
  };

  return (
    <div className="bg-white shadow-sm py-2">
      <div className="container mx-auto">
        <div className="flex justify-between px-4 flex-wrap gap-y-2">
          {categories.map((category, index) => (
            <div
              key={index}
              onClick={() => handleCategoryClick(category)}
              className="flex flex-col items-center cursor-pointer px-2"
            >
              <img
                src={category.icon}
                alt={category.name}
                className="w-12 h-12 object-contain"
              />
              <div className="flex items-center mt-1 text-sm">
                <span>{category.name}</span>
                {category.dropdown && <ChevronDown size={14} />}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryMenu;
