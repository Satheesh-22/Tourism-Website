import React, { useState } from "react";
import SearchBox from "SearchBox.js";
import HotelList from "HotelList.js";  // ✅ Import here

function App() {
  const [hotels, setHotels] = useState([]);

  const handleSearch = async (searchParams) => {
    console.log("Searching for hotels in:", searchParams);
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
      <SearchBox onSearch={handleSearch} />
      <HotelList hotels={hotels} />
    </div>
  );
}

export default App;
