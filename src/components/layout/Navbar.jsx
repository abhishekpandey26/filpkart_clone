// src/components/layout/Navbar.jsx
import { Search, ChevronDown, ShoppingCart, User, Menu } from 'lucide-react';

const Navbar = ({ 
  logoText, 
  logoTagline, 
  cartCount, 
  searchPlaceholder,
  updateCartCount 
}) => {
  // Example of using the updateCartCount function
  const handleCartClick = () => {
    // For demonstration purposes - increments the cart count when clicked
    updateCartCount(cartCount + 1);
  };

  return (
    <div className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <div className="mr-2">
            <h1 className="text-blue-600 font-bold text-2xl">{logoText}</h1>
            <div className="flex items-center text-xs text-gray-500">
              <span>Explore</span>
              <span className="text-yellow-500 font-semibold ml-1">Plus</span>
              <img src="/assets/images/plus-icon.png" alt="Plus Icon" className="w-4 h-4 ml-1" />
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-2xl mx-4">
          <div className="relative">
            <input
              type="text"
              placeholder={searchPlaceholder}
              className="w-full py-2 pl-4 pr-10 rounded-md bg-gray-100 focus:outline-none"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500">
              <Search size={20} />
            </button>
          </div>
        </div>

        {/* Right Menu */}
        <div className="flex items-center space-x-6">
          <div className="flex items-center cursor-pointer">
            <User size={20} />
            <span className="ml-1">Account</span>
            <ChevronDown size={16} />
          </div>
          
          <div className="flex items-center cursor-pointer" onClick={handleCartClick}>
            <ShoppingCart size={20} />
            <span className="ml-1">Cart</span>
            <div className="bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center absolute translate-x-3 -translate-y-2">
              {cartCount}
            </div>
          </div>
          
          <div className="flex items-center cursor-pointer">
            <span>Become a Seller</span>
          </div>
          
          <div className="cursor-pointer">
            <Menu size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;