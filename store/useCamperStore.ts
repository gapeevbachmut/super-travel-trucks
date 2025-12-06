//Zustand
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Camper } from "@/types/camper";
import { CamperFilters } from "@/types/filters";

// описую тип стану
type CamperState = {
  campers: Camper[]; //основний запит
  filters: CamperFilters; // фільтрація
  favorites: string[]; // масив id обраних
  setCampers: (campers: Camper[]) => void; //зміна ...
  setFilters: (filters: CamperFilters) => void; //  зміна фільтра
  addFavorite: (id: string) => void; //  додавання обр
  removeFavorite: (id: string) => void; // видалення
  resetFilters: () => void; // скидання фільтрів
};

export const useCamperStore = create<CamperState>()(
  persist(
    (set, get) => ({
      campers: [],
      filters: {},
      favorites: [],
      setCampers: (camper) => set({ campers: camper }),
      setFilters: (filter) => set({ filters: filter }),
      addFavorite: (id) =>
        set({ favorites: Array.from(new Set([...get().favorites, id])) }),
      removeFavorite: (id) =>
        set({ favorites: get().favorites.filter((i) => i !== id) }),
      resetFilters: () => set({ filters: {} }),
    }),
    {
      name: "traveltrucks-storage", // localStorage key
      partialize: (state) => ({ favorites: state.favorites }), // зберігаю тільки favorites
    }
  )
);
