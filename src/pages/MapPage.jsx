// /* eslint-disable no-unused-vars */
// import React, { useState, useEffect } from 'react';
// import { MapContainer, TileLayer, Marker } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
// import './MapPage.css';
// import L, { LatLngBounds } from 'leaflet';

// const GEOCODE_API_URL = 'https://nominatim.openstreetmap.org/search';

// const MapPage = () => {
//   const [startLocation, setStartLocation] = useState(null);
//   const [endLocation, setEndLocation] = useState(null);
//   const [startSearchResults, setStartSearchResults] = useState([]);
//   const [endSearchResults, setEndSearchResults] = useState([]);
//   const [startSearchQuery, setStartSearchQuery] = useState('');
//   const [endSearchQuery, setEndSearchQuery] = useState('');
//   const [showStartDropdown, setShowStartDropdown] = useState(false);
//   const [showEndDropdown, setShowEndDropdown] = useState(false);

//   const bounds = new LatLngBounds([[-60, -180], [80, 180]]);

//   // Fetch search results for the start location
//   useEffect(() => {
//     const fetchResults = async () => {
//       if (startSearchQuery.trim()) {
//         const response = await fetch(`${GEOCODE_API_URL}?q=${encodeURIComponent(startSearchQuery)}&format=json&limit=5`);
//         const data = await response.json();
//         setStartSearchResults(data);
//         setShowStartDropdown(true);
//       } else {
//         setStartSearchResults([]);
//         setShowStartDropdown(false);
//       }
//     };

//     fetchResults();
//   }, [startSearchQuery]);

//   // Fetch search results for the end location
//   useEffect(() => {
//     const fetchResults = async () => {
//       if (endSearchQuery.trim()) {
//         const response = await fetch(`${GEOCODE_API_URL}?q=${encodeURIComponent(endSearchQuery)}&format=json&limit=5`);
//         const data = await response.json();
//         setEndSearchResults(data);
//         setShowEndDropdown(true);
//       } else {
//         setEndSearchResults([]);
//         setShowEndDropdown(false);
//       }
//     };

//     fetchResults();
//   }, [endSearchQuery]);

//   // Handle selecting a location
//   const handleLocationSelect = (location, setLocation, setQuery, setShowDropdown) => {
//     const selectedLocation = {
//       lat: location.lat,
//       lon: location.lon
//     };
//     setLocation(selectedLocation);
//     setQuery(location.display_name);
//     setShowDropdown(false);
//   };

//   const handleSave = () => {
//     if (startLocation && endLocation) {
//       const result = {
//         start: startLocation,
//         end: endLocation
//       };
//       console.log('Selected Locations:', result);
//       // Save to backend logic here

//       // Clear the fields and markers
//       setStartLocation(null);
//       setEndLocation(null);
//       setStartSearchQuery('');
//       setEndSearchQuery('');
//       setStartSearchResults([]);
//       setEndSearchResults([]);
//     } else {
//       alert('Please select both start and end locations');
//     }
//   };

//   return (
//     <div className="container">
//       <div className="left-panel">
//         <h2>Select Start and End Ports</h2>
        
//         <div>
//           <label>Start Location:</label>
//           <input
//             type="text"
//             value={startSearchQuery}
//             onChange={e => setStartSearchQuery(e.target.value)}
//             placeholder="Search for a location..."
//           />
//           {showStartDropdown && (
//             <ul className="search-results">
//               {startSearchResults.map(result => (
//                 <li
//                   key={result.place_id}
//                   onClick={() => handleLocationSelect(result, setStartLocation, setStartSearchQuery, setShowStartDropdown)}
//                 >
//                   {result.display_name}
//                 </li>
//               ))}
//             </ul>
//           )}
//         </div>

//         <div>
//           <label>End Location:</label>
//           <input
//             type="text"
//             value={endSearchQuery}
//             onChange={e => setEndSearchQuery(e.target.value)}
//             placeholder="Search for a location..."
//           />
//           {showEndDropdown && (
//             <ul className="search-results">
//               {endSearchResults.map(result => (
//                 <li
//                   key={result.place_id}
//                   onClick={() => handleLocationSelect(result, setEndLocation, setEndSearchQuery, setShowEndDropdown)}
//                 >
//                   {result.display_name}
//                 </li>
//               ))}
//             </ul>
//           )}
//         </div>

//         <button
//           className="save-button"
//           onClick={handleSave}
//         >
//           Save Locations
//         </button>
//       </div>

//       <MapContainer
//         center={[20, 0]} 
//         zoom={3} 
//         className="map-container"
//         maxBounds={bounds}
//         maxBoundsViscosity={1.0}
//         worldCopyJump={false}
//         minZoom={2}
//         maxZoom={10}
//       >
//         <TileLayer
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//         />

//         {startLocation && (
//           <Marker position={[startLocation.lat, startLocation.lon]} icon={defaultIcon} />
//         )}

//         {endLocation && (
//           <Marker position={[endLocation.lat, endLocation.lon]} icon={defaultIcon} />
//         )}
//       </MapContainer>
//     </div>
//   );
// };

// const defaultIcon = new L.Icon({
//   iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
//   iconSize: [25, 41],
//   iconAnchor: [12, 41],
// });

// export default MapPage;
