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
        placeholder="Фільтрувати за локацією..."
        // value={valueLocation}
        defaultValue={valueLocation} // для дебонса
        onChange={handleChange}
      />

      <p>{valueLocation}</p>
    </>
  );
};
export default FilterLocation;
