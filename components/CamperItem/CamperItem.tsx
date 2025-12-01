import { Camper } from "@/type/camper";
import Link from "next/link";

type Props = { camper: Camper };

const CamperItem = ({ camper }: Props) => {
  //Навігація на сторінку campera чкерез лінк по назві

  return (
    <li>
      <Link href={`/catalog/${camper.id}`}>{camper.name}</Link>
    </li>
  );
};
export default CamperItem;
