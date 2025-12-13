import { type Camper } from '@/types/camper';
import { type CamperFilters } from '@/types/filters';
import axios from 'axios';

export type CamperListResponse = {
  total: number;
  items: Camper[];
};

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: { 'Content-Type': 'application/json' },
  timeout: 10000,
});

export const getCampers = async (
  filters: CamperFilters = {},
  page = 1,
  limit = 4
) => {
  const params: CamperFilters = { page, limit, ...filters };

  const responce = await api.get<CamperListResponse>('/campers', {
    params,
  });

  return {
    total: responce.data.total,
    campers: responce.data.items,
  };
};

// один
export const getOneCamper = async (id: string) => {
  const response = await api.get<Camper>(`/campers/${id}`);
  return response.data;
};

// локації - окремий запит для отримання усіх локацій
export const getAllLocations = async () => {
  const data = await api.get<CamperListResponse>('/campers', {
    params: { limit: 100 },
  });
  const list = data.data.items;
  // console.log("data", data.data.items);
  return Array.from(new Set(list.map(c => c.location)));
};
