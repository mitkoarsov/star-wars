import React, { useState } from "react";

import SearchBar from "./components/search-bar";
import SelectedPlanets from "./components/selected-planets";
import SearchResults from "./components/search-results";
import { LandingPageProps } from "../../types";

const LandingPage = ({
  selectedPlanets,
  setSelectedPlanets,
}: LandingPageProps) => {
  const [searchResults, setSearchResults] = useState([]);

  return (
    <>
      <SearchBar setSearchResults={setSearchResults} />
      <SelectedPlanets
        selectedPlanets={selectedPlanets}
        setSelectedPlanets={setSelectedPlanets}
      />
      <SearchResults
        selectedPlanets={selectedPlanets}
        searchResults={searchResults}
        setSelectedPlanets={setSelectedPlanets}
      />
    </>
  );
};

export default LandingPage;
