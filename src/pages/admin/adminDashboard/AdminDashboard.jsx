import './adminDashboard.scss'
import InnerHeader from '../../../components/innerHeader/InnerHeader'
import Sidebar from '../../../components/sidebar/Sidebar'
import { Link } from 'react-router-dom';

export default function AdminDashboard() {

    return (
        <div className='admin'>
            <InnerHeader />
            <div className="content">
                <div className="main">
                <span className="course-name" >Administrator Page</span>

                    <p > Manage Students and Their Permissions</p>
                    <div className="row"> 
                        <table id = "class">
                            <tr>
                                <th>Student Name</th>
                                <th>Update Permission</th>
                                <th>Manage User</th>
                            </tr>
                            <tr>
                                <td>John Doe</td>
                                <td><a href="#">Block</a></td>
                                <td><a href="#">Remove</a></td>
                            </tr>
                            <tr>
                                <td>Ravi Kumar</td>
                                <td><a href="#">Unblock</a></td>
                                <td><a href="#">Remove</a></td>
                            </tr>
                        </table>
                    </div>

                    <p > Manage Instructors and Their Permissions</p>
                    <div className="row"> 
                        <table id = "class">
                            <tr>
                                <th>Instructor Name</th>
                                <th>Update Permission</th>
                                <th>Manage User</th>
                            </tr>
                            <tr>
                                <td>Sir John Doe</td>
                                <td><a href="#">Block</a></td>
                                <td><a href="#">Remove</a></td>
                            </tr>
                            <tr>
                                <td>Prof. Ravi Kumar</td>
                                <td><a href="#">Unblock</a></td>
                                <td><a href="#">Remove</a></td>
                            </tr>
                        </table>
                    </div>

                    <p > Manage Coordinators and Their Permissions</p>
                    <div className="row"> 
                        <table id = "class">
                            <tr>
                                <th>Coordinator Name</th>
                                <th>Update Permission</th>
                                <th>Manage User</th>
                            </tr>
                            <tr>
                                <td>Sir John Doe</td>
                                <td><a href="#">Block</a></td>
                                <td><a href="#">Remove</a></td>
                            </tr>
                            <tr>
                                <td>Prof. Ravi Kumar</td>
                                <td><a href="#">Unblock</a></td>
                                <td><a href="#">Remove</a></td>
                            </tr>
                        </table>
                    </div>

                    <p > Manage QA and Their Permissions</p>
                    <div className="row"> 
                        <table id = "class">
                            <tr>
                                <th>QA Name</th>
                                <th>Update Permission</th>
                                <th>Manage User</th>
                            </tr>
                            <tr>
                                <td>Sir John Doe</td>
                                <td><a href="#">Block</a></td>
                                <td><a href="#">Remove</a></td>
                            </tr>
                            <tr>
                                <td>Prof. Ravi Kumar</td>
                                <td><a href="#">Unblock</a></td>
                                <td><a href="#">Remove</a></td>
                            </tr>
                        </table>
                    </div>

                    <p > Users Activity</p>
                    <div className="row"> 
                        <table id = "class">
                            <tr>
                                <td colSpan="3">Last 5 activities will be displayed only, else view database</td>
                            </tr>
                            <tr>
                                <th>User Name</th>
                                <th>Role</th>
                                <th>Last Login</th>
                            </tr>
                            <tr>
                                <td>John Doe</td>
                                <td>Student</td>
                                <td>10-13-2023</td>
                            </tr>
                            <tr>
                                <td>Prof. Ravi Kumar</td>
                                <td>Instructor</td>
                                <td>09-10-2023</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
