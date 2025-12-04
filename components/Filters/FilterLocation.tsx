"use client";

import React from "react";

type Props = {
  valueLocation: string;
  onSearch: (newSearchQuery: string) => void;
};

const FilterLocation = ({ valueLocation, onSearch }: Props) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value);
  };

  return (
    <>
      <input
        type="text"
        placeholder="Filter by location..."
        // value={valueLocation}
        defaultValue={valueLocation} // для дебонса
        onChange={handleChange}
      />
    </>
  );
};
export default FilterLocation;
