import type { Metadata } from "next";
import AllFilters from "@/components/Filters/AllFilters";
import { getCampers } from "@/lib/api";
import css from "./pageCftalog.module.css";

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
    <section className={css.catalogContainer}>
      <AllFilters campers={campers} locations={locations} />
    </section>
  );
};
export default Catalog;
