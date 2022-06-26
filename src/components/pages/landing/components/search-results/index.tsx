import React, { useEffect, Dispatch, SetStateAction } from "react";
import { FormGroup, FormControlLabel, Checkbox } from "@mui/material";

import { NoResultsMessage } from "./style";
import PageTitle from "../../../../common/PageTitle";
import { StarWarsPlanetProps } from "../../../../types";

type SearchResultsProps = {
  selectedPlanets: StarWarsPlanetProps[];
  searchResults: StarWarsPlanetProps[];
  setSelectedPlanets: Dispatch<SetStateAction<StarWarsPlanetProps[]>>;
};

const SearchResults = ({
  selectedPlanets,
  searchResults,
  setSelectedPlanets,
}: SearchResultsProps) => {
  useEffect(() => {}, [searchResults]);

  const handlePlanetCheck = (planet: StarWarsPlanetProps) => {
    const isSelected = selectedPlanets.find(({ name }) => name === planet.name);

    if (isSelected) {
      const updateSelectedPlanets = selectedPlanets.filter(
        ({ name }) => name === planet.name
      );
      setSelectedPlanets(updateSelectedPlanets);
    } else {
      setSelectedPlanets([...selectedPlanets, planet]);
    }
  };

  return (
    <>
      <PageTitle title={"Your search results"} />
      {searchResults.length > 0 ? (
        <FormGroup>
          {searchResults.map((planet) => (
            <FormControlLabel
              key={planet.name}
              control={<Checkbox />}
              label={planet.name}
              checked={
                selectedPlanets.find(({ name }) => name === planet.name)
                  ? true
                  : false
              }
              onChange={() => handlePlanetCheck(planet)}
            />
          ))}
        </FormGroup>
      ) : (
        <NoResultsMessage>No results yet...</NoResultsMessage>
      )}
    </>
  );
};

export default SearchResults;
