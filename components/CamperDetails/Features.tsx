import { Camper } from '@/types/camper';
import css from './Features.module.css';

type Props = { camper: Camper };

const Features = ({ camper }: Props) => {
  return (
    // <div>
    //   <h1>Features</h1>
    //   <p>{camper.form}</p>
    //   <p>🚗 {camper.transmission}</p>
    //   <p>⛽{camper.engine}</p>
    // </div>
    <div className={css.detailsWrapper}>
      <div className={css.featuresList}>
        {/*  якщо   true  показувати картинку  !!!!! */}
        <p className={css.featureItem}>
          <svg width={20} height={20}>
            <use href="/icons.svg#icon-transmission"></use>
          </svg>{' '}
          {camper.transmission}
        </p>
        <p className={css.featureItem}>
          <svg width={20} height={20}>
            <use href="/icons.svg#icon-engine"></use>
          </svg>{' '}
          {camper.engine}
        </p>
        {camper.AC === true && (
          <p className={css.featureItem}>
            <svg width={20} height={20}>
              <use href="/icons.svg#icon-AC"></use>
            </svg>{' '}
            AC
          </p>
        )}
        {camper.kitchen === true && (
          <p className={css.featureItem}>
            <svg width={20} height={20}>
              <use href="/icons.svg#icon-kitchen"></use>
            </svg>{' '}
            Kitchen
          </p>
        )}
        {camper.bathroom === true && (
          <p className={css.featureItem}>
            <svg width={20} height={20}>
              <use href="/icons.svg#icon-bathroom"></use>
            </svg>{' '}
            Bathroom
          </p>
        )}
        {camper.TV === true && (
          <p className={css.featureItem}>
            <svg width={20} height={20}>
              <use href="/icons.svg#icon-TV"></use>
            </svg>{' '}
            TV
          </p>
        )}
        {camper.radio === true && (
          <p className={css.featureItem}>
            <svg width={20} height={20}>
              <use href="/icons.svg#icon-radio"></use>
            </svg>{' '}
            Radio
          </p>
        )}
        {camper.refrigerator === true && (
          <p className={css.featureItem}>
            <svg width={20} height={20}>
              <use href="/icons.svg#icon-refrigerator"></use>
            </svg>{' '}
            Fridge
          </p>
        )}
      </div>
      {/* /////////////////////////////////////////////////////////// */}
      <div>
        <h3 className={css.detailsTitle}>Vehicle details</h3>
        <hr className={css.line} />

        <div className={css.specsTable}>
          <div className={css.specRow}>
            <span className={css.specLabel}>Form</span>
            <span className={css.specValue}>{camper.form}</span>
          </div>
          <div className={css.specRow}>
            <span className={css.specLabel}>Length</span>
            <span className={css.specValue}>{camper.length}</span>
          </div>
          <div className={css.specRow}>
            <span className={css.specLabel}>Width</span>
            <span className={css.specValue}>{camper.width}</span>
          </div>
          <div className={css.specRow}>
            <span className={css.specLabel}>Height</span>
            <span className={css.specValue}>{camper.height}</span>
          </div>
          <div className={css.specRow}>
            <span className={css.specLabel}>Tank</span>
            <span className={css.specValue}>{camper.tank}</span>
          </div>
          <div className={css.specRow}>
            <span className={css.specLabel}>Consumption</span>
            <span className={css.specValue}>{camper.consumption}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
