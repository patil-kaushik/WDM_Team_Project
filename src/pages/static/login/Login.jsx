import './login.scss'
import OuterHeader from '../../../components/outerHeader/OuterHeader'
import { Link } from 'react-router-dom'
import { useState } from 'react';

export default function Login() {

    const [inputs, setInputs] = useState({
        email: '',
        password: ''
    })

    const handleChange = e =>{
        setInputs(prevState=> ({...prevState,[e.target.name]:e.target.value}))
    }



    const handleLogin = async (e) => {
        
    }

    return (
        <div className='login'>
            <OuterHeader />
            <div className="content">
                <h1 className="hhh" >Login</h1>

                <form className="login_form" >

                    <input type="email" placeholder="Email" name="email" className="input" onChange={handleChange} required/><br/><br/>
                    
                    <input type="password" placeholder="Password" name="password" className="input" onChange={handleChange} required/><br/><br/>

                    <button type="button" className="button1" onClick={handleLogin}>Login</button>
                <div className="divider"> or </div>
                <div className="button-container">
                    <Link to='/register'>
                        <button type="button" >Register Here</button>
                    </Link>
                    <Link to='/forgot'>
                        <button type="button" >Forgot Password?</button>
                    </Link>
                </div>
                </form>
            </div>
        </div>
    )
}
