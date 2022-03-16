import ReviewsRating from '../reviews-rating';
import { useState } from 'react';

export default function PropertyReviewForm(): JSX.Element {
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(0);

  const stars = [1,2,3,4,5];
  return(
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {stars.reverse().map((el)=>(
          <ReviewsRating
            key={el}
            setRating={setRating}
            value={el}
            rating={rating}
          />
        ))}
      </div>
      <textarea className="reviews__textarea form__textarea" id="review" onChange={(evt) => setReview(evt.target.value)} value={review} name="review" placeholder="Tell how was your stay, what you like and what can be improved"></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled>Submit</button>
      </div>
    </form>
  );
}

