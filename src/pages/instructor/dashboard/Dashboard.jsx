import './dashboard.scss'
import InnerHeader from '../../../components/innerHeader/InnerHeader'
import Sidebar from '../../../components/sidebar/Sidebar'
import { Link } from 'react-router-dom';

export default function Dashboard() {

    return (
        <div className='instructor'>
            <InnerHeader />
            <div className="content">
                <div className="main">
                <p className="course-name">Instructor Page</p>

                    <div className="row">
                        <table id = "class">
                            <tr className="module">
                                <th className="modulesection">Create Course</th>
                            </tr>
                        </table>
                    </div>
                    <div className="row">
                        <div className="message-board">                
                            <div className="message-input">
                                <input type="text" placeholder="Course Name" />
                                <input type="text" placeholder="Professor Name" />
                                <input type="text" placeholder="Objective" />
                            </div>
                            <div style={{paddingTop: '20px;', display: 'flex', width: '100%', justifyContent: 'center'}}>
                                <button className="message-input">Create</button>
                            </div>
                        </div>
                    </div>

                    <div className="row"> 
                        <table id = "class">
                            <tr>
                                <th>Course Name</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                            <tr>
                                <td>Web Development</td>
                                <td>September 12, 2023</td>
                                <td><a href="#">Delete</a> <a href="#">Edit</a></td>
                            </tr>
                        </table>
                    </div>

                    <div className="row">
                        <table id = "class">
                            <tr className="module">
                                <th className="modulesection">Progress Tracking and Feedback to Students</th>
                            </tr>
                        </table>
                    </div>

                    <div className="row"> 
                        <table id = "class">
                            <tr>
                                <th>Student Name</th>
                                <th>Score</th>
                                <th>Action</th>
                            </tr>
                            <tr>
                                <td>John Doe</td>
                                <td>80%</td>
                                <td><a href="#">Give Feedback</a></td>
                            </tr>
                            <tr>
                                <td>John Doe</td>
                                <td>80%</td>
                                <td><a href="#">Give Feedback</a></td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
