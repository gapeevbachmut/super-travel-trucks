export type CamperGalleryItem = {
  thumb: string;
  original: string;
};

export type CamperReview = {
  reviewer_name: string;
  reviewer_rating: number;
  comment: string;
};

export type Camper = {
  id: string;
  name: string;
  price: number;
  rating: number;
  location: string;
  description: string;

  form: string; // van1*2  //fully - grid //alcove -3*3
  length: string;
  width: string;
  height: string;
  tank: string;
  consumption: string;

  transmission: string; //diagram
  engine: string; //fuel

  AC: boolean; //wind
  bathroom: boolean; //shower
  kitchen: boolean; //cup-hot
  TV: boolean; //tv
  radio: boolean; //radio
  refrigerator: boolean; //fridge
  microwave: boolean; //micro
  gas: boolean; //gas
  water: boolean; //water

  gallery: CamperGalleryItem[];
  reviews: CamperReview[];
};
