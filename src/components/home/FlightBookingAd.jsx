// src/components/home/FlightBookingAd.jsx
const FlightBookingAd = ({ adData }) => {
  return (
    <div className="bg-blue-600 text-white p-4 rounded-lg my-4 flex items-center mx-auto max-w-xs">
      <div className="flex-1">
        <div className="flex items-center">
          <img src={adData.logo} alt={adData.title} className="h-8" />
          <div className="ml-2 font-bold">{adData.title}</div>
        </div>
      </div>
      <div className="w-24">
        <img
          src={adData.airlineImage}
          alt={adData.airline}
          className="w-full"
        />
      </div>
    </div>
  );
};

export default FlightBookingAd;
