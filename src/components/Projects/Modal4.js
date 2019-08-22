import React, { Component } from 'react';
import roaminghobo from '../../Images/roaminghobo.png'

class Modal1 extends Component {
    constructor (props) {
      super(props)
      
      this.state = {
        modalOpened: false
      }
      
      this.modalToggle = this.modalToggle.bind(this)
    }
    
    modalToggle () {
      this.setState({ modalOpened: !this.state.modalOpened })
    }
  
    render () {
      const coverClass = this.state.modalOpened ? 'modal-cover modal-cover-active' : 'modal-cover'
      const containerClass = this.state.modalOpened ? 'modal-container modal-container-active' : 'modal-container'
      return (
        <div>
          <button className='btn' onClick={this.modalToggle}>Raspberry PI RC Car<br/>(Full-Stack Project)</button>
          
          <div className={containerClass}>
            <div className='modal-header'>
              <div className="projectName">
                <h1>The Roaming Hobo</h1>
              </div>
              <div className="projectName">
                <h1>Full-Stack Project</h1>
              </div>
            </div>
            <div className='modal-body'>
              <div className="screenShot">
                <img src={roaminghobo} alt=""/>
              </div>
              <div className="projectLinks">
                <h3>Technologies used</h3>
                <p>React, Node.js, Javascript, Socket.IO, Firebase, Raspberry pi, Johnny-Five, CSS</p>
                <p>
                    We build a full-stack web app that let us control our Raspberry pi RC car that we builded or any person's build RC car.
                    User can register and/or login with Google or Twitter.
                    Once connected to the RC car it will bring you to an interface with feed from the Raspberry Pi Camera and display direction
                      buttons that can control with arrow Keys or WASD Keys when pressed.
                </p>
              </div>
            </div>
            <div className='modal-footer'>
              <div className="sites">
                <a href="https://github.com/brandonhdez7/capstoneProject" target="_blank"><i className="fab fa-github icon-3d"></i>  Github</a>
                <a href="#" target="_blank"><i className="fas fa-desktop icon-3d"></i>  Live Demo</a>
              </div>
            </div>
          </div>
          
          <div className={coverClass} onClick={this.modalToggle}></div>
        </div>
      )
    }
  }

  export default Modal1;