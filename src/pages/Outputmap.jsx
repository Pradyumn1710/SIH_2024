import { MapContainer, TileLayer, Marker, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import Navbar from "../my_components/Navbar_home";
import Draggable from 'react-draggable';

// Dummy location names for start and end (you can replace these with actual names if available)
const locationNames = {
  start: "Start Location Name",
  end: "End Location Name",
};

const OutputPage = ({ points }) => {
  // Ensure points array is valid and contains at least one point
  if (!points || points.length === 0) {
    return <div>No points available to display on the map.</div>;
  }

  // Filter out invalid points
  const validPoints = points.filter(p => p && p.length === 2 && !isNaN(p[0]) && !isNaN(p[1]));

  // Ensure there are valid points to display
  if (validPoints.length === 0) {
    return <div>No valid points available to display on the map.</div>;
  }

  const bounds = L.latLngBounds(validPoints.map(p => [p[1], p[0]]));

  // Define the path for the polyline
  const path = validPoints.map(p => [p[1], p[0]]);

  return (
    <div className="relative min-h-screen">
      <Navbar className="absolute top-0 left-0 w-full z-20" />
      
      {/* Draggable Left Panel */}
      <Draggable>
        <div className="absolute top-16 left-4 z-20 cursor-move w-full md:w-1/3 p-6 mb-8 bg-white rounded-md shadow-md">
          <h2 className="mb-4 text-2xl font-semibold">Path Details</h2>

          {/* Start Location */}
          <div className="mb-4">
            <h3 className="text-lg font-medium">Input Port:</h3>
            <p>{validPoints[0] ? `Latitude: ${validPoints[0][1]}, Longitude: ${validPoints[0][0]}` : 'Not Available'}</p>
            <p>{locationNames.start}</p>
          </div>

          {/* End Location */}
          <div className="mb-4">
            <h3 className="text-lg font-medium">Output Port:</h3>
            <p>{validPoints[validPoints.length - 1] ? `Latitude: ${validPoints[validPoints.length - 1][1]}, Longitude: ${validPoints[validPoints.length - 1][0]}` : 'Not Available'}</p>
            <p>{locationNames.end}</p>
          </div>

          <div>
            <p>The optimized path is shown on the map above. This path represents the most efficient route connecting the selected ports.</p>
          </div>
        </div>
      </Draggable>

      {/* Map */}
      <MapContainer
        center={bounds.getCenter()} 
        zoom={5} 
        className="w-full h-screen z-10"
        maxBounds={bounds}
        maxBoundsViscosity={1.0}
        worldCopyJump={false}
        minZoom={2}
        maxZoom={10}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {/* Marker for Start Point */}
        {validPoints[0] && (
          <Marker
            position={[validPoints[0][1], validPoints[0][0]]}
            icon={defaultIcon}
          />
        )}

        {/* Marker for End Point */}
        {validPoints[validPoints.length - 1] && (
          <Marker
            position={[validPoints[validPoints.length - 1][1], validPoints[validPoints.length - 1][0]]}
            icon={defaultIcon}
          />
        )}

        {/* Polyline for the path */}
        {validPoints.length > 1 && (
          <Polyline 
            positions={path}
            color="red"
            weight={3}
            opacity={0.7}
          />
        )}
      </MapContainer>
    </div>
  );
};

const defaultIcon = new L.Icon({
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

export default OutputPage;