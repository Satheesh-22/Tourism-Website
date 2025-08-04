import React, { useState, useEffect } from "react";
import axios from "axios";

const HotelList = ({ searchParams }) => {
  const [hotels, setHotels] = useState([]);
  const API_KEY = "YOUR_API_KEY"; // Replace with your OpenTripMap API Key

  useEffect(() => {
    if (!searchParams.destination) return;

    const fetchHotels = async () => {
      try {
        // Get latitude and longitude for the destination
        const geoResponse = await axios.get(
          `https://api.opentripmap.com/0.1/en/places/geoname?name=${searchParams.destination}&apikey=${API_KEY}`
        );
        const { lat, lon } = geoResponse.data;

        // Fetch hotels near the location
        const hotelResponse = await axios.get(
          `https://api.opentripmap.com/0.1/en/places/radius?radius=5000&lon=${lon}&lat=${lat}&kinds=hotels&apikey=${API_KEY}`
        );

        setHotels(hotelResponse.data.features || []);
      } catch (error) {
        console.error("Error fetching hotels:", error);
      }
    };

    fetchHotels();
  }, [searchParams]);

  return (
    <div>
      <h2>Available Accommodations in {searchParams.destination}</h2>
      <ul>
        {hotels.length > 0 ? (
          hotels.map((hotel, index) => (
            <li key={index}>
              {hotel.properties.name || "Unnamed Hotel"}
            </li>
          ))
        ) : (
          <p>No hotels found.</p>
        )}
      </ul>
    </div>
  );
};

export default HotelList;
