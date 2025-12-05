export type CamperFilters = {
  location?: string;
  form?: string;
  // EQUIPMENT (boolean)
  AC?: boolean;
  kitchen?: boolean;
  bathroom?: boolean;
  TV?: boolean;
  radio?: boolean;
  refrigerator?: boolean;
  microwave?: boolean;
  gas?: boolean;
  water?: boolean;

  // FIXED VALUE OPTIONS
  transmission?: "automatic" | "manual";
  engine?: "diesel" | "hybrid" | "petrol";
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
