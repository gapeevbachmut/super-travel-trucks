// import type { Metadata } from 'next';
// import AllFilters from '@/components/Filters/AllFilters';
// import { getAllLocations, getCampers } from '@/lib/api';

// export const metadata: Metadata = {
//   title: 'Catalog of Travel-Trucks',
//   description: 'Campers of your dreams',
// };

// const CatalogPage = async () => {
//   const { campers, total } = await getCampers({}, 1, 4);
//   const locations = await getAllLocations();
//   return (
//     <main>
//       <AllFilters
//         initCampers={campers}
//         initTotal={total}
//         initPage={1}
//         allLocations={locations}
//       />
//     </main>
//   );
// };
// export default CatalogPage;
////////////////////////////////////////////////
//////////////////////////////////////////////////
/////////////////////////////////////////////////
'use client';

// import { useEffect, useState } from 'react';
// import AllFilters from '@/components/Filters/AllFilters';
// import CamperList from '@/components/CamperList/CamperList';
// import { Camper } from '@/types/camper';
// import { CamperFilters } from '@/types/filters';
// import { getCampers, getAllLocations } from '@/lib/api';

// const LIMIT = 4;

// const CatalogPage = () => {
//   const [campers, setCampers] = useState<Camper[]>([]);
//   const [filters, setFilters] = useState<CamperFilters>({});
//   const [page, setPage] = useState(1);
//   const [total, setTotal] = useState(0);
//   const [loading, setLoading] = useState(false);
//   const [locations, setLocations] = useState<string[]>([]);

//   useEffect(() => {
//     getAllLocations().then(setLocations);
//     loadCampers({}, 1);
//   }, []);

//   const loadCampers = async (filters: CamperFilters, page: number) => {
//     setLoading(true);
//     const { campers, total } = await getCampers(filters, page, LIMIT);
//     setCampers(page === 1 ? campers : prev => [...prev, ...campers]);
//     setTotal(total);
//     setLoading(false);
//   };

//   const handleFiltersSubmit = (newFilters: CamperFilters) => {
//     setFilters(newFilters);
//     setPage(1);
//     loadCampers(newFilters, 1);
//   };

//   const loadMore = () => {
//     const next = page + 1;
//     setPage(next);
//     loadCampers(filters, next);
//   };

//   return (
//     <main>
//       <AllFilters
//         allLocations={locations}
//         onSubmit={handleFiltersSubmit}
//         loading={loading}
//       />

//       <CamperList
//         campers={campers}
//         total={total}
//         loading={loading}
//         onLoadMore={loadMore}
//       />
//     </main>
//   );
// };

// export default CatalogPage;
/////////////////////////////////////////////////////
//////////////////////////////////////////////////
////////////////////////////////////////////////////
'use client';

import { useEffect, useState } from 'react';
import AllFilters from '@/components/Filters/AllFilters';
import CamperList from '@/components/CamperList/CamperList';
import { useCatalogStore } from '@/store/useCatalogStore';
import { getAllLocations } from '@/lib/api';

const CatalogPage = () => {
  const [locations, setLocations] = useState<string[]>([]);

  const { campers, total, loading, fetchCampers, loadMore } = useCatalogStore();

  useEffect(() => {
    getAllLocations().then(setLocations);
    fetchCampers(); // initial load
  }, [fetchCampers]);

  return (
    <main>
      <AllFilters
        allLocations={locations}
        loading={loading}
        onSubmit={filters => fetchCampers(filters, 1)}
      />

      <CamperList
        campers={campers}
        total={total}
        loading={loading}
        onLoadMore={loadMore}
      />
    </main>
  );
};

export default CatalogPage;
