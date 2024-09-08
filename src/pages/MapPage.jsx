import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import Navbar from '@/my_components/Navbar_home';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"; // Assuming you're using a custom Card component
import { Label } from '@/components/ui/Label';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import Draggable from 'react-draggable';
import { makerequest, sendData } from '../api'; // Import fetchRouteData

const GEOCODE_API_URL = 'https://nominatim.openstreetmap.org/search';

const MapPage = () => {
  const [startLocation, setStartLocation] = useState(null);
  const [endLocation, setEndLocation] = useState(null);
  const [startSearchResults, setStartSearchResults] = useState([]);
  const [endSearchResults, setEndSearchResults] = useState([]);
  const [startSearchQuery, setStartSearchQuery] = useState('');
  const [endSearchQuery, setEndSearchQuery] = useState('');
  const [showStartDropdown, setShowStartDropdown] = useState(false);
  const [showEndDropdown, setShowEndDropdown] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  const fetchStartResults = useCallback(
    debounce(async (query) => {
      if (query.trim()) {
        const response = await fetch(`${GEOCODE_API_URL}?q=${encodeURIComponent(query)}&format=json&limit=5`);
        const data = await response.json();
        setStartSearchResults(data);
        setShowStartDropdown(true);
      } else {
        setStartSearchResults([]);
        setShowStartDropdown(false);
      }
    }, 500),
    []
  );

  const fetchEndResults = useCallback(
    debounce(async (query) => {
      if (query.trim()) {
        const response = await fetch(`${GEOCODE_API_URL}?q=${encodeURIComponent(query)}&format=json&limit=5`);
        const data = await response.json();
        setEndSearchResults(data);
        setShowEndDropdown(true);
      } else {
        setEndSearchResults([]);
        setShowEndDropdown(false);
      }
    }, 500),
    []
  );

  useEffect(() => {
    fetchStartResults(startSearchQuery);
  }, [startSearchQuery, fetchStartResults]);

  useEffect(() => {
    fetchEndResults(endSearchQuery);
  }, [endSearchQuery, fetchEndResults]);

  const handleLocationSelect = (location, setLocation, setQuery, setShowDropdown) => {
    const selectedLocation = {
      lat: location.lat,
      lon: location.lon,
      display_name: location.display_name
    };
    setLocation(selectedLocation);
    setQuery(location.display_name);
    setShowDropdown(false);
  };

  const handleSave = async () => {
    if (startLocation && endLocation) {
      const result = {
        start_latitude: parseInt(startLocation.lat),
        start_longitude: parseInt(startLocation.lon),
        end_latitude: parseInt(endLocation.lat),
        end_longitude: parseInt(endLocation.lon)
      };
  
      // console.log('Sending request:', result);
  
      try {
        let points = await makerequest(result);
        console.log('Response from makerequest:', points);
       
        if (points) {
          console.log('Route:', points);
          const file = await sendData(points)
          
          navigate('/outputmap', { points });
        } else {
          console.error('Route not found in points:');
        }
  
      } catch (error) {
        console.error('Error fetching route:', error);
      }
  
    } else {
      alert('Please select both start and end locations');
    }
  };

  return (
    <div className="relative min-h-screen">
      <Navbar className="absolute top-0 left-0 w-full z-20" />
      <Draggable>
        <div className="absolute top-16 left-4 z-20 cursor-move">
          <Card className="w-80 border border-transparent dark:bg-black dark:border-white/[0.2] bg-white/[0.7] p-4 rounded-2xl shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl flex justify-center">NaviX</CardTitle>
              <div className="flex justify-center mt-1">___________________</div>
              <CardDescription></CardDescription>
            </CardHeader>
            
            <CardContent>
              {/* Start Location Input */}
              <Label className="flex pb-1 pl-1 text-lg">From</Label>
              <Input
                placeholder='From'
                type='text'
                value={startSearchQuery}
                onChange={e => setStartSearchQuery(e.target.value)}
                onFocus={() => setShowStartDropdown(true)}
                className="bg-white border border-gray-300 dark:bg-gray-800 dark:border-gray-600"
              />
              {showStartDropdown && (
                <ul className="absolute z-30 w-full mt-2 overflow-hidden bg-white border border-gray-300 rounded-md shadow-md">
                  {startSearchResults.map(result => (
                    <li
                      className="p-2 transition duration-150 ease-in-out cursor-pointer hover:bg-blue-100"
                      key={result.place_id}
                      onClick={() => handleLocationSelect(result, setStartLocation, setStartSearchQuery, setShowStartDropdown)}
                    >
                      {result.display_name}
                    </li>
                  ))}
                </ul>
              )}

              {/* End Location Input */}
              <Label className="flex pt-2 pb-1 pl-1 text-lg">To</Label>
              <Input
                placeholder='To'
                type='text'
                value={endSearchQuery}
                onChange={e => setEndSearchQuery(e.target.value)}
                onFocus={() => setShowEndDropdown(true)}
                className="bg-white border border-gray-300 dark:bg-gray-800 dark:border-gray-600"
              />
              {showEndDropdown && (
                <ul className="absolute z-30 w-full mt-2 overflow-hidden bg-white border border-gray-300 rounded-md shadow-md">
                  {endSearchResults.map(result => (
                    <li
                      className="p-2 transition duration-150 ease-in-out cursor-pointer hover:bg-blue-100"
                      key={result.place_id}
                      onClick={() => handleLocationSelect(result, setEndLocation, setEndSearchQuery, setShowEndDropdown)}
                    >
                      {result.display_name}
                    </li>
                  ))}
                </ul>
              )}

              {/* Go Button */}
              <Button className="mt-5 p-5 rounded-xl flex justify-end" onClick={handleSave}>
                Go
              </Button>
            </CardContent>

            <div className="flex justify-center">_______________________________</div>
            <CardFooter className="flex space-between justify-center">
              <div className='p-4'></div>
            </CardFooter>
          </Card>
        </div>
      </Draggable>

      {/* Map */}
      <MapContainer 
        center={[20, 0]}
        zoom={3}
        className="w-full h-screen z-10"
        maxBounds={[[ -60, -180 ], [ 80, 180 ]]}
        maxBoundsViscosity={1.0}
        worldCopyJump={false}
        minZoom={2}
        maxZoom={10}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {startLocation && (
          <Marker position={[startLocation.lat, startLocation.lon]} icon={defaultIcon} />
        )}

        {endLocation && (
          <Marker position={[endLocation.lat, endLocation.lon]} icon={defaultIcon} />
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

export default MapPage;