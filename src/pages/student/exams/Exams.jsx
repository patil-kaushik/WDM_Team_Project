import './exams.scss'
import InnerHeader from '../../../components/innerHeader/InnerHeader'

export default function Exams() {
  return (
    <div className='exams'>
        <InnerHeader />
        <div className="content-bar1">
            <div className="content">
                <div className="container">
                    <h1>Exams</h1>
                    <div className="card">
                        <div className="tile">
                            <h3 className="quiz">Question 1</h3>
                            <div className="tile-content">
                                <div className="q-section">
                                    <div className="qs">
                                        <input readOnly placeholder="What are the benefits of using https over http?" className="input"/>
                                    </div>
                                    <textarea className="w-full" placeholder="Write your answer here"></textarea>
                                </div>
                            </div>
                       </div>
                        <div className="tile">
                            <h3 className="quiz">Question 2</h3>
                            <div className="tile-content">
                                <div className="q-section">
                                    <div className="qs">
                                        <input readOnly placeholder="Which Protocol is used in transport layer?" className="input"/>
                                    </div>
                                    <div className="cols">
                                        <div className="col">
                                            <div className="select">
                                                <label for="">Option 1</label>
                                                <input readOnly type="checkbox"/>
                                            </div>
                                            <div className="flex select">
                                                <label for="">Option 2</label>
                                                <input readOnly type="checkbox"/>
                                            </div>
                                            <div className="flex select">
                                                <label for="">Option 3</label>
                                                <input readOnly type="checkbox"/>
                                            </div>
                                            <div className="flex select">
                                                <label for="">Option 4</label>
                                                <input readOnly type="checkbox"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>    
                            </div>
                        </div>
                       
                        <div className="tile">
                            <h3 className="quiz">Question 3</h3>
                            <div className="tile-content">
                                <div className="q-section">
                                    <div className="qs">
                                        <input readOnly placeholder="Is 64-bit IP address used now?" className="input"/>
                                    </div>
                                    <div className="cols">
                                        <div className="col">
                                            <div className="flex choice">
                                                <label for="">True</label>
                                                <input readOnly type="checkbox"/>
                                            </div>
                                            <div className="flex choice">
                                                <label for="">False</label>
                                                <input readOnly type="checkbox"/>
                                            </div>
                                        </div>
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
