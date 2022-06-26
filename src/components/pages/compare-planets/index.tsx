import React, { useEffect } from "react";
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";

import PageTitle from "../../common/PageTitle";
import { StarWarsPlanetProps } from "../../types";

type ComparePlanetsPageProps = {
  selectedPlanets: StarWarsPlanetProps[];
};

type RadarItemProps = {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  gravity: string;
  surface_water: string;
  population: string;
};

const ComparePlanetsPage = ({ selectedPlanets }: ComparePlanetsPageProps) => {
  ChartJS.register(ArcElement, Tooltip, Legend);

  useEffect(() => {}, [selectedPlanets]);

  const data = {
    label: [
      "Rotation Perion",
      "Orbital Period",
      "Diameter",
      "Gravity",
      "Surface Water",
      "Population",
    ],
    datasets: selectedPlanets.map(
      ({
        name,
        rotation_period,
        orbital_period,
        diameter,
        gravity,
        surface_water,
        population,
      }) => ({
        label: name,
        data: [
          +rotation_period,
          +orbital_period,
          +diameter,
          +gravity,
          +surface_water,
          +population,
        ],
        fill: true,
      })
    ),
  };

  return (
    <>
      <PageTitle title={"Compare planets page"} />
      {selectedPlanets.map(
        ({
          name,
          rotation_period,
          orbital_period,
          diameter,
          gravity,
          surface_water,
          population,
        }) => (
          <p>{name}</p>
        )
      )}
    </>
  );
};

export default ComparePlanetsPage;
