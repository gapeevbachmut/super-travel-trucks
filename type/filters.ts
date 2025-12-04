export type vehicleLocation = { location?: string };

export type vehicleType = { form?: string };

export type vehicleEquipment = {
  AC?: boolean;
  kitchen?: boolean;
  bathroom?: boolean;
  transmission?: "automatic" | "manual";
  TV?: boolean;
  radio?: boolean;
  engine?: "diesel" | "hybrid" | "petrol";
};

export type CamperFilters = {
  location?: string;
  form?: string;

  AC?: boolean;
  kitchen?: boolean;
  bathroom?: boolean;
  transmission?: "automatic" | "manual";
  TV?: boolean;
  radio?: boolean;
  engine?: "diesel" | "hybrid" | "petrol";
};
