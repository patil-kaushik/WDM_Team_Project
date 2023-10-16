import "./register.scss"
import OuterHeader from "../../../components/outerHeader/OuterHeader"
import { Link } from "react-router-dom"
import axios from "axios"
import { useState } from "react"

const Register = () => {

    

    const handleChange = e =>{
    }

    const handleClick = async e => {
        e.preventDefault();
        
        // const type = document.querySelector('select[name="type"]').value;

        // const userData = {
        //   fname: inputs.fname,
        //   lname: inputs.lname,
        //   email: inputs.email,  
        //   password: inputs.password,
        //   regcode: inputs.regcode,
        //   type
        // };
      
        // try {
        //   await axios.post("http://localhost:8800/api/auth/register", userData);
        //   window.location.href='/'
        // } catch (err) {
        //   setErr(err.response.data);
        // }
    }

    return (
        <div className="register">
            <OuterHeader />
            <div className="content">
                <form className="register_form" >
                    <h1 className="h1">Welcome!</h1>
                    <div className="input-row">
                        <input className="email" name="email" onChange={handleChange} type="email" placeholder="Email"/>
                        <input className="password" name="password" onChange={handleChange} type="password" placeholder="Your Password"/>
                    </div>
                    <div className="input-row">
                        <input className="FirstName" name="fname" onChange={handleChange} type="text" placeholder="First Name"/>
                        <input className="LastName" name="lname" onChange={handleChange} type="text" placeholder="Last Name"/>
                    </div>
                    <div className="input-row">
                        <select name="type" onChange={handleChange}>
                            <option value="Student">Student</option>
                            <option value="Instructor">Instructor</option>
                        </select>
                        <input className="RegistrationCode" name="regcode" onChange={handleChange} type="text" placeholder="Registration Code"/>
                    </div>
                    <button type="button" className="button1" onClick={handleClick}>register</button>
                    <div className="divider"> or </div>
                    <div className="button-container">
                        <Link to="/login">
                            <button type="button" >Login Here</button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register;
