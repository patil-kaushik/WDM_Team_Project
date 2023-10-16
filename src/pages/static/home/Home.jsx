import { Link } from 'react-router-dom'
import OuterHeader from '../../../components/outerHeader/OuterHeader'
import './home.scss'

export default function Home() {
  return (
    <>
        <OuterHeader />
        <div className="Container">
            <div className="videoContainer">
                <button className="videoButton" id="showVideoButton"><i className="fas fa-play play-icon"></i></button>
            </div>
            <div className="content" style={{backgroundColor :'#fff'}}>
                <div className="co">
                    <h1>Ignite Your Tech Here!</h1>
                    <p>The purpose of the graduate programs in Computer Science is to facilitate the student's continued professional and scholarly development. The Master of Science (M.S.) programs are designed to extend the student's knowledge and emphasize a particular area of concentration.</p>
                    <div className="buttonContainer">
                        <Link to='/'>
                            <button>Register Now</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
