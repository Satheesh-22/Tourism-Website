import React, { useState } from "react";
import SearchBar from "./SearchBar.js";
import HotelList from "./HotelList.js";

function App() {
  const [hotels, setHotels] = useState([]);
  const [searchParams, setSearchParams] = useState({});

  const handleSearch = async (searchParams) => {
    console.log("Searching for hotels in:", searchParams);
    setSearchParams(searchParams);
    const dummyHotels = [
      { name: "Luxury Inn", location: searchParams.destination, price: 120 },
      { name: "City Lodge", location: searchParams.destination, price: 80 },
      { name: "Beach Resort", location: searchParams.destination, price: 200 },
    ];
    setHotels(dummyHotels);
  };

  return (
    <div className="App">
      <h1>Travel Booking</h1>
      <SearchBar onSearch={handleSearch} />
      <HotelList searchParams={searchParams} />
    </div>
  );
}

export default App;
