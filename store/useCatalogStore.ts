// store/useCatalogStore.ts
import { create } from 'zustand';
import { Camper } from '@/types/camper';
import { CamperFilters } from '@/types/filters';
import { getCampers } from '@/lib/api';

const LIMIT = 4;

type CatalogState = {
  campers: Camper[];
  total: number;
  page: number;
  filters: CamperFilters;
  loading: boolean;
  error: string | null;

  fetchCampers: (filters?: CamperFilters, page?: number) => Promise<void>;
  loadMore: () => Promise<void>;
  reset: () => void;
};

export const useCatalogStore = create<CatalogState>((set, get) => ({
  campers: [],
  total: 0,
  page: 1,
  filters: {},
  loading: false,
  error: null,

  fetchCampers: async (filters = {}, page = 1) => {
    try {
      set({ loading: true, error: null });

      const { campers, total } = await getCampers(filters, page, LIMIT);

      set({
        campers: page === 1 ? campers : [...get().campers, ...campers],
        total,
        page,
        filters,
      });
    } catch {
      set({ error: 'Failed to load campers' });
    } finally {
      set({ loading: false });
    }
  },

  loadMore: async () => {
    const { filters, page, fetchCampers } = get();
    await fetchCampers(filters, page + 1);
  },

  reset: () =>
    set({
      campers: [],
      total: 0,
      page: 1,
      filters: {},
      error: null,
    }),
}));
