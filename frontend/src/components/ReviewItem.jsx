import { Link } from 'react-router-dom'


function ReviewItem({review}) {
  return (
    <div className='review'>
      <div>{new Date(review.createdAt).toLocaleString('en-US')}</div>
      <div>{review.category}</div>
      <div className={`status status-${review.status}`}>
        {review.status}
      </div>
      <Link to={`/review/${review._id}`} className='btn btn-reverse btn-sm'>
        View
      </Link>
    </div>
  )
}

export default ReviewItem
