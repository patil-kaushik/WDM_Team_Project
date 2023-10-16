import './dashboard.scss'
import InnerHeader from '../../../components/innerHeader/InnerHeader'
import Sidebar from '../../../components/sidebar/Sidebar'

export default function Dashboard() {

    return (
        <div className='dashboard'>
            <InnerHeader />
            <div className="content">
                <div className="main">
                <p className="course-name">Web Data Management</p>

                    <div className="row">
                        <table id = "class">
                            <tr>
                                <td>Instructor Name:</td>
                                <td>Dr. Jefferson</td>
                            </tr>
                            <tr>
                                <td>Class Timmings: </td>
                                <td>3:00 pm to 4:20 pm</td>
                            </tr>
                            <tr>
                                <td>Meeting location: </td>
                                <td>Building SIER, 301</td>
                            </tr>
                            <tr>
                                <td>Mode: </td>
                                <td>IN person</td>
                            </tr>
                        </table>
                    </div>
                    <div className="row">
                        <p>Recommended Textboox: Fundamentals of Web Development, 3rd Edition, Randy Connolly, Ricardo Hoar.</p>
                    </div>
                    <div className="row">
                        <h2>Syllabus</h2>
                    </div>
                    <div className="row">
                        <table id = "class">
                            <tr>
                                <th>Content Name</th>
                                <th>Date</th>
                            </tr>
                            <tr>
                            <td>Chapter 1</td>
                            <td>Auguast 22, 2023</td>
                            </tr>
                            <tr>
                                <td>Chapter 2</td>
                                <td>Auguast 24, 2023</td>
                            </tr>
                            <tr>
                                <td>Chapter 3</td>
                                <td>Auguast 29, 2023</td>
                            </tr>
                            <tr>
                                <td>Chapter 4</td>
                                <td>Auguast 31, 2023</td>
                            </tr>
                
                        </table>
                    </div>

                    <div className="row">
                        <table id = "class">
                            <tr>
                                <td colSpan={3} style={{textAlign: 'center'}}><h2>Exams</h2></td>
                            </tr> 
                            <tr className="module">
                                <th>Name</th>
                                <th>    Action</th>
                            </tr>
                            <tr className="module">
                                <td><p >Networking Exams</p></td>
                                <td>
                                    <a href="/student/exams">Attempt Exam</a>
                                </td>
                            </tr>
                            <tr className="module">
                                <td><p >Web Management Exams</p></td>
                                <td>
                                    <a href="/student/exams">Attempt Exam</a>
                                </td>
                            </tr>
                        </table>
                    </div>

                    <div className="row"> 
                        <table id = "class">
                            <tr>
                                <td colSpan={3} style={{textAlign: 'center'}}><h2>Assignments</h2></td>
                            </tr> 
                            <tr className="module">
                                <th>Task</th>
                                <th>Status</th>
                                <th>Due Date</th>
                            </tr>
                            <tr className="module">
                                <td><a href="/student/assignment">Assignemnt 1</a></td>
                                <td>Graded</td>
                                <td>September 12, 2023</td>
                            </tr>
                            <tr className="module">
                                <td><a href="/student/assignment">Assignemnt 2</a></td>
                                <td>Not submitted</td>
                                <td>October 1, 2023</td>
                            </tr>
                        </table>
                    </div>

                    <div className="row">
                        <table id = "class">
                            <tr className="module">
                                <td colSpan={3} style={{textAlign: 'center'}}><h2>Result</h2></td>
                            </tr> 
                            <tr className="module">
                                <th>Task</th>
                                <th>Grade</th>
                                <th>Comment</th>
                            </tr>
                            <tr className="module">
                                <td>Assignemnt 1</td>
                                <td>20/20</td>
                                <td>NO Comments</td>
                            </tr>
                            <tr className="module">
                                <td>Assignemnt 2</td>
                                <td>20/20</td>
                                <td>NO Comments</td>
                            </tr>
                            <tr className="module"> 
                                <td>Exams 1</td>
                                <td>20/20</td>
                                <td>NO Comments</td>
                            </tr>
                            <tr className="module">
                                <td>Exams 2</td>
                                <td>20/20</td>
                                <td>NO Comments</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
