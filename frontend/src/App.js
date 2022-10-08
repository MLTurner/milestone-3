import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// ref: https://www.npmjs.com/package/react-toastify
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import NewReview from './pages/NewReview';
import Reviews from './pages/Reviews';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <>
      <Router>
        <div className='container'>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/new-review' element={<PrivateRoute />}>
              <Route path='/new-review' element={<NewReview />} />
            </Route>
            <Route path='/reviews' element={<PrivateRoute />}>
              <Route path='/reviews' element={<Reviews />} />
            </Route>
          </Routes>
        </div>
      </Router>
      <ToastContainer />      
    </>
  );
}

export default App;
