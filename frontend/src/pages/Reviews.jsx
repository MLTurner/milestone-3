import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getReviews, reset } from '../features/reviews/reviewSlice';
import Spinner from '../components/Spinner';
import BackButton from '../components/BackButton';
import ReviewItem from '../components/ReviewItem';

function Reviews() {
  const { reviews, isLoading, isSuccess } = useSelector((state) => state.reviews)


  const dispatch = useDispatch()


  useEffect(() => {
    return () => {
      if(isSuccess) {
        dispatch(reset())
      }
    }
  }, [dispatch, isSuccess])


  useEffect(() => {
    dispatch(getReviews())
  }, [dispatch])


  if(isLoading) {
    return <Spinner />
  }


  return (
    <>
      <BackButton url='/' />
      <h1>Reviews</h1>
      <div className='reviews'>
        <div className="review-headings">
          <div>Date</div>
          <div>Category</div>
          <div>Status</div>
          <div></div>
        </div>
        {reviews.map((review) => (
          <ReviewItem key={review._id} review={review} />
        ))}
      </div>
    </>
  )
}

export default Reviews