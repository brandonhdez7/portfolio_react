import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {Link} from 'react-router-dom'
import Hamburger from './Hamburger'

class Header extends Component {
    render() {
        return (
            <div className="navigation">
                <div className="menu-section">
                    <Hamburger />
                </div>


                <div className="navbar">
                    <div className="icon1">
                        <Link to="/"><i className="fa fa-home fa-lg icon-3d"></i><span>Home</span></Link>
                        <Link to="/About"><i className="fa fa-user fa-lg icon-3d"></i><span>About</span></Link>
                        <Link to="/Projects"><i className="fa fa-laptop-code fa-lg icon-3d"></i><span>Projects</span></Link>
                        <Link to="/Skills"><i className="fa fa-glasses fa-lg icon-3d"></i><span>Skills</span></Link>
                        <Link to="/Contact"><i className="fa fa-envelope fa-lg icon-3d"></i><span>Contact</span></Link>
                    </div>
                    <div className="icon2">
                        <a href="https://www.linkedin.com/in/brandon-hernandez-34254b175/" target="_blank"><i className="fab fa-linkedin fa-lg icon-3d"></i><span>Linkedin</span></a>
                        <a href="https://docs.google.com/document/d/12NPapeAoa-euUMEh4euaZ6697IGdC9fjA3JDo2lduEs/edit?usp=sharing" target="_blank"><i className="fab fa-file-alt fa-lg icon-3d"></i><span>Resume</span></a>
                        <a href="https://github.com/brandonhdez7" target="_blank"><i className="fab fa-github fa-lg icon-3d"></i><span>Github</span></a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;