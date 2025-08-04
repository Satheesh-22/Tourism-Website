import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix marker icon issue
import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';

// Define the map component
const MapComponent = ({ places }) => {
  return (
    <MapContainer
      center={[12.6173515, 80.1965659]} // Center on Mahabalipuram
      zoom={15}
      style={{ height: '400px', width: '100%' }}
    >
      {/* Tile Layer from OpenStreetMap */}
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {/* Add markers for each place */}
      {places.map((place) => (
        <Marker key={place.place_id} position={[place.lat, place.lon]}>
          <Popup>
            <strong>{place.display_name}</strong>
            <br />
            Latitude: {place.lat}, Longitude: {place.lon}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapComponent;
