import { getCampers } from "@/lib/api";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Catalog of Travel-Trucks",
  description: "Campers of your dreams",
};

const Catalog = async () => {
  const campers = await getCampers();
  console.log("campers", campers.total);

  return (
    <>
      <h1>Catalog page!</h1>
    </>
  );
};
export default Catalog;
