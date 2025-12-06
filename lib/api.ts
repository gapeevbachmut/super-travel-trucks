import { type Camper } from "@/types/camper";
import { type CamperFilters } from "@/types/filters";
import axios from "axios";

export type CamperListResponse = {
  total: number;
  items: Camper[];
};

// axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

const api = axios.create({
  baseURL: "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io",
  headers: { "Content-Type": "application/json" },
  timeout: 10000,
});

export const getCampers = async (
  filters: CamperFilters = {},
  page = 1,
  limit = 4
) => {
  const params: CamperFilters = { page, limit, ...filters };

  const responce = await api.get<CamperListResponse>("/campers", {
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
