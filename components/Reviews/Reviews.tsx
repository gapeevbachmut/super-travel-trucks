import { Camper } from '@/types/camper';
import css from './Reviews.module.css';

type Props = { camper: Camper };

const Reviews = ({ camper }: Props) => {
  return (
    <div className={css.reviewWrapper}>
      <ul className={css.reviewList}>
        {camper.reviews.map((review, index) => (
          <li key={index} className={css.reviewCard}>
            <div className={css.reviewBox}>
              <div className={css.nameAvatar}>
                {review.reviewer_name.charAt(0).toUpperCase()}
              </div>
              <div className={css.wrapperNameStar}>
                <p className={css.name}>{review.reviewer_name}</p>
                <div className={css.stars}>
                  {Array.from({ length: 5 }).map((_, i) => {
                    const diff = (review.reviewer_rating ?? 0) - i;
                    return diff > 0 ? (
                      <svg key={i} width={16} height={16}>
                        <use href="/icons-2.svg#icon-star"></use>
                      </svg>
                    ) : (
                      <svg key={i} width={16} height={16}>
                        <use href="/icons-2.svg#icon-star-empty"></use>
                      </svg>
                    );
                  })}
                </div>
              </div>
            </div>

            <p className={css.comment}>{review.comment}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
