"use client";

import { getCampers } from "@/lib/api";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import FilterLocation from "./FilterLocation";
import CamperList from "../CamperList/CamperList";
import FilterType from "./FilterType";
import FilterEquipment from "./FilterEquipment";

const AllFilters = () => {
  const [searchLocation, setSearchLocation] = useState("");
  const debouncedSearch = useDebouncedCallback(setSearchLocation, 300);
  const [valueType, setValueType] = useState("");
  const [equipmentFilters, setEquipmentFilters] = useState({
    AC: false,
    kitchen: false,
    bathroom: false,
    TV: false,
    radio: false,
    transmission: "",
    engine: "",
  });

  const { data } = useQuery({
    queryKey: ["campers", searchLocation, valueType, equipmentFilters],
    queryFn: () =>
      getCampers({
        location: searchLocation || undefined,
        form: valueType || undefined,
        AC: equipmentFilters.AC || undefined,
        kitchen: equipmentFilters.kitchen || undefined,
        bathroom: equipmentFilters.bathroom || undefined,
        TV: equipmentFilters.TV || undefined,
        radio: equipmentFilters.radio || undefined,
        transmission: equipmentFilters.transmission || undefined,
        engine: equipmentFilters.engine || undefined,
      }),
    placeholderData: keepPreviousData,
  });

  return (
    <section>
      <FilterLocation
        valueLocation={searchLocation}
        onSearch={debouncedSearch}
      />
      <FilterEquipment
        valueEquipment={equipmentFilters}
        onSearch={setEquipmentFilters}
      />
      <FilterType value={valueType} onSearch={setValueType} />
      <CamperList campers={data?.campers || []} />
    </section>
  );
};

export default AllFilters;
