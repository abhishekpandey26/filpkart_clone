// src/components/layout/CategoryMenu.jsx
import { ChevronDown } from "lucide-react";

const CategoryMenu = ({ categories }) => {
  return (
    <div className="bg-white shadow-sm py-2">
      <div className="container mx-auto">
        <div className="flex justify-between px-4">
          {categories.map((category, index) => (
            <div
              key={index}
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
