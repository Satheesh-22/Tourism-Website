import React, { useState } from "react";
import axios from "axios";

const SearchBar = ({ onSearch }) => {
  const [destination, setDestination] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [adults, setAdults] = useState(1);
  const [rooms, setRooms] = useState(1);

  const handleSearch = () => {
    if (!destination) {
      alert("Please enter a destination");
      return;
    }

    // Pass search parameters to the parent component
    onSearch({ destination, checkIn, checkOut, adults, rooms });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter a city"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
      />
      <input
        type="date"
        value={checkIn}
        onChange={(e) => setCheckIn(e.target.value)}
      />
      <input
        type="date"
        value={checkOut}
        onChange={(e) => setCheckOut(e.target.value)}
      />
      <input
        type="number"
        value={adults}
        onChange={(e) => setAdults(e.target.value)}
        min="1"
      />
      <input
        type="number"
        value={rooms}
        onChange={(e) => setRooms(e.target.value)}
        min="1"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
