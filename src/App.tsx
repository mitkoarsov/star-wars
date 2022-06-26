import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Container from "./components/layout/Container";
import LandingPage from "./components/pages/landing";
import ComparePlanetsPage from "./components/pages/compare-planets";
import { StarWarsPlanetProps } from "./components/types";

const App = () => {
  const [selectedPlanets, setSelectedPlanets] = useState<StarWarsPlanetProps[]>(
    []
  );

  return (
    <BrowserRouter>
      <Container>
        <Routes>
          <Route
            path="/"
            element={
              <LandingPage
                selectedPlanets={selectedPlanets}
                setSelectedPlanets={setSelectedPlanets}
              />
            }
          />
          <Route
            path="/compare-planets"
            element={<ComparePlanetsPage selectedPlanets={selectedPlanets} />}
          />
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default App;
