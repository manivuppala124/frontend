import { useContext } from 'react'
import { useNavigate } from "react-router-dom";
import { Header, Map, Sidebar, Filter } from "../components/map"
import { MainContext } from "../context/MainContext"

const MapView = () => {
  // Destructuring all necessary states from the main context
  const { places, coordinates, setCoordinates, setBounds, filteredPlaces } = useContext(MainContext);
  const navigate = useNavigate();

  return (
    <div className="w-full flex flex-wrap-reverse md:flex-nowrap md:h-screen">
      <div className="h-auto md:h-full w-full md:w-[35%] lg:w-[23%] md:overflow-y-scroll">
        <div className="w-full text-center">
          {/* Close Map View Button */}
          <button
            className="bg-black text-white py-2 px-8 rounded my-2 hover:bg-gray-600 transition ease-in duration-100"
            onClick={() => navigate(-1)} // Use useNavigate to navigate back one step in history
          >
            <p>Close Map View</p>
          </button>
          {/* --- */}
        </div>

        {/* Sidebar Component Rendered with filteredPlaces or all places */}
        <Sidebar places={filteredPlaces ? filteredPlaces : places} />
        {/* --- */}
      </div>

      <div className="h-[50vh] md:h-full w-full md:w-[65%] lg:w-[79%] relative">
        {/* Map Header Component */}
        <Header setCoordinates={setCoordinates} />
        {/* --- */}

        {/* Map Component */}
        <Map
          setBounds={setBounds}
          setCoordinates={setCoordinates}
          coordinates={coordinates}
          places={filteredPlaces ? filteredPlaces : places}
        />
        {/* --- */}

        {/* Map Filter Component */}
        <Filter />
        {/* --- */}
      </div>
    </div>
  );
};

export default MapView;
