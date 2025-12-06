import { useCamperStore } from "@/store/useCamperStore";
import { Camper } from "@/types/camper";
import Image from "next/image";
import Link from "next/link";

type Props = { camper: Camper };

const CamperItem = ({ camper }: Props) => {
  //Навігація на сторінку campera чкерез лінк по назві
  // const [favorites, addFavorite] = useCamperStore();// or --??????
  const addFavorite = useCamperStore((state) => state.addFavorite);
  return (
    <li>
      <Image
        src={camper.gallery[0].thumb}
        alt="Camper"
        width={320}
        height={200}
      />
      <p>{camper.name}</p>
      <p>{camper.price.toFixed(2)}</p>
      <button type="button" onClick={addFavorite}>
        \|/\|/
      </button>
      <p>
        {camper.reviews[0].reviewer_rating}({camper.reviews.length} Reviews)
      </p>
      <p>{camper.location}</p>
      <p>{camper.description}</p>
      <p>{camper.transmission}</p>
      <p>{camper.engine}</p>
      <p>{camper.kitchen}</p>
      <p>{camper.AC}</p>
      <p>{camper.TV || camper.radio}</p>

      <button type="button">
        <Link href={`/catalog/${camper.id}`}>Show more</Link>
      </button>
    </li>
  );
};
export default CamperItem;
