// src/pages/Home.jsx
import Navbar from "../components/layout/Navbar";
import CategoryMenu from "../components/layout/CategoryMenu";
import BannerCarousel from "../components/home/BannerCarousel";
import ProductRow from "../components/home/ProductRow";
import FlightBookingAd from "../components/home/FlightBookingAd";

const Home = ({ appData, updateCartCount }) => {
  const { navbarData, categories, banners, productSections, flightAdData } =
    appData;

  return (
    <>
      <Navbar
        logoText={navbarData.logoText}
        logoTagline={navbarData.logoTagline}
        cartCount={navbarData.cartCount}
        searchPlaceholder={navbarData.searchPlaceholder}
        updateCartCount={updateCartCount}
      />
      <CategoryMenu categories={categories} />
      <BannerCarousel banners={banners} />

      {productSections.map((section, index) => (
        <ProductRow
          key={index}
          title={section.title}
          products={section.products}
        />
      ))}

      <div className="container mx-auto">
        <FlightBookingAd adData={flightAdData} />
      </div>
    </>
  );
};

export default Home;
