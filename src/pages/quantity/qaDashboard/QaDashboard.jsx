import './qaDashboard.scss'
import InnerHeader from '../../../components/innerHeader/InnerHeader'
import Sidebar from '../../../components/sidebar/Sidebar'
import { Link } from 'react-router-dom';

export default function QaDashboard() {
    
    return (
        <div className='qa'>
            <InnerHeader />
            <div className="content">
                <div className="main">

                    <div className="row">
                        <table id = "class">
                            <tr className="module">
                                <th className="modulesection">Provide quality assurance processes and policies for overall users</th>
                            </tr>
                        </table>
                    </div>

                    <div className="row">
                        <div className="message-board">                
                            <div className="message-input">
                                <input type="text" placeholder="Process or Policy Topic" />
                                <input type="text" placeholder="Details" />
                            </div>
                            <div className='button' style={{paddingTop: '20px'}}>
                                <button className="message-input">Post</button>
                            </div>
                        </div>
                    </div>
                    <p > Manage Quality Assurance Policies and Processes</p>
                    <div className="row"> 
                        <table id = "class">
                            <tr>
                                <th>Topic</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                            <tr>
                                <td>Mode of Teaching</td>
                                <td><a href="#">Edit</a></td>
                                <td><a href="#">Remove</a></td>
                            </tr>
                            <tr>
                                <td>Exams Policies</td>
                                <td><a href="#">Edit</a></td>
                                <td><a href="#">Remove</a></td>
                            </tr>
                        </table>
                    </div>

                    <div className="row">
                        <table id = "class">
                            <tr className="module">
                                <th className="modulesection">Provide Recommendations to Instructors</th>
                            </tr>
                        </table>
                    </div>

                    <div className="row">
                        <div className="message-board">                
                            <div className="message-input">
                                <input type="text" placeholder="Recommendation Topic" />
                                <input type="text" placeholder="Details" />
                            </div>
                            <div className='button' style={{paddingTop: '20px'}}>
                                <button className="message-input">Provide Recommendation</button>
                            </div>
                        </div>
                    </div>
                    <p > Manage Recommendations</p>
                    <div className="row"> 
                        <table id = "class">
                            <tr>
                                <th>Topic</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                            <tr>
                                <td>Mode of Teaching</td>
                                <td><a href="#">Edit</a></td>
                                <td><a href="#">Remove</a></td>
                            </tr>
                            <tr>
                                <td>Exams Policies</td>
                                <td><a href="#">Edit</a></td>
                                <td><a href="#">Remove</a></td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
