import React from "react";
import { Routes, Route } from "react-router-dom";
import { HotelsList, MapView, RestaurantsList, AttractionsList, SearchResult } from "./pages";
import { PlaceDetails } from "./pages/templates";
import Grid from './pages/Grid';
import HomePage from './pages/HomePage';
import { NotFound } from "./pages";

const App = () => {
  return (
    <Routes>
      <Route path="/home/*" element={<Grid />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/*" element={<MapView />} />
      <Route path="/*" element={<RestaurantsList />} />
      <Route path="/*" element={<HotelsList />} />
      <Route path="/attractions" element={<AttractionsList />} />
      <Route path="/search" element={<SearchResult />} />
      <Route path="/:type/:id" element={<PlaceDetails />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
