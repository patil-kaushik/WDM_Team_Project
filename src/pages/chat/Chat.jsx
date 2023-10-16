import InnerHeader from '../../components/innerHeader/InnerHeader'
import Sidebar from '../../components/sidebar/Sidebar'
import './chat.scss'

export default function Chat() {

    const people = [
        { key: 1, label: 'Student 1'},
        { key: 2, label: 'Student 2'},
        { key: 3, label: 'Instructor' },
        { key: 4, label: 'Program Coordinator' },
        { key: 5, label: 'Quality Assurance' },
    ];

    return (
        <div className='chat'>
            <InnerHeader />
            <div className="content">
                <Sidebar peoples={people} />
                <div className="main">
                
                    <div className="row"> 
                        <form action="">
                            <input type="text" placeholder='Enter message'/>
                            <button>Send Message</button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}
