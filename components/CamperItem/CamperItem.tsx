import { Camper } from "@/type/camper";

type Props = { camper: Camper };

const CamperItem = ({ camper }: Props) => {
  return (
    <li>
      <p>{camper.name}</p>
    </li>
  );
};
export default CamperItem;
