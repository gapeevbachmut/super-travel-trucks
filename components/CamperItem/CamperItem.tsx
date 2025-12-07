import { useCamperStore } from "@/store/useCamperStore";
import { Camper } from "@/types/camper";
import Image from "next/image";
import Link from "next/link";
import css from "./CamperItem.module.css";

type Props = { camper: Camper };

const CamperItem = ({ camper }: Props) => {
  //Навігація на сторінку campera чкерез лінк по назві
  // const [favorites, addFavorite] = useCamperStore();// or --??????
  const favorites = useCamperStore((state) => state.favorites);
  const addFavorite = useCamperStore((state) => state.addFavorite);
  const removeFavorite = useCamperStore((state) => state.removeFavorite);

  const isFav = favorites.includes(camper.id);

  const toggleFavorite = () => {
    if (isFav) removeFavorite(camper.id);
    else addFavorite(camper.id);
  };

  return (
    <li className={css.camperItem}>
      <div className={css.itemImgThumb}>
        <Image
          src={camper.gallery[0].thumb}
          className={css.itemImg}
          alt="Camper"
          loading="eager"
          width={320}
          height={200}
        />
      </div>
      <div className={css.itemDescr}>
        <div className={css.itemDescrThumb}>
          <div className={css.itemTitleBox}>
            <p className={css.itemTitle}>{camper.name}</p>
            <div className={css.itemPrLikBox}>
              <p className={css.itemPrice}>€{camper.price.toFixed(2)}</p>
              <button
                type="button"
                onClick={toggleFavorite}
                className={css.itemLike}
              >
                {isFav ? "🤎" : "🤍"}
              </button>
            </div>

            {/* ----- на серце,  зірку,  карту поставити    -   svg   !!!!! */}
          </div>
          <div className={css.itemRewLocBox}>
            <p>
              ⭐{camper.reviews[0].reviewer_rating}({camper.reviews.length}
              Reviews)
            </p>
            <p>🗺{camper.location}</p>
          </div>
          <p className={css.itemCampDescr}>{camper.description}</p>
          <div className={css.itemEquipBox}>
            {/*  якщо   true  показувати картинку  !!!!! */}
            <p>🚗 {camper.transmission}</p>
            <p>⛽{camper.engine}</p>
            <p>{camper.kitchen}</p>
            <p>{camper.AC}</p>
            <p>{camper.TV}</p>
            <p>{camper.radio}</p>
          </div>
        </div>
        {/* лінк у бтн !!!  - підправити стилі!!!*/}
        <Link href={`/catalog/${camper.id}`} className={css.itemLink}>
          <button type="button" className={css.btnShowMore}>
            Show more
          </button>
        </Link>
      </div>
    </li>
  );
};
export default CamperItem;
