import { Camper } from "@/types/camper";
import CamperItem from "../CamperItem/CamperItem";
import css from "./CamperList.module.css";

type Props = { campers: Camper[] };

const CamperList = ({ campers }: Props) => {
  // console.log("campers", campers);

  return (
    <ul className={css.camperList}>
      {campers.map((camper) => (
        <CamperItem key={camper.id} camper={camper} />
      ))}
    </ul>
  );
};
export default CamperList;
