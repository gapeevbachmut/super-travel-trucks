export type CamperFilters = {
  location?: string;

  form?: string;

  AC?: boolean;
  kitchen?: boolean;
  bathroom?: boolean;
  TV?: boolean;
  radio?: boolean;
  refrigerator?: boolean;
  microwave?: boolean;
  gas?: boolean;
  water?: boolean;

  transmission?: "automatic" | "manual";
  engine?: "diesel" | "hybrid" | "petrol";

  page?: number;
  limit?: number;
};

export type EquipmentKey =
  | "AC"
  | "kitchen"
  | "bathroom"
  | "TV"
  | "radio"
  | "refrigerator"
  | "microwave"
  | "gas"
  | "water";
