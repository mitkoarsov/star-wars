import React, { useEffect } from "react";
import { FormGroup, FormControlLabel, Checkbox } from "@mui/material";

import PageTitle from "../../../../common/PageTitle";
import { SelectedPlanetsContainer } from "./style";
import { StarWarsPlanetProps, LandingPageProps } from "../../../../types";

const SelectedPlanets = ({
  selectedPlanets,
  setSelectedPlanets,
}: LandingPageProps) => {
  useEffect(() => {}, [selectedPlanets]);

  const handlePlanetCheck = (planet: StarWarsPlanetProps) => {
    const isSelected = selectedPlanets.find(({ name }) => name === planet.name);

    if (isSelected) {
      const updateSelectedPlanets = selectedPlanets.filter(
        ({ name }) => name !== planet.name
      );
      setSelectedPlanets(updateSelectedPlanets);
    } else {
      setSelectedPlanets([...selectedPlanets, planet]);
    }
  };

  return (
    <>
      <PageTitle title={"Selected Planets"} />
      <FormGroup>
        <SelectedPlanetsContainer>
          {selectedPlanets.map((planet) => (
            <FormControlLabel
              key={planet.name}
              control={<Checkbox />}
              label={planet.name}
              checked={true}
              onChange={() => handlePlanetCheck(planet)}
            />
          ))}
        </SelectedPlanetsContainer>
      </FormGroup>
    </>
  );
};

export default SelectedPlanets;
