import './outerHeader.scss'
import { Link } from 'react-router-dom'

export default function () {
  return (
    <div>
        <header className='top-bar'>
            <h3 className="logo">MSC</h3>
            <div className="links">
                <Link to='/about'>
                  About us
                </Link>
                <Link to='/services'>
                  Services
                </Link>
                <Link to='/contact'>
                  Contact
                </Link>
                <Link to='http://agp3618.uta.cloud/'>
                  Blog
                </Link>
            </div>
            <Link to="/login">
                <button>Login</button>
            </Link>
        </header>
    </div>
  )
}
