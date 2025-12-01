import CamperList from "@/components/CamperList/CamperList";
import { getCampers } from "@/lib/api";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Catalog of Travel-Trucks",
  description: "Campers of your dreams",
};

const Catalog = async () => {
  const response = await getCampers();

  return (
    <section>
      <h1>Catalog page!</h1>
      {response?.campers?.length > 0 && (
        <CamperList campers={response.campers} />
      )}
    </section>
  );
};
export default Catalog;
