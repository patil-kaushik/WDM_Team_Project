import './about.scss'
import OuterHeader from '../../../components/outerHeader/OuterHeader'
import img1 from '../../../assets/pexels-andrea-piacquadio-3807755.jpg'
import { Link } from 'react-router-dom'
export default function About() {
  return (
    <div>
        <OuterHeader />
        <div className="about">
            <div className="container">
                <div className="image">
                    <img src={img1} alt="" />
                </div>
                <div className="text">
                    <h1>Academic Program</h1>
                    <p>Our Master's in Computer Science program is committed to delivering an outstanding educational journey in the realm of computer science. Through a challenging curriculum, accomplished faculty, and cutting-edge resources, we equip our students to thrive in the ever-evolving landscape of technology.</p>
                </div>
            </div>
            <div className="container2">
                <h1>Program Objectives</h1>
                <div className="bar"></div>
                <div className="itemsListing">
                    <div className="bar"></div>
                    <div className="item">
                        <div className="itemTitle">Research and Innovation</div>
                        <div className="itemDescription">
                            Prepare students to engage in cutting-edge research and contribute to the advancement of computer science through original research projects, publications, and presentations.
                        </div>
                    </div>
                    <div className="item">
                        <div className="itemTitle">Critical Problem Solving</div>
                        <div className="itemDescription">
                            Graduates will be able to analyze complex problems in computer science, identify efficient and innovative solutions, and apply critical thinking to evaluate their approaches.
                        </div>
                    </div>
                    <div className="item">
                        <div className="itemTitle">Global Perspective</div>
                        <div className="itemDescription">
                            Encourage an understanding of the global context in which computer science operates, enabling graduates to work in diverse international environments and consider global issues in their work.
                        </div>
                    </div>
                    <div className="item">
                        <div className="itemTitle">Industry Relevance</div>
                        <div className="itemDescription">
                            With a robust curriculum, experienced faculty, and access to state-of-the-art resources, we empower our students to excel in the dynamic and ever-evolving world of technology.
                        </div>
                    </div>
                </div>
            </div>
            <div className="buttonContainer">
                <Link to='/'>
                    <button className="roundedButton">Courses offered</button>
                </Link>
            </div>
        </div>
    </div>
  )
}
