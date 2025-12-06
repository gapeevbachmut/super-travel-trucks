import type { Metadata } from "next";
import AllFilters from "@/components/Filters/AllFilters";
import { getCampers } from "@/lib/api";
import css from "./pageCftalog.module.css";

export const metadata: Metadata = {
  title: "Catalog of Travel-Trucks",
  description: "Campers of your dreams",
};

const CatalogPage = async () => {
  const { campers, total } = await getCampers({}, 1, 4);

  return (
    <main className={css.catalogContainer}>
      <h1>Catalog</h1>
      <AllFilters initCampers={campers} initTotal={total} initPage={1} />
    </main>
  );
};
export default CatalogPage;
