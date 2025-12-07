import { Camper } from "@/types/camper";

type Props = { camper: Camper };

const Features = ({ camper }: Props) => {
  return (
    <div>
      <h1>Features</h1>
      <p>{camper.form}</p>
      <p>🚗 {camper.transmission}</p>
      <p>⛽{camper.engine}</p>
    </div>
  );
};

export default Features;
