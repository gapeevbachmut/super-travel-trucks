import { Camper } from "@/types/camper";
import css from "./Reviews.module.css";

type Props = { camper: Camper };

const Reviews = ({ camper }: Props) => {
  return (
    <div className={css.reviewWrapper}>
      <div>
        {camper.reviews.map((review, index) => (
          <div key={index}>
            <p className={css.name}>{review.reviewer_name}</p>
            <p>⭐ {review.reviewer_rating}</p>
            <p className={css.comment}>{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
