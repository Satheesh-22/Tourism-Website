<?php
// Simulate dynamic data for hotels
$location = $_GET['location'] ?? '';
$checkIn = $_GET['checkIn'] ?? '';
$checkOut = $_GET['checkOut'] ?? '';
$guests = $_GET['guests'] ?? 1;
$rooms = $_GET['rooms'] ?? 1;

// Example data
$hotels = [
    ["name" => "The Grand Delhi", "location" => "New Delhi", "price" => 120, "rooms" => 10, "link" => "#"],
    ["name" => "Beachside Bliss", "location" => "Goa", "price" => 150, "rooms" => 5, "link" => "#"],
    ["name" => "Urban Haven", "location" => "Bangalore", "price" => 100, "rooms" => 8, "link" => "#"],
    ["name" => "Chennai Comforts", "location" => "Chennai", "price" => 130, "rooms" => 4, "link" => "#"]
];

// Filter hotels based on location
$filteredHotels = array_filter($hotels, function($hotel) use ($location) {
    return stripos($hotel['location'], $location) !== false;
});

echo json_encode(array_values($filteredHotels));
?>
