"use client";

type Props = {
  value: string;
  onSearch: (newSearchQuery: string) => void;
};

const FilterType = ({ value, onSearch }: Props) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value);
  };
  return (
    <>
      <h2>Vehicle type</h2>
      <ul>
        <li>
          <label>
            <input
              type="radio"
              name="vehicleType"
              value="alcove"
              checked={value === "alcove"}
              onChange={handleChange}
            />
            <span>Alcove</span>
          </label>
        </li>

        <li>
          <label>
            <input
              type="radio"
              name="vehicleType"
              value="panelTruck"
              checked={value === "panelTruck"}
              onChange={handleChange}
            />
            <span>PanelTruck</span>
          </label>
        </li>

        <li>
          <label>
            <input
              type="radio"
              name="vehicleType"
              value="fullyIntegrated"
              checked={value === "fullyIntegrated"}
              onChange={handleChange}
            />
            <span>FullyIntegrated</span>
          </label>
        </li>
      </ul>
    </>
  );
};

export default FilterType;
