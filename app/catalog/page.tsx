import type { Metadata } from "next";
import AllFilters from "@/components/Filters/AllFilters";
import { getCampers } from "@/lib/api";

export const metadata: Metadata = {
  title: "Catalog of Travel-Trucks",
  description: "Campers of your dreams",
};

const Catalog = async () => {
  const { campers } = await getCampers();
  const locations = Array.from(
    new Set(campers.map((camper) => camper.location))
  );

  return (
    <section>
      <h1>Catalog page!</h1>
      <AllFilters campers={campers} locations={locations} />
    </section>
  );
};
export default Catalog;
