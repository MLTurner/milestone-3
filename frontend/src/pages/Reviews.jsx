import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getReviews, reset } from '../features/reviews/reviewSlice';
import Spinner from '../components/Spinner';
import BackButton from '../components/BackButton';

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
    <div>
      <h1>Reviews Page</h1>
    </div>
  )
}

export default Reviews