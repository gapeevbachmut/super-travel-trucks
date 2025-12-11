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
//////////////////////////////////////////////////
//  <ul className={css.reviewList}>
//    {reviews.map((item: CamperReview, index) => {
//      return (
//        <li key={item.reviewer_name + index} className={css.reviewCard}>
//          <div className={css.reviewHeader}>
//            <div className={css.avatar}>
//              {item.reviewer_name.charAt(0).toUpperCase()}
//            </div>

//            <div className={css.headerInfo}>
//              <p className={css.name}>{item.reviewer_name}</p>

//              <div className={css.stars}>
//                {Array.from({ length: 5 }).map((_, i) => {
//                  const diff = (item.reviewer_rating ?? 0) - i;
//                  return diff > 0 ? (
//                    <IconComponent key={i} name="star-filled" size={16} />
//                  ) : (
//                    <IconComponent key={i} name="star" size={16} />
//                  );
//                })}
//              </div>
//            </div>
//          </div>

//          <p className={css.comment}>{item.comment}</p>
//        </li>
//      );
//    })}
//  </ul>;
