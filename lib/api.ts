// lib/api.ts

import { type Camper } from "@/type/camper";
import axios from "axios";

export type CamperListResponse = {
  total: number;
  items: Camper[];
};

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

// сторінка каталог - усі кемпери
export const getCampers = async () => {
  const res = await axios.get<CamperListResponse>("/campers");
  const { items, total } = res.data;

  return {
    total,
    campers: items,
  };
};
