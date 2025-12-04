"use client";

type Props = {
  value: string;
  onSearch: (newSearchQuery: string) => void;
};

const FilterType = ({ value, onSearch }: Props) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onSearch(event.target.value);
  };
  return (
    <>
      <select value={value} onChange={handleChange}>
        <option value="" disabled hidden>
          Check type
        </option>

        <option value="alcove">Alcove</option>
        <option value="panelTruck">PanelTruck</option>
        <option value="fullyIntegrated">FullyIntegrated</option>
      </select>
    </>
  );
};

export default FilterType;
