import { Camper } from "@/type/camper";
import CamperItem from "../CamperItem/CamperItem";

type Props = { campers: Camper[] };

const CamperList = ({ campers }: Props) => {
  return (
    <ul>
      {campers.map((camper) => (
        <CamperItem key={camper.id} camper={camper} />
      ))}
    </ul>
  );
};
export default CamperList;
