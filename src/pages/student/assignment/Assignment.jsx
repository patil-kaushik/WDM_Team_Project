import './assignment.scss'
import InnerHeader from '../../../components/innerHeader/InnerHeader'

export default function Assignment() {
  return (
    <div className='assignment'>
        <InnerHeader />
        <div className="content-bar1">
            <div className="content">
                <div className="container">
                    <h1>Assignment</h1>
                    <div className="card">
                        <div className="tile">
                            <h3 className="quiz">Assignment 1</h3>
                            <div className="tile-content">
                                <div className="q-section">
                                    <div className="qs">
                                        <input readOnly placeholder="Kindly submit in pdf file" className="input"/>
                                    </div>
                                    <div className="qs">
                                        <input type='file' placeholder="What are the benefits of using https over http?" className="input"/>
                                    </div>
                                </div>
                            </div>
                       </div>
                    </div>
                   <button onclick="location.href='./student-assignments.html'">Submit</button>
                </div>
            </div>
        </div>
    </div>
  )
}
