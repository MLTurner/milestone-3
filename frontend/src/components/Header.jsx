import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      {/* Marissa's header code here */}
      <header className='heaer'>
        <div className='logo'>
          <Link to='/'>Smelp App</Link>
        </div>
        <ul>
          <li>
            <Link to='/login'>
              <FaSignInAlt /> Login
            </Link>
          </li>
          <li>
            <Link to='/register'>
              <FaUser /> Register
            </Link>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default Header;
