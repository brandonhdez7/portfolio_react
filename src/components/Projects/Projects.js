import React, { Component } from 'react';
import Header from '../Header/header'
import DarkModeToggle from '../LightMode/DarkModeToggle';
import Modal1 from './Modal1'
import Modal2 from './Modal2'
import Modal3 from './Modal3'
import Modal4 from './Modal4'

class Projects extends Component {
    render () {
      return(
          <div className="page">
            <Header />
            <div className="projectsPage">
            <DarkModeToggle />
                <div className="projectTitle">
                    <i className="code4">{`<h1>`}</i>
                        <h1>Projects</h1>
                    <i className="end4">{`</h1>`}</i>
                    <hr/>
                </div>
                <div className="projects">
                    <Modal1 />
                    <Modal2 />
                    <Modal3 />
                    <Modal4 />
                </div>
            </div>
          </div>
        ) 
    }
  }

  export default Projects