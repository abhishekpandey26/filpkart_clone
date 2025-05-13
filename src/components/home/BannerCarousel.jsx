// src/components/home/BannerCarousel.jsx
import { useState } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";

const BannerCarousel = ({ banners }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);
  };

  return (
    <div className="relative">
      <div className="overflow-hidden relative">
        <div className="flex">
          {banners.map((banner, index) => (
            <div
              key={index}
              className={`w-full flex-shrink-0 relative ${
                index === currentSlide ? "block" : "hidden"
              }`}
            >
              <div className="relative">
                <img
                  src={banner.image}
                  alt={banner.alt}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-1/3 right-20 text-white">
                  <p className="text-lg">{banner.subtitle}</p>
                  <h2 className="text-4xl font-bold my-2">{banner.title}</h2>
                  {banner.promoCode && (
                    <div className="bg-white text-black py-1 px-4 mt-2 inline-block">
                      CODE : {banner.promoCode}
                    </div>
                  )}
                </div>
                {banner.eventTag && (
                  <div className="absolute left-1/4 top-1/2 transform -translate-y-1/2">
                    <div className="flex items-center justify-center bg-yellow-500 rounded-full p-2">
                      <span className="text-white font-bold text-lg">
                        {banner.eventTag}
                      </span>
                    </div>
                    {banner.eventDate && (
                      <div className="text-white text-sm mt-2">
                        {banner.eventDate}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg"
        onClick={prevSlide}
      >
        <ChevronLeft size={20} />
      </button>

      <button
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg"
        onClick={nextSlide}
      >
        <ChevronRight size={20} />
      </button>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {banners.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full ${
              index === currentSlide ? "bg-blue-600" : "bg-gray-300"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default BannerCarousel;
