import './innerHeader.scss'
import { Link } from 'react-router-dom'

export default function () {
  return (
      <header className='top-bar'>
          <h3 className="logo">MSC</h3>
          <div className="links">
            <Link to='/profile'>
                Profile
            </Link>
            <Link to='/chat'>
                Chat
            </Link>
            </div>
          <Link to="/login">
              <button>Logout</button>
          </Link>
      </header>
  )
}
