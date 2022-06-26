import React, { useState, Dispatch, SetStateAction } from "react";

import { SearchContainer, SearchInput, SearchBtn } from "./style";

type SearchBarProps = {
  setSearchResults: Dispatch<SetStateAction<never[]>>;
};

const SearchBar = ({ setSearchResults }: SearchBarProps) => {
  const [searchText, setSearchText] = useState("");

  const handleSearchInput = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ): void => {
    const inputValue = e.target.value.toLowerCase();
    setSearchText(inputValue);
  };

  const handleSearchBtn = () => {
    searchText === ""
      ? setSearchResults([])
      : fetch(`https://swapi.dev/api/planets/?search=${searchText}`)
          .then((response) => response.json())
          .then((data) => {
            setSearchResults(data.results);
          });
  };

  return (
    <SearchContainer>
      <SearchInput
        label="Enter Star Wars planet name"
        variant="outlined"
        onChange={(e) => handleSearchInput(e)}
      />
      <SearchBtn onClick={handleSearchBtn}>Search</SearchBtn>
    </SearchContainer>
  );
};

export default SearchBar;
