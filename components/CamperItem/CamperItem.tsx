import { useCamperStore } from '@/store/useCamperStore';
import { Camper } from '@/types/camper';
import Image from 'next/image';
import Link from 'next/link';
import css from './CamperItem.module.css';

type Props = { camper: Camper };

const CamperItem = ({ camper }: Props) => {
  const favorites = useCamperStore(state => state.favorites);
  const addFavorite = useCamperStore(state => state.addFavorite);
  const removeFavorite = useCamperStore(state => state.removeFavorite);

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
          alt={camper.name}
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
                {/* {isFav ? '🤎' : '🤍'} */}

                {isFav ? (
                  <svg width={16} height={16}>
                    <use href="/icons-2.svg#icon-heart-red"></use>
                  </svg>
                ) : (
                  <svg width={16} height={16}>
                    <use href="/icons-2.svg#icon-heart-black"></use>
                  </svg>
                )}
              </button>
            </div>

            {/* ----- на серце,  зірку,  карту поставити    -   svg   !!!!! */}
          </div>
          <div className={css.itemRewLocBox}>
            <p>
              <svg width={16} height={16}>
                <use href="/icons-2.svg#icon-star"></use>
              </svg>
              <span
                className={css.metaStat}
              >{`${camper.rating ?? 0}(${camper.reviews.length ?? 0} Reviews)`}</span>
            </p>
            <p>
              <svg width={20} height={20}>
                <use href="/icons.svg#icon-Map"></use>
              </svg>{' '}
              {camper.location}
            </p>
          </div>
          <p className={css.itemCampDescr}>{camper.description}</p>
          <div className={css.itemEquipBox}>
            {/*  якщо   true  показувати картинку  !!!!! */}
            <p className={css.itemEquipItem}>
              <svg width={20} height={20}>
                <use href="/icons.svg#icon-transmission"></use>
              </svg>{' '}
              {camper.transmission}
            </p>
            <p className={css.itemEquipItem}>
              <svg width={20} height={20}>
                <use href="/icons.svg#icon-engine"></use>
              </svg>{' '}
              {camper.engine}
            </p>
            {camper.AC === true && (
              <p className={css.itemEquipItem}>
                <svg width={20} height={20}>
                  <use href="/icons.svg#icon-AC"></use>
                </svg>{' '}
                AC
              </p>
            )}
            {camper.kitchen === true && (
              <p className={css.itemEquipItem}>
                <svg width={20} height={20}>
                  <use href="/icons.svg#icon-kitchen"></use>
                </svg>{' '}
                Kitchen
              </p>
            )}
            {camper.bathroom === true && (
              <p className={css.itemEquipItem}>
                <svg width={20} height={20}>
                  <use href="/icons.svg#icon-bathroom"></use>
                </svg>{' '}
                Bathroom
              </p>
            )}
            {camper.TV === true && (
              <p className={css.itemEquipItem}>
                <svg width={20} height={20}>
                  <use href="/icons.svg#icon-TV"></use>
                </svg>{' '}
                TV
              </p>
            )}
            {camper.radio === true && (
              <p className={css.itemEquipItem}>
                <svg width={20} height={20}>
                  <use href="/icons.svg#icon-radio"></use>
                </svg>{' '}
                Radio
              </p>
            )}
            {camper.refrigerator === true && (
              <p className={css.itemEquipItem}>
                <svg width={20} height={20}>
                  <use href="/icons.svg#icon-refrigerator"></use>
                </svg>{' '}
                Fridge
              </p>
            )}
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
