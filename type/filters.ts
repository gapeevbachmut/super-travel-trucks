// Location - location

// Vehicle equipment - AC, transmission [automatic, manual], Kitchen, Bathroom, TV [TV, radio], engine: [diesel, hybrid, petrol ]

// Vehicle type  - form - [fullyIntegrated, panelTruck, alcove]

export type location = string[];

export type vehicleType = "fullyIntegrated" | "panelTruck" | "alcove";

export type vehicleEquipment = {
  AC: boolean;
  kitchen: boolean;
  bathroom: boolean;
  transmission: "automatic" | "manual";
  TV: "TV" | "radio";
  engine: "diesel" | "hybrid" | "petrol";
};
