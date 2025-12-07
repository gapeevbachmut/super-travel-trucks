import { Camper } from "@/types/camper";
import css from "./Features.module.css";

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
        <div className={css.featureItem}>
          <span className={css.featureIcon}>⚙️</span>
          <span>{camper.transmission}</span>
        </div>

        <div className={css.featureItem}>
          <span className={css.featureIcon}>❄️</span>
          <span>{camper.AC}</span>
        </div>

        <div className={css.featureItem}>
          <span className={css.featureIcon}>⛽</span>
          <span>{camper.engine}</span>
        </div>

        <div className={css.featureItem}>
          <span className={css.featureIcon}>☕</span>
          <span>{camper.kitchen}</span>
        </div>

        <div className={css.featureItem}>
          <span className={css.featureIcon}>📻</span>
          <span>{camper.radio}</span>
        </div>
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
