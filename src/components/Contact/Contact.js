import React, { Component } from 'react';
import Header from '../Header/header'
import DarkModeToggle from '../LightMode/DarkModeToggle';

class Contact extends Component {
    render() {
        return (
            <div className="page">
                <Header />
                <div className="contactPage">
                    <DarkModeToggle />
                    <div className="form1">
                        <form className="form_contact" action="https://formspree.io/brandonhdez7@gmail.com" method="POST">
                            <i className="code3">{`<h1>`}</i>
                                <h1>Reach Out</h1>
                                <i className="end3">{`</h1>`}</i>    
                            <hr/>
                            <i className="cntfrmicn fa fa-user"></i>
                            <input name="name" className="form-fields" type="text"/>
                            <i className="cntfrmicn fa fa-envelope"></i>
                            <input name="email" className="form-fields" type="email"/>
                            <i className="cntfrmicn fa fa-phone"></i>
                            <input name="Phone" className="form-fields" type="text"/>
                            <i className="cntfrmicn fa fa-comment"></i>
                            <textarea className="form-fields" name="textarea"></textarea>
                            <button className="form_button" value="Send" type="submit">Send <i className="fa fa-paper-plane"></i></button>
                        </form>
                    </div>


                    <div className="form2">
                        <div className="info">
                            <h1>Location:</h1>
                            <h3>Atlanta, GA</h3>
                            <h1>Phone:</h1>
                            <h3>(678)773-7241</h3>
                            <h1>Email:</h1>
                            <h3>brandonhdez7@gmail.com</h3>
                        </div>

                        <div className="contact_icon">
                            <h1>Follow Me</h1>
                            <div className="contact_links">
                                <a href="https://www.linkedin.com/in/brandon-hernandez-34254b175/"><i className="fab fa-linkedin fa-lg icon-3d"></i><span>Linkedin</span></a>
                                <a href="https://docs.google.com/document/d/12NPapeAoa-euUMEh4euaZ6697IGdC9fjA3JDo2lduEs/edit?usp=sharing" target="_blank"><i className="fa fa-file-alt fa-lg icon-3d"></i><span>Resume</span></a>
                                <a href="https://github.com/brandonhdez7"><i className="fab fa-github fa-lg icon-3d"></i><span>Github</span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;