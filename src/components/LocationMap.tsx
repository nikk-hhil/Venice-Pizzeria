"use client";

import { useState } from 'react';
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
          <h2 className="text-3xl font-bold text-red-700 mb-2">Find Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Located in the heart of St. John's, Venice Pizzeria is easy to find. Stop by for dine-in or pickup!
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
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Venice Pizzeria</h3>
              <div className="space-y-3 mb-6">
                <p className="flex items-start">
                  <span className="mr-2">📍</span> 
                  <span>{restaurantAddress}</span>
                </p>
                <p className="flex items-start">
                  <span className="mr-2">📞</span> 
                  <span>(123) 456-7890</span>
                </p>
                <p className="flex items-start">
                  <span className="mr-2">⏰</span> 
                  <span>
                    Monday - Thursday: 11am - 10pm<br />
                    Friday - Saturday: 11am - 11pm<br />
                    Sunday: 12pm - 9pm
                  </span>
                </p>
              </div>
              <Link 
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-6 rounded-full transition duration-300"
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
