import './services.scss'
import OuterHeader from '../../../components/outerHeader/OuterHeader'
import { Link } from 'react-router-dom'

export default function Services() {
  return (
    <div>
        <OuterHeader />
        <div className="services">
            <div className="content">
                <div className="text">
                    <h1>Services at MSC</h1>
                    <p>MSC offers a wide range of services and products to students, faculty, staff, and researchers to achieve their academic success.</p>
                    <p>Choose a category on the right to get a high-level overview of our services and see some of our Featured Services.</p>
                    <p>If you need some information that is not listed here, feel free to contact our Help Desk by clicking this 
                        <Link>
                            page {/*  contact */}
                        </Link>.
                    </p>
                </div>
            </div>
            <div className="category">
                <div className="links">
                    <h2>Quick Links</h2>
                    <p>Home</p>
                    <p>About</p>
                    <p>Contact</p>
                </div>
                <div className="featured">
                    <h2>Featured Services</h2>
                    <div class="category1">
                        <h3>Students</h3>
                        <p>Wide Range of Courses</p>
                        <p>Assessment and Feedback</p>
                        <p>Online Course Development</p>
                    </div>
                    
                    <div class="category2">
                        <h3>Instructors</h3>
                        <p>Technology Training</p>
                        <p>Course Development</p>
                        <p>Training and Workshops</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}
