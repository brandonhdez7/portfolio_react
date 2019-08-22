import React, { Component } from 'react';
import Header from '../Header/header'
import AboutImage from "../../Images/50531528_555962024873475_7809065299424051200_n.png"
import DarkModeToggle from '../LightMode/DarkModeToggle';

class About extends Component {
    render() {
        return (
            <div className="page">
                <Header />
                <div className="aboutPage">
                <DarkModeToggle />
                    <div className="title">
                        <i className="code1">{`<h1>`}</i>
                            <h1>About</h1>
                        <i className="end1">{`</h1>`}</i>
                        <hr/>
                        <p>My name is Brandon, I'm a full-stack developer. With the passion for creating something and seeing it come to life.
                        I truly believe in the impact web-development has in connecting users from all over the world and
                        making their lives easier by creating something new. My first experience in web-development was  
                        attending General Assembly for their Front-end Course. I loved it so much I just wanted to keep on learning,
                        that's when I found Digital Crafts which has been perhaps my best experience so far. As I have discovered my love for detail-responsive
                        web design.</p>
                    </div>
                    <div className="profileImage">
                        <img src={AboutImage} alt=""/>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;