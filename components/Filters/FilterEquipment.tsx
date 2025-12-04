"use client";

type Props = {
  valueEquipment: {
    AC: boolean;
    kitchen: boolean;
    bathroom: boolean;
    TV: boolean;
    radio: boolean;
    transmission: string;
    engine: string;
  };
  onSearch: (newSearchQuery: any) => void;
};

const FilterEquipment = ({ valueEquipment, onSearch }: Props) => {
  const handleCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;

    onSearch({
      ...valueEquipment,
      [name]: checked,
    });
  };

  return (
    <>
      <h2>Vehicle equipment</h2>
      <ul>
        <li>
          <label>
            <input
              type="checkbox"
              name="AC"
              checked={valueEquipment.AC}
              onChange={handleCheckbox}
            />
            <span>AC</span>
          </label>
        </li>

        <li>
          <label>
            <input
              type="checkbox"
              name="kitchen"
              checked={valueEquipment.kitchen}
              onChange={handleCheckbox}
            />
            <span>Kitchen</span>
          </label>
        </li>

        <li>
          <label>
            <input
              type="checkbox"
              name="engine"
              checked={!!valueEquipment.engine}
              onChange={(e) =>
                onSearch({
                  ...valueEquipment,
                  engine: e.target.checked ? "diesel" : "",
                })
              }
            />
            <span>Engine</span>
          </label>
        </li>
      </ul>
    </>
  );
};
export default FilterEquipment;
