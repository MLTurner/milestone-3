import { Link } from 'react-router-dom';
import { FaQuestionCircle, FaTicketAlt } from 'react-icons/fa';

function Home() {
  return (
    <>
      <section className="heading">
        <h1>How was your visit?</h1>
        <p>Please choose from an option below</p>
      </section>

      <Link to='/new-review' className='btn btn-reverse btn-block'>
        <FaQuestionCircle /> Create New Review
      </Link>

      <Link to='/reviews' className='btn btn-block'>
        <FaTicketAlt /> My Reviews
      </Link>
    </>
  );
}

export default Home;
