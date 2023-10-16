import './profile.scss'
import InnerHeader from '../../components/innerHeader/InnerHeader'

export default function Profile() {
  return (
    <div className='profile'>
        <InnerHeader />
        <div className="content">
            <div className="main">
                <div className="container" style={{maxHeight: "none"}}>
                    <div className="profile-info">
                        <a href="profile-edit.html">
                            <span id="icon" style={{height: "20px", width: "20px", display: "inline-flex", marginLeft: "95%"}}>
                                <img src="../StaticFiles/Media/pen-to-square-regular.svg" />
                            </span>
                        </a>
                        
                        <div className="profile-image">RK</div>
                        <div className="profile-name">Rahul Kumar</div>
                        <div className="profile-details">
                            <p>Email: profile@uta.com</p>
                            <p>Location: Arlington</p>
                            <p>User Type: Profile</p>
                        </div>
                        <div className="profile-details">
                            <p>Bio: <br /> More Information on Profile</p>
                            <br />
                            <p>Prefered Contact Information: <br />
                                <ul>
                                    <li>Phone: +1 9876543210</li>
                                    <li>Email: Profile@uta.com</li>
                                    <li>Socail Media: linkedin.com/Profile</li>
                                </ul>
                            </p>
                            <br />
                            <p>Past Courses: <br />
                                <ul>
                                    <li>1. Design Modeling and Analysis Techniques</li>
                                    <li>2. Design and Analysis of Algorithms</li>
                                    <li>3. Discret Mathematics</li>
                                </ul>
                                </p>
                        </div>
                    </div>
                    <button onclick="location.href='/'">Back to Home</button>
                </div>
            </div>
        </div>
    </div>
  )
}
