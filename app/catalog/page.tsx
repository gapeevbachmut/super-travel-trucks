import type { Metadata } from 'next';
import AllFilters from '@/components/Filters/AllFilters';
import { getAllLocations, getCampers } from '@/lib/api';

export const metadata: Metadata = {
  title: 'Catalog of Travel-Trucks',
  description: 'Campers of your dreams',
};

const CatalogPage = async () => {
  const { campers, total } = await getCampers({}, 1, 4);
  const locations = await getAllLocations();
  return (
    <main>
      <AllFilters
        initCampers={campers}
        initTotal={total}
        initPage={1}
        allLocations={locations}
      />
    </main>
  );
};
export default CatalogPage;
