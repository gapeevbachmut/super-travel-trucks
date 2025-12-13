'use client';

import { useEffect, useState } from 'react';
import AllFilters from '@/components/Filters/AllFilters';
import CamperList from '@/components/CamperList/CamperList';
import { useCatalogStore } from '@/store/useCatalogStore';
import { getAllLocations } from '@/lib/api';
import { useCamperStore } from '@/store/useCamperStore';
import Modal from '@/components/Modal/Modal';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import css from './page.module.css';

const CatalogPage = () => {
  const [locations, setLocations] = useState<string[]>([]);

  const { campers, total, loading, fetchCampers, loadMore } = useCatalogStore();

  useEffect(() => {
    getAllLocations().then(setLocations);
    fetchCampers(); // initial load
  }, [fetchCampers]);

  useMediaQuery('(max-width: 767px)');
  //буде працювати до ки родмір екрану менше за 767

  const { isModalOpen, setIsModalOpen, isMobile } = useCamperStore();

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // ------------------   OR
  // const openModal = useCamperStore(state => state.isModalOpen);
  // const closeModal = useCamperStore(state => state.setIsModalOpen);

  return (
    <main className={css.main}>
      {isMobile && (
        <button onClick={openModal} className={css.btnModal}>
          Filters
        </button>
      )}
      {isMobile && isModalOpen && (
        <Modal onClose={closeModal}>
          <AllFilters
            allLocations={locations}
            loading={loading}
            onSubmit={filters => fetchCampers(filters, 1)}
          />
        </Modal>
      )}
      {!isMobile && (
        <AllFilters
          allLocations={locations}
          loading={loading}
          onSubmit={filters => fetchCampers(filters, 1)}
        />
      )}
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
