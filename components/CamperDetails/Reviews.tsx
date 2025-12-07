import { Camper } from "@/types/camper";

type Props = { camper: Camper };

const Reviews = ({ camper }: Props) => {
  return (
    <div>
      <div>
        <p>{camper.id}</p>
      </div>
      <div>
        {camper.reviews.map((review, index) => (
          <div key={index}>
            <h4>{review.reviewer_name}</h4>
            <p>⭐ {review.reviewer_rating}</p>
            <p>{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
