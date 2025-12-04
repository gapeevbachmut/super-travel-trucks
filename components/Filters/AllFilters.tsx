"use client";

import { getCampers } from "@/lib/api";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import FilterLocation from "./FilterLocation";
import CamperList from "../CamperList/CamperList";
import FilterType from "./FilterType";

const AllFilters = () => {
  const [searchLocation, setSearchLocation] = useState("");
  const debouncedSearch = useDebouncedCallback(setSearchLocation, 300);
  const [valueType, setValueType] = useState("");

  const { data } = useQuery({
    queryKey: ["campers", { searchLocation, valueType }],
    queryFn: () => getCampers(searchLocation, valueType),
    placeholderData: keepPreviousData,
  });

  return (
    <section>
      <FilterLocation
        valueLocation={searchLocation}
        onSearch={debouncedSearch}
      />
      <FilterType value={valueType} onSearch={setValueType} />
      <CamperList campers={data?.campers || []} />
    </section>
  );
};

export default AllFilters;
