import { type Camper } from "@/type/camper";
import axios from "axios";

export type CamperListResponse = {
  total: number;
  items: Camper[];
};

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

export const getCampers = async (location?: string, form?: string) => {
  const responce = await axios.get<CamperListResponse>("/campers", {
    params: { location, form },
  });

  return {
    total: responce.data.total,
    campers: responce.data.items,
  };
};

// один
export const getOneCamper = async (id: string) => {
  const response = await axios.get<Camper>(`/campers/${id}`);
  return response.data;
};
