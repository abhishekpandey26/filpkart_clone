import { useState } from "react";
import Home from "./pages/Home";

const App = () => {
  const [cartCount, setCartCount] = useState(0);

  const appData = {
    navbarData: {
      logoText: "Flipkart",
      logoTagline: "Explore Plus",
      cartCount: cartCount,
      searchPlaceholder: "Search for Products, Brands and More",
      // Optional: add logo icon from Font Awesome
      logoIcon: "https://cdn-icons-png.flaticon.com/512/888/888879.png", // Flipkart logo or custom one
    },

    categories: [
      {
        name: "Kilos",
        icon: "https://cdn-icons-png.flaticon.com/512/2850/2850547.png",
      },
      {
        name: "Mobiles",
        icon: "https://cdn-icons-png.flaticon.com/512/888/888879.png",
      },
      {
        name: "Fashion",
        icon: "https://cdn-icons-png.flaticon.com/512/892/892458.png",
        dropdown: true,
      },
      {
        name: "Electronics",
        icon: "https://cdn-icons-png.flaticon.com/512/2784/2784445.png",
        dropdown: true,
      },
      {
        name: "Home & Furniture",
        icon: "https://cdn-icons-png.flaticon.com/512/1031/1031400.png",
        dropdown: true,
      },
      {
        name: "Appliances",
        icon: "https://cdn-icons-png.flaticon.com/512/1046/1046857.png",
      },
      {
        name: "Flight Bookings",
        icon: "https://cdn-icons-png.flaticon.com/512/176/176022.png",
      },
      {
        name: "Beauty, Toys & More",
        icon: "https://cdn-icons-png.flaticon.com/512/1283/1283981.png",
        dropdown: true,
      },
      {
        name: "Two Wheelers",
        icon: "https://cdn-icons-png.flaticon.com/512/2972/2972638.png",
        dropdown: true,
      },
    ],

    banners: [
      {
        image: "https://images.unsplash.com/photo-1604999329148-3088d02f9e4f", // flight banner
        alt: "Flight Booking Offer",
        subtitle: "Exclusive fare*",
        title: "Up to 15% Off",
        promoCode: "FLYAIRASIA",
        eventTag: "BIG BACHAT DAYS",
        eventDate: "10th - 14th MAY",
      },
    ],

    productSections: [
      {
        title: "499 only",
        products: [
          {
            image: "https://images.pexels.com/photos/19090/pexels-photo.jpg", // shoes
            name: "Shoes",
            price: "499",
            discount: "60% off",
          },
          {
            image:
              "https://images.pexels.com/photos/936119/pexels-photo-936119.jpeg", // traditional wear
            name: "Traditional Wear",
            price: "499",
            discount: "50% off",
          },
          {
            image:
              "https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg", // fashion apparel
            name: "Fashion Apparel",
            price: "499",
            discount: "40% off",
          },
          {
            image:
              "https://images.pexels.com/photos/46710/pexels-photo-46710.jpeg", // sunglasses
            name: "Sunglasses",
            price: "499",
            discount: "70% off",
          },
          {
            image:
              "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg", // sports shoes
            name: "Sports Shoes",
            price: "499",
            discount: "55% off",
          },
          {
            image:
              "https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg", // casual shirts
            name: "Casual Shirts",
            price: "499",
            discount: "45% off",
          },
        ],
      },
    ],

    flightAdData: {
      logo: "https://1000logos.net/wp-content/uploads/2021/02/Flipkart-logo.png", // Flipkart travel
      title: "LOWEST FARE",
      airlineImage:
        "https://logos-world.net/wp-content/uploads/2022/12/IndiGo-Logo.png",
      airline: "IndiGo",
    },
  };

  const updateCartCount = (count) => {
    setCartCount(count);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Home appData={appData} updateCartCount={updateCartCount} />
    </div>
  );
};

export default App;
