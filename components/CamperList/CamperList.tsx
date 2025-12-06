import { Camper } from "@/types/camper";
import CamperItem from "../CamperItem/CamperItem";
import toast from "react-hot-toast";

type Props = { campers: Camper[] };

const CamperList = ({ campers }: Props) => {
  if (!campers.length) {
    return toast.error("Incorrect filter combination. Try again.");
  }
  return (
    <ul>
      {campers.map((camper) => (
        <CamperItem key={camper.id} camper={camper} />
      ))}
    </ul>
  );
};
export default CamperList;
