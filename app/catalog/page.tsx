import type { Metadata } from "next";

import AllFilters from "@/components/Filters/AllFilters";

export const metadata: Metadata = {
  title: "Catalog of Travel-Trucks",
  description: "Campers of your dreams",
};

const Catalog = () => {
  return (
    <section>
      <h1>Catalog page!</h1>
      <AllFilters />
    </section>
  );
};
export default Catalog;
