"use client";

import CamperList from "@/components/CamperList/CamperList";
import FilterLocation from "@/components/Filters/FilterLocation";
import { getCampers } from "@/lib/api";
// import type { Metadata } from "next";
import { useState } from "react";
import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { useDebouncedCallback } from "use-debounce";

// export const metadata: Metadata = {
//   title: "Catalog of Travel-Trucks",
//   description: "Campers of your dreams",
// };

// фільтри винести в окремий компонент
const Catalog = () => {
  const [searchLocation, setSearchLocation] = useState("");
  const debouncedSearch = useDebouncedCallback(setSearchLocation, 300);

  const { data, isLoading } = useQuery({
    queryKey: ["campers", { searchLocation }],
    queryFn: () => getCampers(searchLocation),
    placeholderData: keepPreviousData,
  });

  return (
    <section>
      <h1>Catalog page!</h1>
      <>
        <FilterLocation
          valueLocation={searchLocation}
          onSearch={debouncedSearch}
        />
        {isLoading && <strong>Loading ......</strong>}
        {data && !isLoading && <CamperList campers={data.campers} />}
      </>
    </section>
  );
};
export default Catalog;
