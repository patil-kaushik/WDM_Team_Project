import './forgot.scss'
import OuterHeader from '../../../components/outerHeader/OuterHeader'
import { Link } from 'react-router-dom'

export default function Forgot() {
  return (
    <div className='forgot'>
        <OuterHeader />
        <div className="content">
            <form >
                <h1 class="h1"> Forgot Password!</h1>
                <div class="input-row">
                    <input class="email" type="email" placeholder="Email"/>
                </div>
               
                <button type="button">Reset Password</button>
            </form>
        </div>
    </div>
  )
}
