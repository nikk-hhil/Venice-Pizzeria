"use client";

import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import Link from 'next/link';

const LocationMap = () => {
  // Venice Pizzeria coordinates
  const location = {
    lat: 47.5705041,
    lng: -52.7063609
  };

  const restaurantAddress = "81 Military Road, St. John's, NL A1C-2C8";
  const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(restaurantAddress)}`;

  // Set a fixed height and width
  const mapContainerStyle = {
    width: '100%',
    height: '320px' // Fixed height to avoid invisible map
  };

  const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "";

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
        <h2 className="text-3xl font-extrabold mb-6 bg-gradient-to-r from-red-700 to-red-900 bg-clip-text text-transparent tracking-tight transform hover:scale-105 transition-transform duration-300">Find Us</h2>
        <p className="text-gray-700 max-w-2xl mx-auto font-manrope text-lg">
    Located in the heart of St. John&apos;s, Venice Pizzeria is easy to find. Stop by for dine-in or pickup!
  </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-center">
          {/* Map Section */}
          <div className="w-full md:w-1/2">
            <div className="rounded-lg overflow-hidden shadow-md" style={{ height: '320px' }}>
              <LoadScript googleMapsApiKey={googleMapsApiKey}>
                <GoogleMap
                  mapContainerStyle={mapContainerStyle}
                  center={location}
                  zoom={17}
                >
                  <Marker position={location} />
                </GoogleMap>
              </LoadScript>
            </div>
          </div>

          {/* Info Section */}
          <div className="w-full md:w-1/2">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-2xl font-bold mb-4 text-red-700">Venice Pizzeria</h3>
              <div className="space-y-4 mb-6">
                <p className="flex items-start text-gray-800 font-medium text-lg">
                  <span className="mr-3 text-red-600 text-xl">📍</span> 
                  <span>{restaurantAddress}</span>
                </p>
                <p className="flex items-start text-gray-800 font-medium text-lg">
                  <span className="mr-3 text-red-600 text-xl">📞</span> 
                  <span>(123) 456-7890</span>
                </p>
                <div className="flex items-start text-gray-800 font-medium text-lg">
                  <span className="mr-3 text-red-600 text-xl">⏰</span> 
                  <div>
                    <p className="font-medium">Monday - Wednesday: <span className="text-gray-900 font-semibold">11am - 11pm</span></p>
                    <p className="font-medium">Thursday: <span className="text-gray-900 font-semibold">11am - 12pm</span></p>
                    <p className="font-medium">Friday and Saturday: <span className="text-gray-900 font-semibold">11am - 2am</span></p>
                    <p className="font-medium">Sunday: <span className="text-gray-900 font-semibold">11am - 12am</span></p>
                  </div>
                </div>
              </div>
              <Link 
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-red-700 hover:bg-red-800 text-white font-bold py-3 px-8 rounded-full transition duration-300 text-lg shadow-md"
              >
                Get Directions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;