const Reviews = () => {
  return <h1>Reviews</h1>;
};

export default Reviews;

//  Reviews
// •	Якщо бекенд не має endpoint для відгуків, можна:
// o	або запросити /campers/:id/reviews (якщо є),
// o	або додати тимчасові локальні (mock) відгуки в state.
// •	Формат відгуків: { id, author, rating: number (1-5), comment, date }.
