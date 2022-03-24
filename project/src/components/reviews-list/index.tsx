import ReviewsItem from '../reviews-item';
import  { ReviewsUser } from '../../types/reviews';

type ReviewsListProps = {
  reviews: ReviewsUser
}
export default function ReviewsList({reviews}:ReviewsListProps): JSX.Element {
  return (
    <ul className="reviews__list">
      {reviews.map((item)=>(
        <ReviewsItem
          key={item.id}
          review={item}
        />
      ))}
    </ul>
  );
}
