import './contact.scss'
import OuterHeader from '../../../components/outerHeader/OuterHeader'

export default function Contact() {
  return (
    <div className='contact'>
        <OuterHeader />
        <div className="content">
            <h1 className="hhh" >Contact Us</h1>
            <p>Have a question or need assistance? Fill out the form below to get in touch with us.</p>

            <form className="contact_form" >

                <label for="name">Name:</label>
                <input type="text" placeholder="Name" name="name" className="input" required/><br/><br/>
                <label for="email">Email:</label>
                <input type="email" placeholder="Email" name="email" className="input" required/><br/><br/>

                <label for="subject">Subject:</label>
                <input type="text" placeholder="Subject" name="subject" className="input" required/><br/><br/>

                <label for="message">Message:</label><br/>
                <textarea placeholder="Type Here" name="message" rows="4" cols="50" className="input" required></textarea><br/><br/>

                <input type="submit"  value="Submit"/>
            </form>
        </div>
    </div>
  )
}
