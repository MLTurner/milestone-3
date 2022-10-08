import { useState } from 'react';
import { useSelector } from 'react-redux';

function NewReview() {
  const { user } = useSelector((state) => state.auth);
  const [name] = useState(user.name);
  const [email] = useState(user.email);
  const [category, setCategory] = useState('Bathroom');
  const [description, setDescription] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className='heading'>
        <h1>Create New Review</h1>
        <p>Please fill out the form below</p>
      </section>

      <section className='form'>
        <div className='form-group'>
          <label htmlFor='name'>Customer Name</label>
          <input type='text' classname='form-control' value={name} disabled />
        </div>
        <div className='form-group'>
          <label htmlFor='email'>Customer Email</label>
          <input type='text' classname='form-control' value={email} disabled />
        </div>
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <label htmlFor='category'>Category</label>
            <select
              name='category'
              id='category'
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value='Bathroom'>Bathroom</option>
              <option value='Service'>Service</option>
              <option value='Safety'>Safety</option>
              <option value='Hot Food'>Hot Food</option>
            </select>
          </div>
          <div className='form-group'>
            <label htmlFor='description'>
              Description of selected category
            </label>
            <textarea
              name='description'
              id='description'
              className='form-control'
              placeholder='description'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <div className='form-group'>
            <button className='btn btn-block'>Submit</button>
          </div>
        </form>
      </section>
    </>
  );
}

export default NewReview;
