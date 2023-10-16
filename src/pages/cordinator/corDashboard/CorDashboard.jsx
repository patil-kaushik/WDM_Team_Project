import './corDashboard.scss'
import InnerHeader from '../../../components/innerHeader/InnerHeader'
import Sidebar from '../../../components/sidebar/Sidebar'
import { Link } from 'react-router-dom';

export default function CorDashboard() {

    return (
        <div className='cor'>
            <InnerHeader />
            <div className="content">
                <div className="main">
                <p class="course-name">Program Coordinator Page</p>
                <div className="row">
                        <table id = "class">
                            <tr className="module">
                                <th className="modulesection">Guidance Provision Based on Performance of Students</th>
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
