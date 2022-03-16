
type ReviewsRatingProps = {
  value: number,
  rating: number,
  setRating: (rating: number) => void,
}
export default function ReviewsRating({value, rating, setRating}:ReviewsRatingProps) {

  return (
    <>
      <input className="form__rating-input visually-hidden" onChange={() => setRating(value)} name="rating" value={value} id={`${value}-stars`} type="radio" checked={value === rating}/>
      <label htmlFor={`${value}-stars`} className="reviews__rating-label form__rating-label" title="not bad">
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </>
  );
}

